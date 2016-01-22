
$.fn.rotate = function(deg){
	$(this).css({'-webkit-transform': 'rotate('+deg+'deg)',
				'-moz-transform': 'rotate('+deg+'deg)',
				'-ms-trasform': 'rotate('+deg+'deg)',
				'trasform': 'rotate('+deg+'deg)'});
	return $(this);
}

// -- start of Background component
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

		setInterval(function(){
			min.rotate(rotate_min);
			rotate_min += 6;

			if( rotate_min === 360 )
				rotate_min = 0;

		}, 60000);

		setInterval(function(){
			hr.rotate(rotate_hr);
			rotate_hr += 6;

			if( rotate_hr === 360 )
				rotate_hr = 0;
		}, 3600000);
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

var Background_Layer_Component = React.createClass({displayName: "Background_Layer_Component",
	render: function(){
		return (
			React.createElement("div", {className: "background-layer"}, 
				React.createElement(Clock_Component, null), 
				React.createElement("div", {className: "opaque-layer"})
			)
		);
	}
});

var Header_Component = React.createClass({displayName: "Header_Component",
	render: function(){
		var header = 'I.Am.Adam Adams.';
		return (
			React.createElement("div", {className: "container-fluid text-center"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-12"}, 
						React.createElement("h1", null, header)
					)
				)
			)
		);
	}
});

// -- Start of Content Container
var Content_Container_Component = React.createClass({displayName: "Content_Container_Component",
	render: function(){
		return (
			React.createElement("div", {className: "content-container"}, 
				React.createElement(Header_Component, null), 
				React.createElement("div", {className: "text-center"}, "My ToDo App: ", React.createElement("a", {href: "http://ajadams.github.io/Adams-ToDo-App/"}, "Finito")), 
				React.createElement("div", {className: "text-center"}, React.createElement("h2", null, "Currently under construction.")), 
				React.createElement("div", {className: "text-center"},  String.fromCharCode(169) + ' 2016 Adam Adams')
			)
		);
	}
});

// -- main top level component that houses entire page
var Homepage_Component = React.createClass({displayName: "Homepage_Component",
	render: function(){
		return (
			React.createElement("div", {className: "inner-main-container"}, 
				React.createElement(Background_Layer_Component, null), 
				React.createElement(Content_Container_Component, null)
			)
		);
	}
});

ReactDOM.render( React.createElement(Homepage_Component, null), document.getElementById('main-container') );