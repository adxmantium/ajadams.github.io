/* project_component.jsx */
var Projects_Component = React.createClass({displayName: "Projects_Component",
	render: function(){
		return (
			React.createElement("div", {className: "container-fluid"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement(Single_Project_Component, {title: 'Finito', subtitle: 'A friendly, easy to use, to-do app to manage your tasks', url: 'http://ajadams.github.io/Adams-ToDo-App/'}), 
					React.createElement(Single_Project_Component, {title: 'PianoKeys', subtitle: 'A basic representation of a piano with a feature to autoplay the piano', url: 'http://ajadams.github.io/piano-keys/'})
				)
			)
		);
	}
});

var Single_Project_Component = React.createClass({displayName: "Single_Project_Component",
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

ReactDOM.render( React.createElement(Projects_Component, null), document.getElementById('projects-container') );