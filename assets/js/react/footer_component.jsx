
// -- main top level component that houses entire page
var Footer_Component = React.createClass({
	render: function(){
		return (
			<div>
				<div className="text-center">{ String.fromCharCode(169) + ' 2016 Adam Adams' }</div>
			</div>
		);
	}
});

ReactDOM.render( <Footer_Component />, document.getElementById('footer-container') );