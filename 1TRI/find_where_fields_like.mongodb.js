const database = 'BD3-SAMUEL-AULA';
const collection = 'LIVRARIA';

use(database);

db[collection].find(
    { "categoria": "Fantasia Heroica" }, // Query
    { "_id": 0, "codigo": 0 }            // Projection
);