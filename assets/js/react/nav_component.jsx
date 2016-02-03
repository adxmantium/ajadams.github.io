/* project_component.jsx */
var Nav_Component = React.createClass({
	render: function(){
		return (
			<div className="nav-container text-center">
				<div><i className="fa fa-user fa-2x aboutme"></i></div>
				<div><i className="fa fa-code fa-2x projects"></i></div>
			</div>
		);
	}
});

var Project_Component = React.createClass({
	render: function(){
		return (
			<div className="col-xs-6 col-xs-offset-3 text-center single">
				<a href={this.props.url}>
					<h2>{this.props.title}</h2>
					<div>{this.props.subtitle}</div>
				</a>
			</div>
		);
	}
});

ReactDOM.render( <Nav_Component />, document.getElementById('nav-container') );