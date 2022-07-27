const express = require('express')
const {readFile} = require('fs')
const app = express()


app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err,html)=>{
        if (err){
            response.status(500).send('error bro')

        }

        response.status(200).send(html)
    })

});

app.get('/some/', (request, response) => {
    readFile('./some.html', 'utf8', (err,html)=>{
        if (err){
            response.status(500).send('error bro')

        }

        response.status(200).send(html)
    })

});


let PORT = 8080


app.listen(
    PORT,
    ()=> console.log(  `it's alive on http://localhost:${PORT}`)
    )