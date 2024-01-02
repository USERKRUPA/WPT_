import axios from 'axios'
const baseURL = "http://localhost:9000/users"

class UserService{
    constructor(){

    }
    insertuser(user){
        console.log(user);
        return axios.post(baseURL, user);
    }
    getAllUsers(){
        return axios.get(baseURL);
    }
    updateUser(user){
        return axios.put(baseURL+"/"+user.first_name, user);
    }
    deleteUser(fnm){
        return axios.delete(baseURL+"/"+fnm);
    }

}

export default new UserService();