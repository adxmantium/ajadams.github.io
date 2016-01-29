
// -- main top level component that houses entire page
var Footer_Component = React.createClass({displayName: "Footer_Component",
	render: function(){
		return (
			React.createElement("div", null, 
				React.createElement("div", {className: "text-center"},  String.fromCharCode(169) + ' 2016 Adam Adams')
			)
		);
	}
});

ReactDOM.render( React.createElement(Footer_Component, null), document.getElementById('footer-container') );