class HelloController {
    async index(req, res) {
        return res.json({ hello: 'world olá' });
    }
}

export default new HelloController();