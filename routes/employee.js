const controllers = require("../controllers");

const router = require("express").Router()

router.post("/create-employee", controllers.Employee)
router.get("/get-employee", controllers.getEmployees)

module.exports = router;