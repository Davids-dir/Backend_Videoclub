const router = require ('express').Router ();
const UserController = require ('../controllers/UserController')

router.post ('/signup', UserController.signup);
router.get ('/profile', UserController.profile);
router.delete ('/remove', UserController.delete);


module.exports = router;