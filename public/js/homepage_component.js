var Homepage_Component = React.createClass({displayName: "Homepage_Component",
	render: function(){
		return (
			React.createElement("div", null, 
				"test"
			)
		);
	}
});

ReactDOM.render( React.createElement(Homepage_Component, null), document.getElementById('main-container') );