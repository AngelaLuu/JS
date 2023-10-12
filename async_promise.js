const axios = require ('axios')

const url ='www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
axios.get(url)  
.then((respuesta)=>{
    let margarita  =  respuesta.data
    margarita.forEach(margarita  => {
    console.log(margarita, strDrink)
        
    });

})
.catch((error) => {

})