
// -- main top level component that houses entire page
var Homepage_Component = React.createClass({displayName: "Homepage_Component",
	render: function(){
		return (
			React.createElement(Header_Component, null)
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
						React.createElement("h1", null, header), 
						React.createElement("div", null, React.createElement("h2", null, "Currently under construction."))
					)
				)
			)
		);
	}
});

ReactDOM.render( React.createElement(Homepage_Component, null), document.getElementById('head-container') );