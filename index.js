const moment = require('moment')

function getDate(){

    setInterval(() => {
        console.log(moment().format("YYYY/DD/MM HH:mm:ss"))
          
    }, 1000)
}
   

getDate()