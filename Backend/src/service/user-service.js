import UserRepository from "../repository/user-repository.js";


class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail({email,person}){
        try {
            const user = await this.userRepository.findBy({email,person});
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signin(data){
        try {
            const user = await this.getUserByEmail({email:data.email,person:data.person});
            
            if(!user) {
                throw {
                    message: 'no user found'
                };
            }
            if(!user.comparePassword(data.password)) {
                throw {
                    message: 'incorrect password',
                };
            }
            const userInfo = {
                id : user._id,
                person : user.person
            }
            // const token = user.genJWT();
            // return user.person;
            return userInfo;
        } catch(error) {
            throw error;
        }
    }

    // async isAuthenticated(token){
    //     try {
    //         const  response  =   this.verifyToken(token);
    //         if(!response){
    //             throw {error:'Invalid Token'};
    //         }
    //         const user = await  this.userRepository.get(response.id);
            
    //         if(!user){
    //             throw {error:'No user with the corresponding token exist'};
    //         }
    //         return user.id;
    //     } catch (error) {
    //         console.log("Something went wrong in the token creation");
    //         throw error;
    //     }
    // }

    // verifyToken(token){
    //     try {
    //         const response = jwt.verify(token,'tender_secret');
    //         return response;
    //     } catch (error) {
    //         console.log("Something went wrong in the token validation");
    //         throw error;
    //     }
    // }
}

export default UserService;
