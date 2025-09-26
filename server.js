const express = require('express')
const moment = require('moment')

const path = require("path")
const fs = require("fs")


const app = express()

const postsPath = path.join(__dirname, "posts.json")
const posts = JSON.parse(fs.readFileSync(postsPath, "utf-8"))

const arrayPosts = posts.posts
// console.log(Array.isArray(arrayPosts))



const PORT = 8000
const HOST = 'localhost'



function getDate(){

    return moment().format("YYYY/DD/MM HH:mm:ss")
   
          
}

app.get("/timestamp", (req, res) =>{
    res.json({
        timestamp: getDate()
    })
})

app.get("/posts", (req, res)=>{
    console.log(req.query)
    let skip = 0
    let take = arrayPosts.length
    console.log(arrayPosts.length)

    if (req.query.skip == undefined) {
        skip = parseInt(req.query.skip)
        if (isNaN(skip)) {
            return res.status(400).json("skip must be an integer")
        }
    }

    if (req.query.take == undefined) {
        take = parseInt(req.query.take)
        if (isNaN(take)) {
            return res.status(400).json("take must be an integer")
        }
    }

    const slicedPosts = arrayPosts.slice(skip, skip + take)




    res.status(200).json(slicedPosts)
})

app.get("/posts/:id", (req, res)=>{
    const id = +req.params.id
    console.log(id)
    if (isNaN(id)){
        res.status(400).json("id must be an integ");
    }

    const post = arrayPosts.find((ps) => {
        const isMatch = ps.id === id
        return isMatch
    })

    if (!post){
        res.status(404).json("Post not found")
        return
    }
    
    res.json(post)
})




 


app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})