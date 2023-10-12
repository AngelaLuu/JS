
const request= require('request')


const url='https://hp-api.onrender.com/api/characters'

let r=request(url,
                 {json:true},
                 (error,respuesta,body)=>{
                 let magia=body
                 magia.forEach(magic => {
                    console.log(magic.name)
                    console.log("-----------------")
                 });
                 
                 })
