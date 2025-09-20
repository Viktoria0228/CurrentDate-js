const express = require('express')
const moment = require('moment')


const app = express()

const PORT = 8000
const HOST = 'localhost'



function getDate(){

    // console.log(moment().format('dddd'))
    return moment().format("YYYY/DD/MM HH:mm:ss")
   
          
}

app.get("/timestamp", (req, res) =>{
    res.json({
        timestamp: getDate()
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}/timestamp`)
})