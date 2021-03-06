const router = require ('express').Router ();
const UserController = require ('../controllers/UserController')

router.post ('/signup', UserController.signup);
router.post ('/login', UserController.login);
router.get ('/profile/:email', UserController.profile);
router.delete ('/remove/:email', UserController.delete);


module.exports = router;