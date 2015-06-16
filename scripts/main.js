var React = require('react'); 
var CommentForm = require('./components/CommentForm');
var BlogPostForm = require('./components/BlogPostForm');
var CommentList = require('./components/CommentList');
var LoginForm = require('./components/LoginForm');
var RecentPosts = require('./components/RecentPosts');


React.render(
	<CommentForm />,
	<BlogPostForm />,
	<CommentList />,
	<LoginForm />,
	<RecentPosts />,
	document.getElementById('container')
);
