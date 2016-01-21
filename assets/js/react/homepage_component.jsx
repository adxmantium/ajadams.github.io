
var Clock_Component = React.createClass({
	getInitialState: function(){
		return {

		};
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
	},

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