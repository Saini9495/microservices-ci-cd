const express = require("express")
const app = express()

app.get("/", (req,res)=>{

res.send(`
<html>
<head>
<title>Product Service</title>

<style>
body{
font-family: Arial;
background: linear-gradient(135deg,#11998e,#38ef7d);
text-align:center;
color:white;
padding-top:100px;
}

.box{
background:rgba(0,0,0,0.2);
padding:40px;
width:400px;
margin:auto;
border-radius:15px;
}

</style>
</head>

<body>

<div class="box">
<h1>Product Service</h1>
<p>Docker Microservice Running</p>
<p>DevOps Pipeline Ready</p>
</div>

</body>
</html>
`)
})

app.listen(5002,()=>{
console.log("Product service running on 5002")
})