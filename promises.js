const {readFile} = require('fs');
const { get } = require('http');
const path = require('path');

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

// getText('./files/text.txt')
//     .then( (result) => console.log(result))
//     .catch((result) => console.log(result))



async function dowork(path) {
    console.log('ok, processing response')
    try {
        const resp = await getText(path)
        console.log('response is received')
        console.log(resp)

    } catch (err) {
        console.log(err)
    }
}



function get(callback){
    callback()
}



dowork('./files/x.txt')
console.log('this should come second')