var React = require('react'); 
var BlogListComponent = require('./components/BlogListComponent');
var BlogPostCollection = require('./collections/BlogPostCollection');
var BlogFormComponent = require('./components/BlogFormComponent');

var blogPosts = new BlogPostCollection([
]);

var allCategories = ['react', 'javascript', 'html', 'css'];

function newPost(postModel) {
	blogPosts.add(postModel);
}

React.render(
	<div>
		<BlogFormComponent allCategories={allCategories} newPost={newPost} />
		<BlogListComponent posts={blogPosts} number={7} />
	</div>,
	document.getElementById('container')
)
