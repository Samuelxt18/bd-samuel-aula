const database= 'BD3-SAMUEL-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].find(
    {valor: {$gte:100, $lte:150}}
) 