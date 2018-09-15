const express = require('express')
const app = express ()

const PORT = 3000

app.get('/', (res, req)=> res.send("Fuck yeah"))
app.listen(PORT, ()=> console.log("Server online on port %s", PORT))
