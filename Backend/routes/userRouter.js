const router = require("express").Router();

const {userCtrl} = require("../controllers/userCtrl");
const auth = require("../mddleware/auth");

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/logout", userCtrl.logout);

router.get("/refresh_token", userCtrl.refreshToken);

router.get("/", auth, userCtrl.getUser);
router.get('/:id', userCtrl.getUser )

router.post('/addcart', auth, userCtrl.addCart)

router.get('/history', auth, userCtrl.history)

module.exports = router;
