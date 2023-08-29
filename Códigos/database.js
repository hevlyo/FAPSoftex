const pgp = require('pg-promise')();

const dbConfig = {
    host: 'localhost',
    port: 5432, 
    database: 'softexsql',
    user: 'softex',
    password: 'softex123'
};

const db = pgp(dbConfig);

db.connect()
    .then(obj => {
        obj.done(); 
        console.log('Conexão bem-sucedida com o banco de dados PostgreSQL.');
    })
    .catch(error => {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    });
