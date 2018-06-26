const blogPosts = [
    {
        postTitle: "Sidewalk Views", 
        postBody: "Lorem Ipsum blah blah blah", 
        postAuthor: "Brendon Carrasquillo"},
    {
        postTitle: "Happy Place",
        postBody: "Lorem Ipsum blah blah blah",
        postAuthor: "John Smith"
    },
    {
        postTitle: "Generic Tables",
        postBody: "Lorem Ipsum blah blah blah",
        postAuthor: "Jane Smith"
    },
    {
        postTitle: "Psychology Now",
        postBody: "Lorem Ipsum blah blah blah",
        postAuthor: "Carl Jung"
    },
]

let h = React.createElement;

let blogRow = (post) => 
    h('li', null, [
        h('h3', null, post.postTitle),
        h('p', null, post.postBody),
        h('h6', null, post.postAuthor)
    ])
;

let container = h('div', null, [
    h('h1', null, 'Friend Blogs'),
    h('ul', null,
        blogPosts.map(post => 
            h(blogRow, post)            
        )
    ),
    h('footer', null, 'Copyright 2018'),
])

ReactDOM.render(
    container,
    document.querySelector('.react-root')
);