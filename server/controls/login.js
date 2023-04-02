import User from '../model/user.js'
import jwt from 'jsonwebtoken'
export const LoginRoute = async(req,res) => {
    try {
        const { email, password } = req.body
        const exist = await User.findOne({email})
        if(!exist) return res.status(400).send('User not Exist')
        if(!(await exist.matchPassword(password))) return res.status(400).send("Inavalid Credentials")
        if(exist && (await exist.matchPassword(password))){
        jwt.sign({
                user :{
                    id: exist._id
                }
            },'thisisthekey',{expiresIn: '1d'},(err,token) => {
                if(err){
                    console.log(err);
                }
                res.json({token})
            })
        }
        
    } catch (error) {
        res.status(404).send(error.message)
    }
    
}