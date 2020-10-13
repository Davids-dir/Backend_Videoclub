const router = require ('express').Router ();
const OrderController = require ('../controllers/OrderController');

router.post ('/create', OrderController.orderCreate);

module.exports = router;