const moment = require('moment')

function getDate(){

    console.log(moment().format("YYYY/DD/MM HH:mm:ss"))
    console.log(moment().format('dddd'))
          
}
   

getDate()