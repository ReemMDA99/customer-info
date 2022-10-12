let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Customer Model
let customerSchema = require('../models/Customers');
  
// CREATE Customer
router.post("/create-customer", (req, res, next) => {
  customerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
  
// READ Customers
router.get("/", (req, res) => {
  customerSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
  
// UPDATE customer
router
  .route("/update-customer/:id")
  // Get Single Customer
  .get((req, res) => {
    customerSchema.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  
  // Update Customer Data
  .put((req, res, next) => {
    customerSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Customer updated successfully !");
        }
      }
    );
  });
  
// Delete Customer
router.delete("/delete-customer/:id", 
(req, res, next) => {
  customerSchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
  
module.exports = router;