const express = require('express');
const routes = require('./routes')
const app = express();

app.use(express.json()); 
app.use(routes);

app.listen(3333);   

// a parte '/' é o caminho, por exemplo app.get ('/users', (request, response))

/**
*    Metodos HTTP
*
*   GET: buscar uma informação do backend - serve para retorno de informações - listar usuarios
*   POST: criar informação no backend
*   PUT: alterar informação no backend
*   DELETE: deletar informação no backend
**/
/** do arquivo package.json 
 * "test": "echo \"Error: no test specified\" && exit 1" 
 */
/**
 * tipos de parametros
 * 
 * Query parameters: parametros enviados na rota (nomeados) após o simbolo de interrogação "?", (servem para filtros, paginação_) ex: users?name=Lucas&idade=29
 * route parameters: parametros usados para identificar recursos ex: users/1 em app.get('/users:id', (request, response) => {
 * request body: corpo de requisição para criar ou alterar recursos
 */

 /**
  * Bancos de dados
  * SQL (relacionais): MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL (Não relacionais): MongoDB, CouchDB
  * 
  *  Instalar Driver do DB
  * 
  * Driver: SELECT * FROM  users
  * Query Builder: table('users').select('*').where()
  * 
  * vamos usar o querybuilder KNEX
  * 
  *  
  */

