// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('postgres://flambe_user:Ud7AvAMJm9e0Due0rMLQKiv2TnqZObu0@dpg-cjo26r4dfrcc73amedm0-a.oregon-postgres.render.com/flambe',
// {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     dialectOptions: {
//         ssl: true
//     },
//   });

// const testDatabase = async () => {
//     try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     } catch (error) {
//     console.error('Unable to connect to the database:', error);
//     }
// }


import server from './src'
import config from './src/config'


server.listen(config.port, () => {
  console.log(`Server starting on port ${config.port}`)
});