"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.test = void 0;
function test(expression) {
    var messages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messages[_i - 1] = arguments[_i];
    }
    if (expression)
        return false;
    // Default message
    if (messages.length === 0)
        messages.push('console.assert');
    return {
        method: 'error',
        data: __spreadArrays(["Assertion failed:"], messages)
    };
}
exports.test = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQWdCLElBQUksQ0FBQyxVQUFlO0lBQUUsa0JBQWtCO1NBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtRQUFsQixpQ0FBa0I7O0lBQ3RELElBQUksVUFBVTtRQUFFLE9BQU8sS0FBSyxDQUFBO0lBRTVCLGtCQUFrQjtJQUNsQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUUxRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLGtCQUFHLG1CQUFtQixHQUFLLFFBQVEsQ0FBQztLQUN6QyxDQUFBO0FBQ0gsQ0FBQztBQVZELG9CQVVDIn0=