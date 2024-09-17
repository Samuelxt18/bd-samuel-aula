const database= 'BD3-SAMUEL-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].find({
    autor:'J.R.R Tolkien'

}).sort({valor:-1});
