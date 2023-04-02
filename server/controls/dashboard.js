import Information from '../model/information.js'
export const DashBoard = async(req,res) => {
    try{
        const exist = await Information.find({user:req.user.id})
        if(!exist) return res.status(404).send("User not found")
        res.json(exist)
    }
    catch(err){
        console.log(err);
    }
}