"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express in typescript file
var express_1 = __importDefault(require("express"));
// Initialize the express engine
var app = (0, express_1.default)();
var router = express_1.default.Router();
// Take a port 3000 for running server.
var port = 3000;
var dashboard_controller_1 = require("./dashboard-controller");
app.use(dashboard_controller_1.dashboardRouter);
// Server setup
app.listen(port, function () {
    console.log("TypeScript with Express\n         http://localhost:".concat(port, "/"));
});
