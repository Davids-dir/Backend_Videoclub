const router = require ('express').Router ();
const OrderController = require ('../controllers/OrderController');

router.post ('/create', OrderController.create);

module.exports = router;