fetch('https://jsonplaceholder.typicode.com/posts/1',{

method:'PATCH',
body: JSON.stringify({

    title: 'the name of our country ',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

})
.then(( response)=>
    response.json())
.then( ( json) => console.log(json))