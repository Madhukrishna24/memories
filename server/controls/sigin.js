import User from "../model/user.js"

export const SignRoute = async(req,res) => {
    try {
        const {username, email, password} = req.body
        const exist = await User.findOne({email})
        if(exist) return res.status(400).send("User is Already exist")
        const newUser = User({
            username,
            email,
            password
        })

        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(404).send(error.message)
    }
    

} 