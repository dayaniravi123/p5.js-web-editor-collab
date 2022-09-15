"use strict";
exports.__esModule = true;
// Sandbox HTML elements
var sandbox;
function getSandbox() {
    return (sandbox || (sandbox = document.implementation.createHTMLDocument('sandbox')));
}
function objectifyAttributes(element) {
    var data = {};
    for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
        var attribute = _a[_i];
        data[attribute.name] = attribute.value;
    }
    return data;
}
/**
 * Serialize a HTML element into JSON
 */
exports["default"] = {
    type: 'HTMLElement',
    shouldTransform: function (type, obj) {
        return (obj &&
            obj.children &&
            typeof obj.innerHTML === 'string' &&
            typeof obj.tagName === 'string');
    },
    toSerializable: function (element) {
        return {
            tagName: element.tagName.toLowerCase(),
            attributes: objectifyAttributes(element),
            innerHTML: element.innerHTML
        };
    },
    fromSerializable: function (data) {
        try {
            var element = getSandbox().createElement(data.tagName);
            element.innerHTML = data.innerHTML;
            for (var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++) {
                var attribute = _a[_i];
                try {
                    element.setAttribute(attribute, data.attributes[attribute]);
                }
                catch (e) { }
            }
            return element;
        }
        catch (e) {
            return data;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vSFRNTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixJQUFJLE9BQWlCLENBQUE7QUFDckIsU0FBUyxVQUFVO0lBQ2pCLE9BQU8sQ0FBQyxPQUFPLEtBQVAsT0FBTyxHQUFLLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQTtBQUM1RSxDQUFDO0FBVUQsU0FBUyxtQkFBbUIsQ0FBQyxPQUFZO0lBQ3ZDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNmLEtBQXNCLFVBQWtCLEVBQWxCLEtBQUEsT0FBTyxDQUFDLFVBQVUsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtRQUFyQyxJQUFJLFNBQVMsU0FBQTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUE7S0FDdkM7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFFRDs7R0FFRztBQUNILHFCQUFlO0lBQ2IsSUFBSSxFQUFFLGFBQWE7SUFDbkIsZUFBZSxFQUFmLFVBQWdCLElBQVMsRUFBRSxHQUFRO1FBQ2pDLE9BQU8sQ0FDTCxHQUFHO1lBQ0gsR0FBRyxDQUFDLFFBQVE7WUFDWixPQUFPLEdBQUcsQ0FBQyxTQUFTLEtBQUssUUFBUTtZQUNqQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUNoQyxDQUFBO0lBQ0gsQ0FBQztJQUNELGNBQWMsRUFBZCxVQUFlLE9BQW9CO1FBQ2pDLE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDdEMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUN4QyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDbEIsQ0FBQTtJQUNkLENBQUM7SUFDRCxnQkFBZ0IsRUFBaEIsVUFBaUIsSUFBYTtRQUM1QixJQUFJO1lBQ0YsSUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN4RCxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7WUFDbEMsS0FBc0IsVUFBNEIsRUFBNUIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBNUIsY0FBNEIsRUFBNUIsSUFBNEIsRUFBRTtnQkFBL0MsSUFBSSxTQUFTLFNBQUE7Z0JBQ2hCLElBQUk7b0JBQ0YsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO2lCQUM1RDtnQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO2FBQ2Y7WUFDRCxPQUFPLE9BQU8sQ0FBQTtTQUNmO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUNGLENBQUEifQ==