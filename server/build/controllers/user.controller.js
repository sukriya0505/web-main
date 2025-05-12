"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser =
  exports.findAUser =
  exports.getAllUser =
  exports.updateUser =
  exports.createUser =
    void 0;
const db_config_1 = __importDefault(require("../database/db.config"));
// create user
const createUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { name, email, phone } = req.body;
    const findUser = yield db_config_1.default.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) {
      return res.status(400).json({
        message: "Email already taken please use another email address",
      });
    }
    const newUser = yield db_config_1.default.user.create({
      data: {
        name: name,
        email: email,
        phone: phone,
      },
    });
    const serializedUser = Object.assign(Object.assign({}, newUser), {
      phone:
        (_a = newUser.phone) === null || _a === void 0 ? void 0 : _a.toString(),
      id: newUser.id.toString(),
      created_at: newUser.created_at.toISOString(),
    });
    return res
      .status(201)
      .json({ data: serializedUser, message: "new user has been created" });
  });
exports.createUser = createUser;
// update a user
const updateUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const { name, email, phone } = req.body;
    yield db_config_1.default.user.update({
      where: {
        id: Number(userId), // convert to the Number
      },
      data: {
        name,
        email,
        phone,
      },
    });
    return res
      .status(201)
      .json({
        data: exports.updateUser,
        message: "userdata  has been updated",
      });
  });
exports.updateUser = updateUser;
// get all users
const getAllUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db_config_1.default.user.findMany({});
    const usersWithSerializedBigInt = users.map((user) => {
      var _a;
      return Object.assign(Object.assign({}, user), {
        phone:
          (_a = user.phone) === null || _a === void 0 ? void 0 : _a.toString(),
      });
    });
    return res
      .status(200)
      .json({ message: "All users data ", data: usersWithSerializedBigInt });
  });
exports.getAllUser = getAllUser;
// find a user
const findAUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const user = yield db_config_1.default.user.findFirst({
      where: {
        id: Number(userId),
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userWithSerializedBigInt = Object.assign(Object.assign({}, user), {
      id: user.id.toString(),
      phone: user.phone ? user.phone.toString() : null,
    });
    return res.status(200).json({ data: userWithSerializedBigInt });
  });
exports.findAUser = findAUser;
//delete a user
const deleteUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const user = yield db_config_1.default.user.delete({
      where: {
        id: Number(userId),
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userWithSerializedBigInt = Object.assign(Object.assign({}, user), {
      id: user.id.toString(),
      phone: user.phone ? user.phone.toString() : null,
    });
    return res.status(200).json({ message: "user deleted" });
  });
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map
