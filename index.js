const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.listen(5555, () => {
    console.log("Server is Running!");
})

const taskList = [
    
]

app.get('/', (req, res) => {
    const tasks = taskList.map(t => `<li>${t}</li>`).join('\n')
    res.send(`
    <html>
        <h1>Backend ToDoList using Express!</h1>
        <form action="/" method="POST">
            <input name="newTask">
            <button type="submit">Submit</button>
        </form>
        <ul>
            ${tasks}
        </ul>
    </html>
    `)
})

app.post("/", (req,res) => {
    taskList.push(req.body.newTask)
    res.redirect('/')
})