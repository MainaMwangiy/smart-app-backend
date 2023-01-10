const controllers = require("../controllers");

const router = require("express").Router()

router.post("/create-employee", controllers.Employee)
router.get("/get-employee", controllers.getEmployees)
router.post("/delete", controllers.softDeleteEnployees)
router.get("/getdeleted", controllers.getAllDeletedEmployees)

module.exports = router;