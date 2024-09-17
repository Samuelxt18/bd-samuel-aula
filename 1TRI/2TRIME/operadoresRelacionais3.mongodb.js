const database= 'BD3-SAMUEL-AULA';

const collection = 'LIVRARIA';

use(database);

//  SELECIONA YUM LIVRO DE UMA CATEGORIA E UM VALOR DETERMINADO
  
db[collection].find({
    $or:[
    {categoria:{$eq: 'Fantasia Heroica'}},
    {valor:{$lte:100}}
    ]
});

