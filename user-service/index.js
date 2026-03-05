const express = require("express")
const app = express()

app.get("/", (req, res) => {
res.send(`
<html>
<head>
<title>User Service</title>
<style>
body{
font-family: Arial;
background: linear-gradient(135deg,#667eea,#764ba2);
color:white;
text-align:center;
padding-top:100px;
}
.card{
background:rgba(255,255,255,0.1);
padding:40px;
border-radius:15px;
width:400px;
margin:auto;
box-shadow:0 10px 20px rgba(0,0,0,0.3);
}
</style>
</head>

<body>
<div class="card">
<h1>User Service</h1>
<p>Microservice Running Successfully</p>
<p>CI/CD Ready</p>
</div>
</body>
</html>
`)
})

app.listen(5001,()=>{
console.log("User Service running on 5001")
})