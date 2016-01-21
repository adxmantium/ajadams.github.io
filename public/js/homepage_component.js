
$.fn.rotate = function(deg){
	$(this).css({'-webkit-transform': 'rotate('+deg+'deg)',
				'-moz-transform': 'rotate('+deg+'deg)',
				'-ms-trasform': 'rotate('+deg+'deg)',
				'trasform': 'rotate('+deg+'deg)'});
	return $(this);
}

var Clock_Component = React.createClass({displayName: "Clock_Component",
	getInitialState: function(){
		return {

		};
	},

	componentDidMount: function(){
		this.runClock();
	},

	runClock: function(){
		var sec = $('.sec'),
			min = $('.min'),
			hr = $('.hr'),
			rotate_sec = 0,
			rotate_min = 90,
			rotate_hr = 180;

		setInterval(function(){
			sec.rotate(rotate_sec);
			rotate_sec += 6;

			if( rotate_sec === 360 )
				rotate_sec = 0;

		}, 1000);
	},

	render: function(){
		return (
			React.createElement("div", {className: "clock"}, 
				React.createElement("div", {className: "center"}), 

				React.createElement("div", {className: "hr"}, 
					React.createElement("div", {className: "hand"}, 
						React.createElement("div", {className: "left"})
					)
				), 

				React.createElement("div", {className: "min"}, 
					React.createElement("div", {className: "hand"}, 
						React.createElement("div", {className: "left"})
					)
				), 

				React.createElement("div", {className: "sec"}, 
					React.createElement("div", {className: "hand"}, 
						React.createElement("div", {className: "left"})
					)
				)
			)
		);
	}
});

var Homepage_Component = React.createClass({displayName: "Homepage_Component",
	render: function(){
		return (
			React.createElement("div", {className: "inner-main-container"}, 

				React.createElement("div", {className: "background-layer"}, 
					React.createElement(Clock_Component, null), 
					React.createElement("div", {className: "opaque-layer"})
				), 

				React.createElement("div", {className: "content-container"}, 
					React.createElement("h1", null, "Portfolio")
				)

			)
		);
	}
});

ReactDOM.render( React.createElement(Homepage_Component, null), document.getElementById('main-container') );