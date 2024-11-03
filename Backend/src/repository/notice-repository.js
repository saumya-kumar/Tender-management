import Notice from "../model/notice.js";



class NoticeRepository   {
    
    async create(data){
        try {
            const result = await Notice.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in the Notice repository layer");
            throw error;
        }
    }
}

export default NoticeRepository;