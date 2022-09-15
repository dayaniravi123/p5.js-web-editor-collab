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
exports.__esModule = true;
exports.initialState = void 0;
exports.initialState = {
    timings: {},
    count: {}
};
var now = function () {
    return typeof performance !== 'undefined' && performance.now
        ? performance.now()
        : Date.now();
};
exports["default"] = (function (state, action) {
    var _a, _b, _c;
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'COUNT': {
            var times = state.count[action.name] || 0;
            return __assign(__assign({}, state), { count: __assign(__assign({}, state.count), (_a = {}, _a[action.name] = times + 1, _a)) });
        }
        case 'TIME_START': {
            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_b = {}, _b[action.name] = {
                    start: now()
                }, _b)) });
        }
        case 'TIME_END': {
            var timing = state.timings[action.name];
            var end = now();
            var start = timing.start;
            var time = end - start;
            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_c = {}, _c[action.name] = __assign(__assign({}, timing), { end: end,
                    time: time }), _c)) });
        }
        default: {
            return state;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFYSxRQUFBLFlBQVksR0FBRztJQUMxQixPQUFPLEVBQUUsRUFBRTtJQUNYLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQTtBQUVELElBQU0sR0FBRyxHQUFHO0lBQ1YsT0FBTyxPQUFPLFdBQVcsS0FBSyxXQUFXLElBQUksV0FBVyxDQUFDLEdBQUc7UUFDMUQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFRCxzQkFBZSxVQUFDLEtBQW9CLEVBQUUsTUFBYzs7SUFBcEMsc0JBQUEsRUFBQSxRQUFRLG9CQUFZO0lBQ2xDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRTNDLDZCQUNLLEtBQUssS0FDUixLQUFLLHdCQUNBLEtBQUssQ0FBQyxLQUFLLGdCQUNiLE1BQU0sQ0FBQyxJQUFJLElBQUcsS0FBSyxHQUFHLENBQUMsVUFFM0I7U0FDRjtRQUVELEtBQUssWUFBWSxDQUFDLENBQUM7WUFDakIsNkJBQ0ssS0FBSyxLQUNSLE9BQU8sd0JBQ0YsS0FBSyxDQUFDLE9BQU8sZ0JBQ2YsTUFBTSxDQUFDLElBQUksSUFBRztvQkFDYixLQUFLLEVBQUUsR0FBRyxFQUFFO2lCQUNiLFVBRUo7U0FDRjtRQUVELEtBQUssVUFBVSxDQUFDLENBQUM7WUFDZixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV6QyxJQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQTtZQUNULElBQUEsS0FBSyxHQUFLLE1BQU0sTUFBWCxDQUFXO1lBRXhCLElBQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUE7WUFFeEIsNkJBQ0ssS0FBSyxLQUNSLE9BQU8sd0JBQ0YsS0FBSyxDQUFDLE9BQU8sZ0JBQ2YsTUFBTSxDQUFDLElBQUksMEJBQ1AsTUFBTSxLQUNULEdBQUcsS0FBQTtvQkFDSCxJQUFJLE1BQUEsYUFHVDtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUCxPQUFPLEtBQUssQ0FBQTtTQUNiO0tBQ0Y7QUFDSCxDQUFDLEVBQUEifQ==