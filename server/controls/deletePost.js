import information from "../model/information.js";

export const deletePost = async(req ,res) => {
    try {
         await information.findByIdAndDelete(req.params.id);
         res.status(200)
    }
    catch(err) {
        res.send(err.message)
    }
    
}