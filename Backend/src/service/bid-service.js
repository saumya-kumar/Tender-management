import BidRepository from "../repository/bid-repository.js";
import TenderRepository from "../repository/tender-repository.js";

class BidService {
    constructor(){
        this.bidRepository = new BidRepository();
        this.tenderRepository = new TenderRepository();
    }

    async createBid(bidAmount , tenderId , userId){
        try {
            const tender = await this.tenderRepository.get(tenderId);
            const  bidData = {
                bidAmount : bidAmount,
                tender : tenderId,
                user : userId,
            }
            const bid = await this.bidRepository.create(bidData);
            tender.bids.push(bid);
            await tender.save();
            return bid;
        } catch (error) {
            throw {error};
        }
    }
}


export default BidService;