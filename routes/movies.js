const router = require ('express').Router ();
const MovieController = require ('../controllers/MovieController')

router.get ('/list', MovieController.show);

module.exports = router;