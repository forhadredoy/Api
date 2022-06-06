
const getreq = (method,url,data) =>{
    const xhr =new XMLHttpRequest()

    xhr.open(method,url)
    xhr.setRequestHeader('content-type','application/json');

  
    xhr.onload=() => {

        let data =xhr.response
        console.log(JSON.parse(data))
    }
    xhr.onerror=() =>{

        console.log("error is here");
    }
    

    xhr.send(JSON.stringify(data));



}

const getdata =()=>{
    getreq('Get','https://restcountries.com/v3.1/all' )

    
}


const postdata =()=>{
    getreq('POST','https://jsonplaceholder.typicode.com/posts' ,{


        name: "Jane Doe",
        email:"jane@hotmail.com",
        resume:"www.linktoresume.com",
        github:"github.com/jane",
        twitter:"@jane", 
        website:"jane.com" 
    });
}
const putdata=()=>{
    getreq('PUT','https://jsonplaceholder.typicode.com/posts/1' ,{

        id:1,
        name: "forhad hossain redoy",
        email:"forhadhridoy.43@gmail.com",
        resume:"www.ridoy",
        github:"github.com/jant",
        twitter:"@and", 
        website:"jani.com" 
    });
}

const patchtdata=()=>{
    getreq('PATCH','https://jsonplaceholder.typicode.com/posts/1' ,{

      
        name: "forhad hossain",
     
    });
}


const deletedata=()=>{
    getreq('DELETE','https://jsonplaceholder.typicode.com/posts/1')
}
deletedata();








    
      


