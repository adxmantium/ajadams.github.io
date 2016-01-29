
// -- main top level component that houses entire page
var Homepage_Component = React.createClass({
	render: function(){
		return (
			<Header_Component />
		);
	}
});

var Header_Component = React.createClass({
	render: function(){
		var header = 'I.Am.Adam Adams.';
		return (
			<div className="container-fluid text-center">
				<div className="row">
					<div className="col-xs-12">
						<h1>{header}</h1>
						<div><h2>Currently under construction.</h2></div>
					</div>
				</div>
			</div>
		);
	}
});

ReactDOM.render( <Homepage_Component />, document.getElementById('head-container') );