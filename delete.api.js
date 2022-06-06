fetch('https://jsonplaceholder.typicode.com/posts/1',{

method:'DELETE',
body: JSON.stringify({

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

})
.then(( response)=>
    response.json())
.then( ( json) => console.log(json))