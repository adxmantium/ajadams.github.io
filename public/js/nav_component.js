/* project_component.jsx */
var Nav_Component = React.createClass({displayName: "Nav_Component",
	render: function(){
		return (
			React.createElement("div", {className: "nav-container text-center"}, 
				React.createElement("div", null, React.createElement("i", {className: "fa fa-user fa-2x aboutme"})), 
				React.createElement("div", null, React.createElement("i", {className: "fa fa-code fa-2x projects"}))
			)
		);
	}
});

var Project_Component = React.createClass({displayName: "Project_Component",
	render: function(){
		return (
			React.createElement("div", {className: "col-xs-6 col-xs-offset-3 text-center single"}, 
				React.createElement("a", {href: this.props.url}, 
					React.createElement("h2", null, this.props.title), 
					React.createElement("div", null, this.props.subtitle)
				)
			)
		);
	}
});

ReactDOM.render( React.createElement(Nav_Component, null), document.getElementById('nav-container') );