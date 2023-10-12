const request= require('request')

//direccion de la API
const url='https://apisimpsons.fly.dev/api/personajes'

let r=request(url,
                 {json:true},
                 (error,respuesta,body)=>{
                 let personaje=body
                 personaje.forEach(personajes => {
                    console.log(personajes.Nombre, personajes.Ocupacion)
                    console.log("-----------------")
                 });
                 })         