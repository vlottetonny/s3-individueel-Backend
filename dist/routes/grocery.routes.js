"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grocery_controller_1 = require("../controllers/grocery.controller");
const router = (0, express_1.Router)();
router.get("/:id", grocery_controller_1.getGroceryById);
exports.default = router;
