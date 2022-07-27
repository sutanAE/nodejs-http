const http = require('http')
const {readFile} = require('fs')


const getText = (path) =>{

    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err,data)=>{
            if(err){
                reject('error bro');
            } else {
                resolve(data)
            }
        })
    })
}

async function display(path, res, code) {
    console.log('ok, processing response')
    try {
        const data = await getText(path)
        console.log('response is received')
        res.writeHead(code,{
            'content-type': 'text/html'
        })
        res.write(data)
        res.end()

    } catch (err) {
        console.log(err)
        res.writeHead(code,{
            'content-type': 'text/html'
        })
        res.write(err)
        res.end()
    }
}


const server = http.createServer((req,res)=>{
    console.log("server is requested. alright!")

    const url = req.url
    if (url === '/'){
        display('./home.html', res, 200)
    } else if (url === '/some'){
        display('./some.html', res, 200)
    } else {
        display('./notfound.html', res, 404)
    }
})


server.listen(5000, () => {console.log("live at 5000")} )