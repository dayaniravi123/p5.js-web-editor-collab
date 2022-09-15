"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var GUID_1 = __importDefault(require("./GUID"));
var Timing = __importStar(require("./methods/timing"));
var Count = __importStar(require("./methods/count"));
var Assert = __importStar(require("./methods/assert"));
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */
function Parse(method, data, staticID) {
    // Create an ID
    var id = staticID || GUID_1["default"]();
    // Parse the methods
    switch (method) {
        case 'clear': {
            return {
                method: method,
                id: id
            };
        }
        case 'count': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            return __assign(__assign({}, Count.increment(label)), { id: id });
        }
        case 'time':
        case 'timeEnd': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            if (method === 'time') {
                Timing.start(label);
                return false;
            }
            return __assign(__assign({}, Timing.stop(label)), { id: id });
        }
        case 'assert': {
            var valid = data.length !== 0;
            if (valid) {
                var assertion = Assert.test.apply(Assert, __spreadArrays([data[0]], data.slice(1)));
                if (assertion) {
                    return __assign(__assign({}, assertion), { id: id });
                }
            }
            return false;
        }
        case 'error': {
            var errors = data.map(function (error) {
                try {
                    return error.stack || error;
                }
                catch (e) {
                    return error;
                }
            });
            return {
                method: method,
                id: id,
                data: errors
            };
        }
        default: {
            return {
                method: method,
                id: id,
                data: data
            };
        }
    }
}
exports["default"] = Parse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxnREFBeUI7QUFFekIsdURBQTBDO0FBQzFDLHFEQUF3QztBQUN4Qyx1REFBMEM7QUFFMUM7Ozs7R0FJRztBQUNILFNBQVMsS0FBSyxDQUNaLE1BQWUsRUFDZixJQUFXLEVBQ1gsUUFBaUI7SUFFakIsZUFBZTtJQUNmLElBQU0sRUFBRSxHQUFHLFFBQVEsSUFBSSxpQkFBSSxFQUFFLENBQUE7SUFFN0Isb0JBQW9CO0lBQ3BCLFFBQVEsTUFBTSxFQUFFO1FBQ2QsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLE9BQU87Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEVBQUUsSUFBQTthQUNILENBQUE7U0FDRjtRQUVELEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixJQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1lBQy9ELElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sS0FBSyxDQUFBO1lBRXhCLDZCQUNLLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQ3pCLEVBQUUsSUFBQSxJQUNIO1NBQ0Y7UUFFRCxLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssU0FBUyxDQUFDLENBQUM7WUFDZCxJQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1lBQy9ELElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sS0FBSyxDQUFBO1lBRXhCLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkIsT0FBTyxLQUFLLENBQUE7YUFDYjtZQUVELDZCQUNLLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQ3JCLEVBQUUsSUFBQSxJQUNIO1NBQ0Y7UUFFRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO1lBQ2IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUE7WUFFL0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLGtCQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUE7Z0JBQ3hELElBQUksU0FBUyxFQUFFO29CQUNiLDZCQUNLLFNBQVMsS0FDWixFQUFFLElBQUEsSUFDSDtpQkFDRjthQUNGO1lBRUQsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUVELEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDM0IsSUFBSTtvQkFDRixPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFBO2lCQUM1QjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLEtBQUssQ0FBQTtpQkFDYjtZQUNILENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTztnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sRUFBRSxJQUFBO2dCQUNGLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQTtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUCxPQUFPO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxNQUFBO2FBQ0wsQ0FBQTtTQUNGO0tBQ0Y7QUFDSCxDQUFDO0FBRUQscUJBQWUsS0FBSyxDQUFBIn0=