const Employee = require("../models/employee");

exports.Employee = async (req, res, next) => {
  try {
    let employee = new Employee({
      fullname: req.body.fullname,
      email: req.body.email,
      contact: req.body.contact,
      address: req.body.address,
      deleted: false,
    });
    employee
      .save()
      .then((employee) => {
        res
          .status(201)
          .json({
            responseStatusCode: 201,
            responseDescription: "Employee was created successfully",
            data: employee,
          });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(401)
          .json({
            responseStatusCode: 401,
            responseDescription:
              "Client side error, check on your request body",
            data: err,
          });
      });
  } catch (error) {
    if (error) {
      return res.status(500).json({
        success: false,
        errors: "Failed to add a new entry",
      });
    }
    next(error);
  }
};

exports.getEmployees = async (req, res, next) => {
  try {
    const employee = await Employee.find({}).where("deleted").equals(false)
    if (employee) {
      res.status(200).json({ employee })
    } else {
      throw new Error();
    }
  } catch (error) {
    if (error) {
      return res.json({
        success: false,
        errors: "No details found",
      });
    }
  }
}

exports.getAllDeletedEmployees = async (req, res) => {
  Employee.find()
    .where("deleted")
    .equals(true)
    .then((data) => {
      res
        .status(200)
        .json({
          responseStatusCode: 200,
          responseDescription: "Employees fetch success!",
          data: data,
        });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(200)
        .json({
          responseStatusCode: 500,
          responseDescription:
            "we encountered an error while fetching the Employees!",
          error: err,
        });
    });
};

exports.softDeleteEnployees = async (req, res, next) => {
  let deleteReqBody = {
    deleted: true,
  };
  Employee.findByIdAndUpdate({ _id: req.body.id }, deleteReqBody)
    .then((data) => {
      res.status(200).json({
        responseStatusCode: 200,
        responseDescription: "Employee soft deleted successfully!",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        responseStatusCode: 500,
        responseDescription:
          "we encountered an error while deleting the employee! supply a correct ID",
        error: err,
      });
    });
};