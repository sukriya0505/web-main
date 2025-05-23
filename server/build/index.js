"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/", user_routes_1.default);
app.use("/api/auth", auth_1.default);
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map
