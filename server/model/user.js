import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function (pas){
    return await bcrypt.compare(pas,this.password)
}

export default mongoose.model("User", userSchema);