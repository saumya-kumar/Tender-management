import Tender from "../model/tender.js";
import CrudRepository from "./crud-repository.js";
import BidRepository from "./bid-repository.js";
class TenderRepository extends CrudRepository {
    constructor(){
        super(Tender);
    }

    async get(id){
        try {
            const result = await Tender.findById(id).populate({
                                                        path:'bids',
                                                        populate:{
                                                            path:'user',
                                                        }
                                                    })
            console.log(result);
            return result;
        } catch (error) {
            console.log("Something went wrong in the tender repository layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const result = await Tender.findById(id);
            if (!result) {
                throw new Error('Tender not found');
            }
    
            const tenderBids = result.bids;
            const bidRepository = new BidRepository();
    
            // Use Promise.all to handle async operations correctly
            await Promise.all(tenderBids.map(async (bidId) => {
                await bidRepository.destroy(bidId);
            }));
    
            const response = await Tender.findByIdAndDelete(id); 
            return response;
        } catch (error) {
            console.log(error);
            console.log("Something went wrong in the tender repository layer");
            throw error;
        }
    }
}



export default TenderRepository;