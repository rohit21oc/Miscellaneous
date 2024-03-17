const express = require("express");
const app = express();
// console.dir(app);

const port = 3000;
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});


// app.use((req,res)=>{
//     // console.log(req);
//     // console.log(res);
//     console.log("request received");
//     const fruits ="<h1>Fruits</h1><ul><li>Mango</li> <li>Orange</li></ul>"
//     const code = {
//         "apple":"red",
//         "banana":"yellow"
//     }
//     res.send(code);
//     res.send(fruits);
//     // res.send("this is a basic response");
// });


// app.get("/",(req,res)=>{
//     res.send("You contacted root path")
// });
// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path")
// });
// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path")
// });
// app.get("/search",(req,res)=>{
//     const search = {
//         fruit : {
//             "apple":"apple"

//         }
//     }
//     res.send(search)
// });


// app.get("*",(req,res)=>{
//     res.send("This path is not available")
// });


app.get("/:username/:id",(req,res) => {
    // console.log(req.params)
    let {username,id}= req.params;
    let htmlstr = `<h1>Welcome to the page of ${username}</h1>`
    res.send(htmlstr);
});


app.get("/search",(req,res) => {
    let { q } = req.query;
    if(!q){
        res.send(`Nothing searched`)
    }
    res.send(`Search result for query: ${q}`);
});