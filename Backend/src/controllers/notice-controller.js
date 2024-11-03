import NoticeService from "../service/notice-service.js";

const noticeService = new NoticeService();

export const createNotice = async(req,res) => {
    try {
        const response = await noticeService.createNotice(req.body);
        return res.status(201).json({
            success: true,
            message: `Successfully created a Notice`,
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Notice is not created',
            data: 'Something went wrong',
            success: false,
            err: error
        });
    }
}

export const destroyNotice = async(req,res) => {
    try {
        const response = await noticeService.deleteNotice(req.params.id);
        return res.status(201).json({
            success: true,
            message: `Successfully deleted a Notice`,
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Notice is not deleted',
            data: 'Something went wrong',
            success: false,
            err: error
        });
    }
}

export const getNotice = async(req,res) => {
    try {
        const response = await noticeService.getNotice(req.params.id);
        return res.status(201).json({
            success: true,
            message: `Successfully fetched a Notice`,
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Notice is not fetched',
            data: 'Something went wrong',
            success: false,
            err: error
        });
    }
}

export const getAllNotice = async(req,res) => {
    try {
        const response = await noticeService.getAllNotice();
        return res.status(201).json({
            success: true,
            message: `Successfully fetched All the Notice`,
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Notice is not fetched',
            data: 'Something went wrong',
            success: false,
            err: error
        });
    }
}



