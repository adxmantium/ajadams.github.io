
var Clock_Component = React.createClass({displayName: "Clock_Component",
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