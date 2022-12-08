const controllers = require("../controllers");

const router = require("express").Router()

router.post("/login", controllers.Login)
router.post("/register", controllers.Register)
router.get("/users", controllers.getUsers)

module.exports = router;