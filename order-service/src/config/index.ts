const dotenv = require('dotenv');

dotenv.config();


const config = {
    port: process.env.PORT,
    amqpUrl: process.env.AMQP_URL as string,
  };
  
  export default config;