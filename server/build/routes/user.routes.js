"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
router.post("/user", user_controller_1.createUser);
router.put("/user/:id", user_controller_1.updateUser);
router.get("/users", user_controller_1.getAllUser);
router.get("/user/:id", user_controller_1.findAUser);
router.delete("/user/:id", user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map
