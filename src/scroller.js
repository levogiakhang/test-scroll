import React, { Component } from 'react';

class Scroller extends Component {
	constructor(props) {
		super(props);
		this.nOC = 100;
		this.scroller = React.createRef();
		this.scrollTo = this.scrollTo.bind(this);
		this.scrollTop = this.scrollTop.bind(this);
		this._onScroll = this._onScroll.bind(this);
	}

	scrollTop(top) {
		console.log('top',this.scroller);
		if (this.scroller) {
			this.scroller.scrollTop = top;
		}
	}

	scrollTo(top) {
		console.log('to',this.scroller);
		if (this.scroller) {
			this.scroller.scrollTo(0, top);
		}
	}

	generateColor() {
		const rFn = function (min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};

		const r = rFn(0, 255);
		const g = rFn(0, 255);
		const b = rFn(0, 255);

		return '#' + r.toString(16) + g.toString(16) + b.toString(16);
	}

	getChildren(nOC) {
		let c = [];
		for (let i = 0; i < nOC; i++) {
			const color = this.generateColor();
			c.push(
			  <div
				key={i}
				style={{
				  height: 50,
				  width: '100%',
				  backgroundColor: color,
			  }}>
			  </div>,
			);
		}
		return c;
	}

	render() {
		const {height} = this.props;
		let children = this.getChildren(this.nOC);
		return (
		  <div
			ref={r => this.scroller = r}
			style={{
				height: height,
				width: '100%',
				overflowX: 'hidden',
				overflowY: 'scroll',
			}}
			onScroll={this._onScroll}>
			  <div
				style={{
					width: '100%',
					height: this.nOC * 50,
					maxWidth: '100%',
					overflow: 'hidden',
					position: 'relative'}}>
				  {children}
			  </div>
		  </div>
		);
	}

	_onScroll() {
		console.log(this.scroller.scrollTop);
	}
}

export default Scroller;