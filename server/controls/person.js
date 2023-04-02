import information from "../model/information.js";

export const personDetails = async(req,res) => {
    const {name,message,date} = req.body;
    const {id} = req.user;
    const person = new information({
        user: id,
        name,
        message,
        date,
    })
    await person.save()
    res.json(person)
}