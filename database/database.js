const sequelize = require('sequelize');

const conexao = new sequelize(
    'pw2_api_hospital',
    'root',
    '',
    {
        host:'localhost',
        port:3307,
        dialect:'mysql',
        timezone: '-3:00'
    }
);

module.exports = conexao;