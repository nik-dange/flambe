const dotenv = require('dotenv');

dotenv.config();


const config = {
    port: process.env.PORT,
    amqpUrl: process.env.AMQP_URL as string,
    supabaseUrl: process.env.SUPABASE_URL as string,
    supabaseKey: process.env.SUPABASE_KEY as string,
  };
  
  export default config;