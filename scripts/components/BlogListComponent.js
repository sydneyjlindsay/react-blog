var React = require('react');
var _ = require('backbone/node_modules/underscore');

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.posts.on('add', this.postAdded);
	},
	//this is the default number of posts to show
	getInitialState: function() {
		return {
			number: this.props.number //3 from main.js
		};
	}, 

	render: function() {
		// sort the collection that was passed in main.js (blogPosts) by the createdAt property
		var sortedModels = this.props.posts.sortBy(function(postModel) {
			return -1*postModel.get('createdAt').getTime();
		});
		// Grabbing topN posts from the sorted list
		// var topNModels = this.props.posts.first(this.props.number);

		// var topNModels = _.first(sortedModels, this.props.number);
		var topNModels = _.first(sortedModels, this.state.number); //show the number that you enter in the box
		// convert top N posts from Backbone models to react component/element, 
		//and we are left with an array of react elements
		var topNElements = topNModels.map(function(postModel) {
			return (
				<div key={postModel.cid}>
					<h3>{postModel.get('title')}</h3>
					<p>{postModel.get('body')}</p>
					<div>{postModel.get('createdAt').toString()} | {postModel.get('category')}</div>
				</div>
			)
		});

		//Return the array of elements wrapped in a div
		return(
			<div>
			<input type="text" ref="number" onChange={this.numberChanged} />
			{topNElements}
			</div>
		);
	}, 

	postAdded: function(postModel) {
		this.forceUpdate();
	}, 

	numberChanged: function(e) {
		console.log('number was changed');
		var newNumber = this.refs.number.getDOMNode().value; 
		if(!newNumber) {
			newNumber = 0;
		}
		newNumber = parseInt(newNumber);
		this.setState({
			number: newNumber
		});
	}
});



