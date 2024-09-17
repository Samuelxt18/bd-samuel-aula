const database= 'BD3-SAMUEL-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].updateOne(
    {titulo: "As Cavernas de Aço"},
    {$set: {valor: '250'}}
)