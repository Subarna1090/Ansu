import express from "express";
import { createEmployee, getEmployees, getEmployee, deleteEmployee, updateEmployee } from "../service/employeeService.js";

const router=express.Router();
router.route("/").post(createEmployee);
router.route("/").get(getEmployees);
router.route("/:id").get(getEmployee);
router.route("/:id").delete(deleteEmployee);
router.route("/:id").put(updateEmployee);

export { router };