/* background_component.jsx */
$.fn.rotate = function(deg){
	$(this).css({'-webkit-transform': 'rotate('+deg+'deg)',
				'-moz-transform': 'rotate('+deg+'deg)',
				'-ms-trasform': 'rotate('+deg+'deg)',
				'trasform': 'rotate('+deg+'deg)'});
	return $(this);
}

var Background_Component = React.createClass({
	render: function(){
		return (
			<div className="background-layer">
				<Clock_Component />
				<div className="opaque-layer"></div>
			</div>
		);
	}
});

// -- start of Background component
var Clock_Component = React.createClass({
	getInitialState: function(){
		return {

		};
	},

	componentDidMount: function(){
		this.runClock();
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

		setInterval(function(){
			min.rotate(rotate_min);
			rotate_min += 6;

			if( rotate_min === 360 )
				rotate_min = 0;

		}, 60000);

		setInterval(function(){
			hr.rotate(rotate_hr);
			rotate_hr += 6;

			if( rotate_hr === 360 )
				rotate_hr = 0;
		}, 3600000);
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

ReactDOM.render( <Background_Component />, document.getElementById('background-container') );