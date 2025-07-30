//importare le funzioni
const getFullName = require('./names.js');
const getHobbies = require ('./hobbies.js');


 //definizione della funzione che mi restituisce un oggetto con le due propretà 
 const getInfo = () => {
    return{
        FullName: getFullName('Sol'),
        hobbies: getHobbies('Video Giocchi', 'Sport', 'Girare in moto')
    }
 }

 console.log (getInfo());