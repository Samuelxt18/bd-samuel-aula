const database= 'BD3-SAMUEL-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].find(
    {"descricao": /crime/i},
    { "_id": 0, "codigo": 0 } 
);