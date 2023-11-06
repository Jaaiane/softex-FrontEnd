const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'crud',
    'root',
    'tftgu',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

sequelize.authenticate().then(function() {
    console.log("Conexão realizada com sucesso")
}).catch(function(erro) {
    console.log("falha na conexão:" + erro)
})
