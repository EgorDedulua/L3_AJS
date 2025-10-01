fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => console.log(posts.sort((firstPost, secondPost) => secondPost.title.length - firstPost.title.length)))

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => console.log(comments.sort((firstName, secondName) => firstName.name.localeCompare(secondName.name))))


