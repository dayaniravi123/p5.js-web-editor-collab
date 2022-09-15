"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var emotion_theming_1 = require("emotion-theming");
var elements_1 = require("./elements");
var Formatted_1 = __importDefault(require("./message-parsers/Formatted"));
var Object_1 = __importDefault(require("./message-parsers/Object"));
var Error_1 = __importDefault(require("./message-parsers/Error"));
// https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions
var reSubstitutions = /(%[coOs])|(%(([0-9]*[.])?[0-9]+)?[dif])/g;
var ConsoleMessage = /** @class */ (function (_super) {
    __extends(ConsoleMessage, _super);
    function ConsoleMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = function (theme) { return (__assign(__assign({}, theme), { method: _this.props.log.method })); };
        return _this;
    }
    ConsoleMessage.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.log.amount !== nextProps.log.amount;
    };
    ConsoleMessage.prototype.render = function () {
        var log = this.props.log;
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.theme },
            React.createElement(elements_1.Message, { "data-method": log.method },
                log.amount > 1 ? React.createElement(elements_1.AmountIcon, null, log.amount) : React.createElement(elements_1.Icon, null),
                log.timestamp ? React.createElement(elements_1.Timestamp, null, log.timestamp) : React.createElement("span", null),
                React.createElement(elements_1.Content, null, this.getNode()))));
    };
    ConsoleMessage.prototype.getNode = function () {
        var _a;
        var log = this.props.log;
        // Error handling
        var error = this.typeCheck(log);
        if (error)
            return error;
        // Chrome formatting
        if (log.data.length > 0 && typeof log.data[0] === 'string') {
            var matchLength = (_a = log.data[0].match(reSubstitutions)) === null || _a === void 0 ? void 0 : _a.length;
            if (matchLength) {
                var restData = log.data.slice(1 + matchLength);
                return (React.createElement(React.Fragment, null,
                    React.createElement(Formatted_1["default"], { data: log.data }),
                    restData.length > 0 && (React.createElement(Object_1["default"], { quoted: false, log: __assign(__assign({}, log), { data: restData }), linkifyOptions: this.props.linkifyOptions }))));
            }
        }
        // Error panel
        if (log.data.every(function (message) { return typeof message === 'string'; }) &&
            log.method === 'error') {
            return React.createElement(Error_1["default"], { error: log.data.join(' ') });
        }
        // Normal inspector
        var quoted = typeof log.data[0] !== 'string';
        return (React.createElement(Object_1["default"], { log: log, quoted: quoted, linkifyOptions: this.props.linkifyOptions }));
    };
    ConsoleMessage.prototype.typeCheck = function (log) {
        if (!log) {
            return (React.createElement(Formatted_1["default"], { data: [
                    "%c[console-feed] %cFailed to parse message! %clog was typeof " + typeof log + ", but it should've been a log object",
                    'color: red',
                    'color: orange',
                    'color: cyan',
                ] }));
        }
        else if (!(log.data instanceof Array)) {
            return (React.createElement(Formatted_1["default"], { data: [
                    '%c[console-feed] %cFailed to parse message! %clog.data was not an array!',
                    'color: red',
                    'color: orange',
                    'color: cyan',
                ] }));
        }
        return false;
    };
    return ConsoleMessage;
}(React.Component));
exports["default"] = ConsoleMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnQvTWVzc2FnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThCO0FBRTlCLG1EQUErQztBQUUvQyx1Q0FBMEU7QUFFMUUsMEVBQW1EO0FBQ25ELG9FQUFpRDtBQUNqRCxrRUFBZ0Q7QUFFaEQsc0ZBQXNGO0FBQ3RGLElBQU0sZUFBZSxHQUFHLDBDQUEwQyxDQUFBO0FBRWxFO0lBQTZCLGtDQUFrQztJQUEvRDtRQUFBLHFFQStGQztRQTFGQyxXQUFLLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSx1QkFDckIsS0FBSyxLQUNSLE1BQU0sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQzdCLEVBSHdCLENBR3hCLENBQUE7O0lBdUZKLENBQUM7SUE5RkMsOENBQXFCLEdBQXJCLFVBQXNCLFNBQVM7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFDdkQsQ0FBQztJQU9ELCtCQUFNLEdBQU47UUFDVSxJQUFBLEdBQUcsR0FBSyxJQUFJLENBQUMsS0FBSyxJQUFmLENBQWU7UUFDMUIsT0FBTyxDQUNMLG9CQUFDLCtCQUFhLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzlCLG9CQUFDLGtCQUFPLG1CQUFjLEdBQUcsQ0FBQyxNQUFNO2dCQUM3QixHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQUMscUJBQVUsUUFBRSxHQUFHLENBQUMsTUFBTSxDQUFjLENBQUMsQ0FBQyxDQUFDLG9CQUFDLGVBQUksT0FBRztnQkFDakUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsb0JBQUMsb0JB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