const database= 'BD3-SAMUEL-AULA';

const collection = 'LIVRARIA';

use(database);


db[collection].updateMany(
    {autor: "J.R.R tokien"},
    {$set: {autor: 'Jhon Ronald Reuel Tolkien'}}
);