const express = require('express') //importa modulos express
const app = express() // executa o express, permitindo chamar seus metodos

app.listen('3000') // esta funçãp inicia um socket UNIX e escuta as conexões em um caminho fornecido, neste caso o 3000


/*=========== Definindo Rotas ============*/
app.route('/').get((req, res) => res.send('Hello'))
app.route('/sobre').get((req, res) => res.send('Olá novamente :)'))

/*=========== Recebendo dados de Fora ============*/
app.route('/').post((req, res) => console.log(req.body))