var App = React.createClass({
	getInitialState:function(){
		return{
			txt: 'the state txt',
			id: 0
		}
	},
	update: function(e){
		this.setState({ txt: e.target.value});
	},
	getDefaultProps:function(){
		return {
			txt: 'this is a default prop',
			cat: 100
		}
	},
	propTypes:{
		txt: React.PropTypes.string,
		cat: React.PropTypes.number.isRequired
	},
	render:function(){
		return(
		 <div>
		 	<Widget txt={this.state.txt} update={this.update} />
		 	<Widget txt={this.state.txt} update={this.update} />
		 	<Widget txt={this.state.txt} update={this.update} />
		 	<Widget txt={this.state.txt} update={this.update} />
		 </div>
		 );
	}
});

var Widget = React.createClass({
render:function(){
	   	var txt = this.props.txt;
		var update = this.props.update;
		return(
		 <div>
		 	<h1>Hello World - </h1>
		 	<input type="text" onChange={update} />
		 	<p>My state:{txt}</p>
		 </div>
		 )
	}
});

React.render(<App />, document.body);