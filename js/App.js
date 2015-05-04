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
		var txt = this.props.txt;
		var cat = this.props.cat;
		return(
		 <div>
		 	<h1>Hello World - </h1>
		 	<h2>{txt}</h2>
		 	<b>{cat}</b>
		 	<input type="text" onChange={this.update} />
		 	<p>My state:{this.state.txt}</p>
		 </div>
		 )
	}
});

React.render(<App />, document.body);