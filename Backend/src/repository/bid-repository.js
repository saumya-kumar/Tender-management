import Bid from "../model/bid.js";
import CrudRepository from "./crud-repository.js";


class BidRepository  extends CrudRepository {
    constructor(){
        super(Bid);
    }
}

export default BidRepository;