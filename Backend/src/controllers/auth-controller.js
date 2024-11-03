import UserService from '../service/user-service.js';

const userService = new UserService();

export const signup = async (req, res) => {
    try {
        const response = await userService.signup({
            person:req.body.person,
            name: req.body.name,
            email: req.body.email,
            phone:req.body.phone,
            company:req.body.company,
            password: req.body.password,
        });
        return res.status(201).json({
            success: true,
            message: `Successfully created a ${req.body.person}`,
            data: response,
            err: {}
        });
    } catch(err) {
        return res.status(500).json({
            message: 'User is not created',
            data: 'Something went wrong',
            success: false,
            err: err
        });
    }
}

// localhost:3000/api/v1/login
export const login = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
        
    } catch(error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: "User not Found",
            success: false,
            err: error
        });
    }
}


// export const isAuthenticated = async (req,res) =>{
//     try {

//         const response = await userService.isAuthenticated(req.body);
//         return res.status(201).json({
//             success:true,
//             message:'user is Authenticated and token is valid',
//             data:response,
//             err:{}
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             message:"something went wrong",
//             data:{},
//             success: false,
//             err:error,
//         })
//     }
// }

