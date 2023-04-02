import jwt from 'jsonwebtoken';
export const MiddleWare = async(req,res,next) => {
    try {
        const token = req.header('x-token');
        if(!token) return res.status(404).send("User not found")
        const deCoded =  jwt.verify(token, 'thisisthekey')
        req.user = deCoded.user
        next()
    } catch (error) {
        res.status(400).send("Token not found")
    }
    

}