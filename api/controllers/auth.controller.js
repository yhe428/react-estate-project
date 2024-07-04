import bcrypt from 'bcrypt';
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    //db operations

    const {username, email, password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        })
        console.log(newUser)

        res.status(201).json({message: 'User registered successfully.'});
    }catch (err){
        console.log(err);
        res.status(400).json({message: 'Failed to create user.'});
    }


}
export const login = async (req, res) => {
    //db operations
    const {username, password} = req.body;

    try{
        //check user if exists
        const user = await prisma.user.findUnique({
            where:{username}
        });

        if(!user)return res.status(401).json({message:'Invalid Credentials!'});
        //check password if correct
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if(!isPasswordMatch) return res.status(401).json({message:'Invalid Credentials!'});

        //generate cookie token and send to user
        // res.setHeader("Set-Cookie", "test="+"myValue").json("success");
        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign({
            id:user.id,
            isAdmin: true,
        }, process.env.JWT_SECRET_KEY, {expiresIn: age});

        const {password:userPassword, ...userInfo} = user

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,

        }).status(200).json(userInfo);

    }catch(err){
        console.log(first);
        res.status(500).json({message: 'Failed to login'});

    }
}
export const logout = (req, res) => {
    //db operations

    res.clearCookie("token").status(200).json({message:'Logged out successfully.'});
}