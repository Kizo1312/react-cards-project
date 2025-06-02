let lista= []
async function getTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()
        console.log(data[0].title)
        const titles = data.map((title) =>{
            return title.title 
        })
        lista= [...lista, data]
        
        
        
    } catch (error) {
        console.log(error)
    }
    
}

async function addSomething () {
    console.log("postam")
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method:"POST",
            body:JSON.stringify({
                userId: 1573,
                
                title: "hahaha",
                completed:true
            })
        })
        const newTodo = await response.json()
        lista =[...lista, newTodo]
        console.log(lista)
        
        
    }catch(error){
        console.log(error)
    }
}
addSomething()
getTodos()