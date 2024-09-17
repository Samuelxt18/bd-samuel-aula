/**NOME DO BANCO DE DADOS */

const database= 'BD3-SAMUEL-AULA';

// NOME DO BANCO DA COLEÇÃO DE DADOS

const collection = 'LIVRARIA'

// CRIAR OU ACESSAR O BANCO DE DADOS:
use(database)

// CRIAR UMA COLEÇÃO DE DADOS

db[collection].deleteMany(
    {autor:'Isaac Asimov '}
);