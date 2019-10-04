const Router = require('express');
const router = Router();
const Order = require('../models/Order');

router.post('/order', async (req, res) => {
    try {
        const order = await new Order(req.body).save();
        res.json({success: true});
    } catch (error) {
        res.send({error: true});
    }
});

router.get('/user-orders/:id', async (req, res) => {
   const user_id = { $text: { $search: req.params.id } };
   const orders = await Order.find(user_id);
   res.send(orders)
});

module.exports = router;