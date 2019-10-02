const Router = require('express');
const router = Router();
const Order = require('../models/Order');
module.exports = router;

router.post('/order', async (req, res) => {
    try {
        const order = await new Order(req.body).save();
        res.json(order);
    } catch (error) {
        res.send(error);
    }
});