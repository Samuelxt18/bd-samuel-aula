const database= 'BD3-SAMUEL-AULA';

const collection = 'LIVRARIA';

use(database);
//Seleciona o livro com o valor maior que o dewterminado
// db[collection].find(
//     {valor:{$gt:100}}
// )
//SELECIONA  O LIVRO COM  VALOR 
db[collection].find(
    {valor:{$lte:100}}
)