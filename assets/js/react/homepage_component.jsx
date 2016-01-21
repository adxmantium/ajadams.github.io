
var Clock_Component = React.createClass({
	render: function(){
		return (
			<div className="clock">
				<div className="center"></div>

				<div className="hr">
					<div className="hand">
						<div className="left"></div>
					</div>
				</div>

				<div className="min">
					<div className="hand">
						<div className="left"></div>
					</div>
				</div>

				<div className="sec">
					<div className="hand">
						<div className="left"></div>
					</div>
				</div>
			</div>
		);
	}
});

var Homepage_Component = React.createClass({
	render: function(){
		return (
			<div className="inner-main-container">

				<div className="background-layer">
					<Clock_Component />
					<div className="opaque-layer"></div>
				</div>

				<div className="content-container">
					<h1>Portfolio</h1>
				</div>

			</div>
		);
	}
});

ReactDOM.render( <Homepage_Component />, document.getElementById('main-container') );