const dataUsers = []

const loadUsers = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        console.log(users)
        users.map(data=>{
        const usersName = data.name
        console.log(usersName)
        const usersEmail = data.email
        console.log(usersEmail)
        const usersUsername = data.username
        console.log(usersUsername)
        })
    }
    catch (err) {
        console.log(err)
    }
}