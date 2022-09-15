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
var default_1 = __importDefault(require("./theme/default"));
var elements_1 = require("./elements");
var Message_1 = __importDefault(require("./Message"));
// https://stackoverflow.com/a/48254637/4089357
var customStringify = function (v) {
    var cache = new Set();
    return JSON.stringify(v, function (key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.has(value)) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our set
            cache.add(value);
        }
        return value;
    });
};
var getTheme = function (props) { return ({
    variant: props.variant || 'light',
    styles: __assign(__assign({}, default_1["default"](props)), props.styles)
}); };
var Console = /** @class */ (function (_super) {
    __extends(Console, _super);
    function Console() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            theme: getTheme(_this.props),
            prevStyles: _this.props.styles,
            prevVariant: _this.props.variant
        };
        return _this;
    }
    Console.getDerivedStateFromProps = function (props, state) {
        if (props.variant !== state.prevVariant ||
            JSON.stringify(props.styles) !== JSON.stringify(props.prevStyles)) {
            return {
                theme: getTheme(props),
                prevStyles: props.styles,
                prevVariant: props.variant
            };
        }
        return null;
    };
    Console.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.filter, filter = _b === void 0 ? [] : _b, _c = _a.logs, logs = _c === void 0 ? [] : _c, searchKeywords = _a.searchKeywords, logFilter = _a.logFilter, _d = _a.logGrouping, logGrouping = _d === void 0 ? true : _d;
        if (searchKeywords) {
            var regex_1 = new RegExp(searchKeywords);
            var filterFun = logFilter
                ? logFilter
                : function (log) {
                    try {
                        return regex_1.test(customStringify(log));
                    }
                    catch (e) {
                        return true;
                    }
                };
            // @ts-ignore
            logs = logs.filter(filterFun);
        }
        if (logGrouping) {
            // @ts-ignore
            logs = logs.reduce(function (acc, log) {
                var prevLog = acc[acc.length - 1];
                if (prevLog &&
                    prevLog.amount &&
                    prevLog.method === log.method &&
                    prevLog.data.length === log.data.length &&
                    prevLog.data.every(function (value, i) { return log.data[i] === value; })) {
                    prevLog.amount += 1;
                    return acc;
                }
                acc.push(__assign(__assign({}, log), { amount: 1 }));
                return acc;
            }, []);
        }
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.state.theme },
            React.createElement(elements_1.Root, null, logs.map(function (log, i) {
                // If the filter is defined and doesn't include the method
                var filtered = filter.length !== 0 &&
                    log.method &&
                    filter.indexOf(log.method) === -1;
                return filtered ? null : (React.createElement(Message_1["default"], { log: log, key: log.id || log.method + "-" + i, linkifyOptions: _this.props.linkifyOptions }));
            }))));
    };
    return Console;
}(React.PureComponent));
exports["default"] = Console;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBOEI7QUFDOUIsbURBQStDO0FBRS9DLDREQUFvQztBQUVwQyx1Q0FBaUM7QUFDakMsc0RBQStCO0FBRS9CLCtDQUErQztBQUMvQyxJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUM7SUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUN2QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUs7UUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUMvQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLHdDQUF3QztnQkFDeEMsT0FBTTthQUNQO1lBQ0QseUJBQXlCO1lBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDakI7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRUQsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxDQUFDO0lBQ2xDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLE9BQU87SUFDakMsTUFBTSx3QkFDRCxvQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUNiLEtBQUssQ0FBQyxNQUFNLENBQ2hCO0NBQ0YsQ0FBQyxFQU5pQyxDQU1qQyxDQUFBO0FBRUY7SUFBc0IsMkJBQStCO0lBQXJEO1FBQUEscUVBNEZDO1FBM0ZDLFdBQUssR0FBRztZQUNOLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQztZQUMzQixV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