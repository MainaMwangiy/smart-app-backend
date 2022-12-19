const controllers = require("../controllers");

const router = require("express").Router()

router.post("/login", controllers.Login)
router.post("/register", controllers.Register)
router.get("/users", controllers.getUsers)
router.post("/delete", controllers.softDeleteUsers)
router.get("/getdeleted", controllers.getAllSoftDeletedUsers)

module.exports = router;