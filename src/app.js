const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

const PORT = 3000;

app.listen(PORT, () => console.log("listening en port: ", PORT));

app.use(express.static('public'))

// app.set("views", path.resolve("../partials"))

app.set('view engine', 'ejs')

// app.get('/usuarios/:id', (req, res) =>{
//     const id = req.params.id; 
//     if(id == 1){
//         res.render('../src/views/usuarios/user1.ejs');
//     } else if (id == 2) {
//         res.render('../src/views/usuarios/user2.ejs');
//     }
// });

app.get('/', (req, res) => {
    res.render('../src/views/home')
})

app.get('/carrito', (req, res) => {
    res.render('../src/views/Carrito')
})

app.get('/detailproduct', (req, res) => {
    res.render('../src/views/DetailProduct')
})

app.get('/login', (req, res) => {
    res.render('../src/views/Login')
})

app.get('/register', (req, res) => {
    res.render('../src/views/Registro')
})

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/home.html'))
// })

// app.get("/DetailProduct", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/DetailProduct.html'))
// })

// app.get("/Carrito", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/Carrito.html'))
// })

// app.get("/Login", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/Login.html'))
// })

// app.get("/Registro", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/Registro.html'))
// })
