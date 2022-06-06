fetch('https://jsonplaceholder.typicode.com/posts/1',{

method:'PUT',
body: JSON.stringify({

    title: 'this is my name',
    body: 'purai still body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

})
.then(( response)=>
    response.json())
.then( ( json) => console.log(json))