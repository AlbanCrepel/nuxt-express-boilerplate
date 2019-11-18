const express = require("express")
const router = express.Router()

module.exports = () => {

    router.post('/test', (req, res) => {
        const payload = req.body;
        res.send({ message : `Hello ${ payload.email }!` })
    });

    return router
}
