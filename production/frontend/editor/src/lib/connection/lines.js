'use strict';

import {defineMarker} from './markers';
import {getId, getRawId} from '../tools';

export function connectSockets (from, to, type, connector = cubicTo) {
	// connect two elements' sockets (abstraction over connection by two coordinates)
	let from_dot = from.element.socket(from.socket);
	let to_dot = to.element.socket(to.socket);
	let isReverse = from_dot.x > to_dot.x;
	
	this.connectDots(from_dot, to_dot, type, connector, isReverse);
	this.displayLineText(isReverse);

	let drawMarker = defineMarker(type);
	drawMarker(this.connectionLine, isReverse);

	return this;
}

export function connectDots (a, b, type, connector, isReverse) {
	// connect two coordinates with a line

	if (isReverse) {
		[a, b] = [b, a];
	}

	if (this.connectionLine) {
		this.connectionLine.plot(connector(a, b));
	} else {
		let id = getRawId(this.id());
		this.connectionLine = this.path(connector(a, b))
			.attr('id', getId(id))
			.addClass(defineLineClass(type))
	}
	
	return this;
}

function defineLineClass(type) {
	return 'dolphin_line dolphin_line-' + type;
}
