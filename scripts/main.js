var React = require('react'); 
// var Hello = require('./components/Hello');
// var InstagramImage = require('./components/InstagramImage');
var CommentForm = require('./components/CommentForm');


React.render(
	<CommentForm />,
	// <InstagramImage imageUrl="http://cdn-www.i-am-bored.com/media/thumbnails/otter[3].jpg" />, 
	document.getElementById('container')
);
