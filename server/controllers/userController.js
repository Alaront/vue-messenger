import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import ApiError from "../Utils/ApiError.js";
import {User} from "../models/models.js";

const generateJwt = (id, email) => {
    return jwt.sign({id, email}, process.env.SECRET_KEY)
}

class UserController {
    async registration(req, res, next) {
        try {
            console.log(req.body)
            const {name, email, login, password} = req.body

            console.log(email)

            if(!name || !email || !login || !password) {
                return next(ApiError(`Dont set: ${name ? '' : 'name'} ${email ? '' : 'email'} ${login ? '' : 'login'} ${password ? '' : 'password'}`))
            }

            const candidate = await User.findOne({where: {email}})

            if(candidate) {
                return next(ApiError.badRequest('This user already exists'))
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({
                name: name,
                login: login,
                email: email,
                password: hashPassword
            })

            const token = generateJwt(user.id, email)

            return res.json({token})
        } catch (e) {
            console.log(e)
            return next(ApiError.badRequest('Error', e))
        }
    }
}

export default new UserController()
