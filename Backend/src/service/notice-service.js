import NoticeRepository from "../repository/notice-repository.js";


class NoticeService {

    constructor(){
        this.noticeRepository = new NoticeRepository();
    }

    async createNotice(data){
        try {
            const notice = await this.noticeRepository.create(data);
            return notice;
        } catch (error) {
            throw {error};
        }
    }

    async deleteNotice(NoticeId){
        try {
            const response = await this.noticeRepository.destroy(NoticeId);
            return response;
        } catch (error) {
            throw {error};
        }
    }

    async getNotice(NoticeId){
        try {
            const notice  = await this.noticeRepository.get(NoticeId);
            return notice;
        } catch (error) {
            throw {error};
        }
    }

    async getAllNotice(){
        try {
            const notices = await this.noticeRepository.getAll();
            return notices;
        } catch (error) {
            throw {error};
        }
    }
}

export default NoticeService