import React, { Component } from 'react';
import Scroller from './scroller';

class App extends Component {
	constructor(props) {
		super(props);
		this.scroller = React.createRef();
		this.scrollTo = this.scrollTo.bind(this);
		this.scrollTop = this.scrollTop.bind(this);
	}

	scrollTo() {
		if(this.scroller) {
			this.scroller.scrollTo(100);
		}
	}

	scrollTop() {
		if(this.scroller) {
			this.scroller.scrollTop(100);
		}
	}

	render() {
		return (
		  <div>
			  <div style={{
				  display: 'flex',
			  }}>
				  <button onClick={this.scrollTo}>
					  Scroll To
				  </button>

				  <button onClick={this.scrollTop}>
					  Scroll Top
				  </button>
			  </div>
			  <div
				style={{
					width: 500,
					height: 700,
				}}>
				  <Scroller ref={r => this.scroller = r}
				  height={700}/>
			  </div>
		  </div>
		);
	}
}

export default App;