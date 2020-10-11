const router = require ('express').Router ();
const MovieController = require ('../controllers/MovieController')

router.get ('/list', MovieController.show);
router.get ('/listById/:id', MovieController.showById);
router.post ('/listByTitle', MovieController.showByTitle);

module.exports = router;