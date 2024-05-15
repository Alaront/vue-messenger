class UserController {
    async registration(req, res, next) {
        try {
            res.send('registration next')
        } catch (e) {
            res.send('registration error')
        }
    }
}

export default new UserController()
