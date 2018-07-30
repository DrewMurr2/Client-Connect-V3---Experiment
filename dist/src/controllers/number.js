"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/**
 *  GET /number/getAll
 */
exports.getNumbers = (req, res) => {
    res.status(200).send("<h2>Another output </h2>" + exports.functionToTest(2));
};
exports.anotherFunc2 = () => {
    return 0;
};
exports.functionToTest = (input) => {
    return input * input;
};
exports.anotherFunc = () => {
    return 0;
};
let router = express_1.Router();
router.post('/two', function (req, res) {
    res.send('it worked');
});
exports.routertest = router;
//# sourceMappingURL=number.js.map