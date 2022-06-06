fetch('https://jsonplaceholder.typicode.com/posts/101')

.then ((response)=>{
    if(!response.ok){
        const message =`error is: ${ response.status}`
        throw new Error(message)
    }
    else{
        return (response.json)

    }


})

.then((res)=>console.log(res))
.catch((err) => console.log(err))



