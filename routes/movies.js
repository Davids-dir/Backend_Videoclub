const router = require ('express').Router ();
const MovieController = require ('../controllers/MovieController')

router.get ('/list', MovieController.show);
router.get ('/:id', MovieController.showById);
router.post ('/title', MovieController.showByTitle);

module.exports = router;