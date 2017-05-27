/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.deepmerge = factory();
    }
}(this, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object'

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice()
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument)
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument)
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument))
        }
    })
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {}
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument)
        })
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument)
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument)
        }
    })
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge }
    var arrayMerge = options.arrayMerge || defaultArrayMerge

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
}

return deepmerge

}));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getHash */
/* harmony export (immutable) */ __webpack_exports__["a"] = getId;
/* unused harmony export xor */
/* unused harmony export isComplexObject */
/* unused harmony export isObject */
/* unused harmony export isNested */
/* harmony export (immutable) */ __webpack_exports__["b"] = convertObject;


function getHash(object_type) {
	return Math.floor(Math.random() * new Date()).toString();
}

function getId(object_type, hash) {
	return object_type.toString() + '_' + hash;
}

function xor(arr) {
	var all_false = Array(arr.length).fill('0').join('');
	var all_true = Array(arr.length).fill('1').join('');
	var arr_str = arr.map(function (elem) {
		return elem ? '1' : '0';
	}).join('');

	return (arr_str !== all_false && arr_str !== all_true);
}

function isComplexObject(object) {
	var obj_str = [];
	for (let name in object) {
		if (isObject(object[name])) {
			obj_str.push(true);
		} else {
			obj_str.push(false);
		}
	}
	return xor(obj_str);
}

function isObject(variable) {
	return (variable !== null) && (typeof variable === 'object');
}

function isNested(object) {
	for (let name in object) {
		if (!isObject(object[name])) {
			return false;
		}
	}
	return true;
}

function convertObject(object, converter) {
	let new_object = {};

	if (!isComplexObject(object)) {

		if (isNested(object)) {
			for (let name in object) {
				new_object[name] = convertObject(object[name], converter);
			}
		} else {
			new_object = converter(object);
		}

		return new_object;

		
	} else {
		console.log(object);
		throw new TypeError("Couldn't convert a complex object");
	}
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_element__ = __webpack_require__(4);




var draw = SVG('diagram');

let element_blueprints = [
	{
		id: 1,
		position: {
			x: 200,
			y: 100
		},
		text: {
			name: 'Person',
			type: 'interface',
			attributes: [
				{
					name: 'name',
					type: 'string',
					value: 'Alex',
					scope: 'public'
				},
				{
					name: 'age',
					type: 'int',
					value: '100'
				},
				{
					name: 'wife',
					scope: 'package',
					type: 'any'
				}
			],
			methods: [
				{
					name: 'helloWorld',
					type: 'int'
				},
				{
					name: 'foo',
					type: 'string',
					args: [
						{
							name: 'name',
							type: 'string',
							value: 'Alex'
						},
						{
							name: 'age',
							type: 'int',
							value: '100'
						},
						{
							name: 'wife',
							type: 'any'
						}
					]					
				}
			]
		}
	},
	{
		id: 2,
		position: {
			x: 400,
			y: 300
		},
		text: {
			name: 'Creature',
			attributes: [
				{
					name: 'name',
					type: 'string'
				}
			]
		}
	}
];

let connection_blueprints = [
	{
		id: 1,
		type: 'inheritance',
		from: 1,
		to: 2,
		text: 'inherits',
		style: {
			'stroke-dasharray': '5,5'
		}
	}
];

SVG.ClassDiagramNode = SVG.invent({
	create: 'g',
	inherit: SVG.G,
	extend: {
		setRichText: __WEBPACK_IMPORTED_MODULE_0__lib_element__["a" /* setRichText */],
		drawBorder: __WEBPACK_IMPORTED_MODULE_0__lib_element__["b" /* drawBorder */],
		applyBlueprint: __WEBPACK_IMPORTED_MODULE_0__lib_element__["c" /* applyBlueprint */],
		socket: __WEBPACK_IMPORTED_MODULE_0__lib_element__["d" /* getSocketCoords */],
		blueprint: null,
		style: null
	},
	construct: {
		classDiagramNode: function (blueprint) {
			return this.put(new SVG.ClassDiagramNode)
				.applyBlueprint(blueprint)
				.draggy();
		}
	}
});

SVG.Connection = SVG.invent({
	create: 'path',
	inherit: SVG.Path,
	extend: {
		connect: function (blueprint) {
			return this;
		},
		applyBlueprint: function (blueprint) {


			return this;
		},
		blueprint: null
	},
	construct: {
		connection: function (blueprint) {
			return this.put(new SVG.Connection)
				.applyBlueprint(blueprint);
		}
	}
});

SVG.ClassDiagram = SVG.invent({
	create: 'g',
	inherit: SVG.G,
	extend: {
		applyTheme: function (theme) {

		}
	},
	construct: {
		classDiagram: function (theme) {
			return this.put(new SVG.ClassDiagram)
			.applyTheme(theme)
			.addClass('class_diagram');
		}
	}
});

element_blueprints.forEach(function (blueprint) {
	draw.classDiagramNode(blueprint);
});

connection_blueprints.forEach(function (blueprint) {
	draw.connection(blueprint);
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fillBlueprint;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(5);


// Blueprints processing functions

let merge = __webpack_require__(0);


function fillBlueprint(blueprint) {
	if (checkBlueprint(blueprint)) {
		let passed_blueprint = blueprint;
		let desired_blueprint = merge(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* default_blueprint */], blueprint);

		desired_blueprint.text.attributes = (desired_blueprint.text.attributes || []).map(function (attribute) {
			return merge(__WEBPACK_IMPORTED_MODULE_0__model__["b" /* default_attribute */], attribute);
		});

		desired_blueprint.text.methods = (desired_blueprint.text.methods || []).map(function (method) {
			return merge(__WEBPACK_IMPORTED_MODULE_0__model__["c" /* default_method */], method);
		});

		if (desired_blueprint.text.methods !== []) {

			desired_blueprint.text.methods = desired_blueprint.text.methods.map(function (method) {
				if (method.args !== []) {
					method.args = method.args.map(function (argument) {
						return merge(__WEBPACK_IMPORTED_MODULE_0__model__["d" /* default_argument */], argument);
					});
				}
				return method;
			});
		}

		return desired_blueprint;	
	}
}

function checkBlueprint(blueprint) {
	if (blueprint.position && blueprint.id) {
		return true;
	} else {
		throw new TypeError('Blueprint error: id and/or coordinates are missing');
		return false;
	}
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = getSocketCoords;
/* harmony export (immutable) */ __webpack_exports__["a"] = setRichText;
/* harmony export (immutable) */ __webpack_exports__["b"] = drawBorder;
/* harmony export (immutable) */ __webpack_exports__["c"] = applyBlueprint;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blueprint__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools__ = __webpack_require__(1);


// Everything needed to construct an element







function getSocketCoords(number) {

	let rect;

	this.children().forEach(function (child) {
		if (child.attr('id').split('_')[0] === 'rectangle') {
			rect = child;
		}
	});

	if (rect) {
		var bbox = rect.bbox();
	} else {
		throw new ReferenceError("Element's rectangle is not defined, couldn't attach sockets");
	}

	switch (number) {
		case 1: return {x: bbox.x, y: bbox.y};		// top left
		case 2: return {x: bbox.cx, y: bbox.y};		// top center
		case 3: return {x: bbox.x2, y: bbox.y};		// top right

		case 4: return {x: bbox.x, y: bbox.cy};		// middle left
		case 5: return {x: bbox.x2, y: bbox.cy};	// middle right

		case 6: return {x: bbox.x, y: bbox.y2};		// bottom left
		case 7: return {x: bbox.cx, y: bbox.y2};	// bottom center
		case 8: return {x: bbox.x2, y: bbox.y2};	// bottom right

		default:
			throw new RangeError('Wrong socket number (must be from 1 to 8)');
	}
}

function setRichText(text) {
	let id = getRawId(this.attr('id'));
	let style = this.style;

	let name_label = this.text(text.name)
		.font(style.text_style.common)
		.font(style.text_style.node.common)
		.font(style.text_style.node.name)
		.font('anchor', 'middle')
		.attr('id', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tools__["a" /* getId */])('name-label', id));

	let type_label;
	let attributes_label;
	let methods_label;

	if (text.type !== 'normal') {
		type_label = this.text('<' + text.type + '>')
			.font(style.text_style.common)
			.font(style.text_style.node.common)
			.font(style.text_style.node.type)
			.font('anchor', 'middle')
			.attr('id', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tools__["a" /* getId */])('type-label', id));
	}

	if (text.attributes) {
		attributes_label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__text__["a" /* addAttributes */])(this, text.attributes, style.text_style)
			.font(style.text_style.common)
			.attr('id', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tools__["a" /* getId */])('attributes-label', id));
	}

	if (text.methods) {
		methods_label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__text__["b" /* addMethods */])(this, text.methods, style.text_style)
			.font(style.text_style.common)
			.attr('id', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tools__["a" /* getId */])('methods-label', id));
	}

	let offsets = computeLabelOffsets(this);

	if (type_label) {
		type_label.move(offsets.type.x, offsets.type.y);
	}

	if (name_label) {
		name_label.move(offsets.name.x, offsets.name.y);
	}

	if (attributes_label) {
		attributes_label.move(offsets.attributes.x, offsets.attributes.y);
	}

	if (methods_label) {
		methods_label.move(offsets.methods.x, offsets.methods.y);
	}

	return this;
}

function drawBorder() {
	let id = getRawId(this.attr('id'));
	let style = this.style;
	let rect_size = computeRectSize(this);

	let rect = this.rect(rect_size.w, rect_size.h)
		.attr(style.rect_style)
		.move(0, 0)
		.attr('id', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tools__["a" /* getId */])('rectangle', id));

	rect.back();
	return this;
}

function applyBlueprint(blueprint) {
	var checked_blueprint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__blueprint__["a" /* fillBlueprint */])(blueprint);
	let id = checked_blueprint.id;
	let style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* convertElementStyle */])(checked_blueprint.style || {});
	let text = checked_blueprint.text;

	this.blueprint = checked_blueprint;
	this.style = style;
	this.attr({
		'id': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tools__["a" /* getId */])('ClassDiagramNode', id),
		'cursor': 'pointer'
	});
	this.setRichText(text);
	this.drawBorder();
	this.move(checked_blueprint.position.x, checked_blueprint.position.y);
	return this;
}

function getRawId(element_id) {
	return element_id.split('_')[1];
}

function computeRectSize(element) {
	let name_label = findChildElement(element, 'name-label');
	let type_label = findChildElement(element, 'type-label');
	let attributes_label = findChildElement(element, 'attributes-label');
	let methods_label = findChildElement(element, 'methods-label');

	let width = Math.max(
		name_label ? name_label.bbox().w : 0,
		type_label ? type_label.bbox().w : 0,
		attributes_label ? attributes_label.bbox().w : 0,
		methods_label ? methods_label.bbox().w : 0
	) + element.style.additional_style.padding.w * 2;

	let height = (
		(name_label ? name_label.bbox().h : 0) +
		(type_label ? type_label.bbox().h : 0) +
		(attributes_label ? attributes_label.bbox().h : 0) +
		(methods_label ? methods_label.bbox().h : 0)
	) + (
		(name_label ? 1 : 0) +
		(attributes_label ? 1 : 0) +
		(methods_label ? 1 : 0) + 1
	) * element.style.additional_style.padding.h;

	return {
		w: width,
		h: height
	}
}

function computeLabelOffsets(element) {
	let name_label = findChildElement(element, 'name-label');
	let type_label = findChildElement(element, 'type-label');
	let attributes_label = findChildElement(element, 'attributes-label');
	let methods_label = findChildElement(element, 'methods-label');
	
	let padding = element.style.additional_style.padding;
	let rect_size = computeRectSize(element);
	let offsets = {};

	let x_left = padding.w;
	let x_center = rect_size.w / 2;	
	let y_last = padding.h;

	if (type_label) {
		offsets.type = {
			x: x_center,
			y: y_last
		};
		y_last += type_label.bbox().h;
	}

	if (name_label) {
		offsets.name = {
			x: x_center,
			y: y_last
		};
		y_last += name_label.bbox().h + padding.h;
	}

	if (attributes_label) {
		offsets.attributes = {
			x: x_left,
			y: y_last
		}
		y_last += attributes_label.bbox().h + padding.h;
	}

	if (methods_label) {
		offsets.methods = {
			x: x_left,
			y: y_last
		}
		y_last += methods_label.bbox().h + padding.h;
	}

	return offsets;
}

function findChildElement(parent, type) {
	let children = findChildElements(parent, type);
	
	if (children.length === 1) {
		return children[0];
	} else if (children.length > 1) {
		throw new RangeError('Parent ' + parent.attr('id').split('_')[0] + ' has more than one ' + type);
	}
}

function findChildElements(parent, type) {
	let children = [];

	parent.children().forEach(function (child) {
		if (child.attr('id').split('_')[0] === type) {
			children.push(child);
		}
	});

	return children;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return default_blueprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return default_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return default_method; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return default_argument; });


// data models for element

let default_blueprint = {
	id: 0,
	position: {
		x: 0,
		y: 0
	},
	text: {
		name: 'NewClass',
		type: 'normal',
		attributes: [],
		methods: []
	},
};

let default_attribute = {
	name: 'newElement',
	value: '',
	type: 'any',
	scope: 'public'
};

let default_method = {
	name: 'newMethod',
	type: 'any',
	scope: 'public',
	args: []
};

let default_argument = {
	name: 'newArgument',
	type: 'any',
	value: ''
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertElementStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__theme_model__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools__ = __webpack_require__(1);


// convert CSS-like style to SVG-like

let merge = __webpack_require__(0);



function convertElementStyle(passed_style) {
	let merged_style = merge(__WEBPACK_IMPORTED_MODULE_0__theme_model__["a" /* class_theme */], passed_style);
	let converted_style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tools__["b" /* convertObject */])(merged_style, convertStyle);

	let additional_style = {
		padding: Object.assign({}, converted_style.rect_style.padding)
	}

	delete converted_style.rect_style.padding;

	let element_style = {
		rect_style: converted_style.rect_style,
		text_style: converted_style.text_style,
		additional_style: additional_style
	}

	return element_style;
}

function getValueError(name, value, accepted) {
	return new RangeError(
		'Wrong ' + 
		name.toString() + ': ' + 
		value.toString() + 
		'. Must be ' + 
		accepted.map(function (val) {
			return '`' + val.toString() + '`';
		}).join(' or ') + '.');
}

function getDefaultConverter(name, accepted) {
	return function(value) {
		let found = false;

		for (let acc in accepted) {
			if (value === accepted[acc]) {
				found = true;
			}
		}

		if (!found) {
			throw getValueError(name, value, accepted);
		} else {
			return value;
		}
	}
}

function convertStyle(style) {
	let decision_matrix = {
		'padding': {
			name: 'padding',
			converter: function (value) {
				let split_value = value.split(' ');
				return {
					w: parseInt(split_value[1]),
					h: parseInt(split_value[0])
				}
			}
		},
		'border-color': {
			name: 'stroke'
		},
		'border-width': {
			name: 'stroke-width',
			converter: parseInt
		},
		'border-radius': {
			name: ['rx', 'ry'],
			converter: parseInt
		},
		'color': {
			name: 'fill'
		},
		'font-family': {
			name: 'family'
		},
		'font-size': {
			name: 'size',
			converter: parseInt
		},
		'font-style': {
			name: 'style',
			converter: getDefaultConverter('font-style', ['normal', 'italic'])
		},
		'font-weight': {
			name: 'weight',
			converter: getDefaultConverter('font-weight', ['normal', 'bold'])
		},
		'text-align': {
			name: 'anchor',
			converter: function (value) {
				if (value === 'left') {
					return 'start';
				} else if (value === 'center') {
					return 'middle';
				} else if (value === 'right') {
					return 'end';
				} else {
					throw getValueError('text-align', value, ['left', 'center', 'right']);
				}
			}
		},
		'line-height': {
			name: 'leading',
			converter: parseFloat
		},
		'background-color': {
			name: 'fill'
		}
	};

	let converted_style = {};

	for (let parameter in style) {
		if (decision_matrix[parameter]) {

			let parameter_names = [].concat(decision_matrix[parameter].name);
			let parameter_convert_function = decision_matrix[parameter].converter || function (value) { return value; }

			parameter_names.forEach(function (parameter_name) {
				converted_style[parameter_name] = parameter_convert_function(style[parameter]);
			})

		} else {
			throw new TypeError('Wrong attribute name: ' + parameter.toString());
		}
	}

	return converted_style;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addAttributes;
/* harmony export (immutable) */ __webpack_exports__["b"] = addMethods;


// element text processing

var merge = __webpack_require__(0);

function addAttributes(element, text, style) {
	// + foo : int = "bar"
	// 
	let attr_style = style.attribute;

	return element.text(function (add) {
		for (let name in text) {
			let value = text[name];

			add.tspan(getScopeSymbol(value.scope)).font(attr_style.scope).newLine();

			add.tspan(' ');

			add.tspan(value.name + ' ').font(attr_style.name);

			if (value.type !== 'any') {
				add.tspan(' : ');
				add.tspan(value.type + ' ').font(attr_style.type);
			}


			if (value.value) {

				add.tspan('= ').font(attr_style.symbol);

				if (value.type === 'string') {

					add.tspan('"' + value.value + '"').font(merge(attr_style.value.common, attr_style.value.string));

				} else if (value.type === 'int') {

					add.tspan(value.value).font(merge(attr_style.value.common, attr_style.value.integer));

				} else {

					add.tspan(value.value).font(attr_style.value.common);
				}
			}
		}
	}).font(attr_style.common);
}

function addMethods(element, text, style) {
	// - string getFoo(
	// 		bar: int,
	// 		foo: string = "hello")
	let method_style = style.method;
	let attr_style = style.attribute;

	return element.text(function (add) {
		for (let name in text) {
			let value = text[name];

			add.tspan(getScopeSymbol(value.scope)).font(method_style.scope).newLine();

			add.tspan(' ');

			if (value.type !== 'any') {
				add.tspan(value.type + ' ').font(method_style.type);
			}

			add.tspan(value.name + ' ').font(method_style.name);

			if (value.args) {

				add.tspan('(').font(method_style.name);

				for (let arg in value.args) {

					let argument = value.args[arg];
					let arg_style = attr_style;

					add.tspan(argument.name)
						.font(arg_style.name)
						.font(method_style.passed)
						.newLine()
						.dx(20);
					
					if (argument.type !== 'any') {
						add.tspan(' : ').font(method_style.passed);
						add.tspan(argument.type)
							.font(arg_style.type)
							.font(method_style.passed);
					}

					if (argument.value !== '') {
						add.tspan(' ').font(method_style.passed);;
						add.tspan('=').font(arg_style.symbol).font(method_style.passed);
						add.tspan(' ').font(method_style.passed);;

						if (argument.type === 'string') {

							add.tspan('"' + argument.value + '"')
								.font(merge(arg_style.value.common, arg_style.value.string))
								.font(method_style.passed);

						} else if (argument.type === 'int') {

							add.tspan(argument.value)
								.font(merge(arg_style.value.common, arg_style.value.integer))
								.font(method_style.passed);

						} else {

							add.tspan(argument.value)
								.font(arg_style.value.common)
								.font(method_style.passed);
						}

					}

					if (arg < value.args.length - 1) {
						add.tspan(', ')
							.font(arg_style.common)
							.font(method_style.passed);
					} else {
						add.tspan(')').font(method_style.name);
					}
				}

			} else {
				add.tspan('()').font(method_style.name);
			}
		}
	}).font(method_style.common);
}

function getScopeSymbol(scope) {
	switch (scope.toLowerCase()) {
		case 'public':
			return '+';
			break;

		case 'private':
			return '-';
			break;

		case 'protected':
			return '#';
			break;

		case 'derived':
			return '/';
			break;

		case 'package':
			return '~';
			break;
	}
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return class_theme; });


let class_theme = {
	rect_style: {
		'padding': '11 11',
		'border-color': 'black',
		'border-width': '2',
		'border-radius': '4',
		'background-color': 'white'
	},
	text_style: {
		common: {
			// styles applied to overall text
			'color': 'black',
			'font-family': 'Verdana, sans-serif',
			'font-size': '12',
			'line-height': '1.25',
			'font-style': 'normal',
			'font-weight': 'normal',
			'text-align': 'left'
		},
		node: {
			common: {
			},
			name: {
				'font-weight': 'bold'
			},
			type: {
				// for example, <<interface>>
				'font-style': 'italic',
				'font-size': '9'
			}
		},
		attribute: {
			common: {
				// styles applied to overall attributes
			},
			scope: {
				// +, -, /, ~ and so on
				'font-family': 'Courier New, monospace',
				'color': '#B90690'
			},
			name: {

			},
			type: {
				'color': 'blue',
				'font-style': 'italic'
			},
			symbol: {

			},
			value: {
				common: {
					'color': 'blue'
				},
				string: {
					'color': '#036A07'
				},
				integer: {

				}
			}
		},
		method: {
			common: {
				
			},
			scope: {
				'font-family': 'Courier New, monospace',
				'color': '#B90690'
			},
			type: {
				'color': 'blue'
			},
			name: {
				'color': '#00002A',
			},
			passed: {
				// 'color': 'dimgrey'
			}
		}
	},
	line_style: {
		
	}
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map