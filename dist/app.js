"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const morgan_1 = __importDefault(require("morgan"));
class App {
    constructor() {
        this.app = express_1.default();
        this.configurations();
        this.middlewares();
        this.routes();
    }
    configurations() {
        dotenv_1.config();
        this.app.set('port', process.env.PORT || 50000);
    }
    middlewares() {
        this.app.use(morgan_1.default('tiny'));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use((req, res) => {
            res.status(404).json({ error: 'This page don´t exist' });
        });
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.app.listen(this.app.get('port'));
                console.log('Server on port:', this.app.get('port'));
            }
            catch (error) {
                console.log('Server error:', error);
            }
        });
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map