import amqp, { Connection } from 'amqplib/callback_api'

const createMQProducer = (amqpUrl: string, queueName: string) => {
  console.log('Connecting to RabbitMQ...');
  let ch: any;
  // Establish connection with RabbitMQ
  amqp.connect(amqpUrl, (errorConnect: Error, connection: Connection) => {
    if (errorConnect) {
      console.log('Error connecting to RabbitMQ: ', errorConnect);
      return;
    }

    // Create channel
    connection.createChannel((errorChannel, channel) => {
      if (errorChannel) {
        console.log('Error creating channel: ', errorChannel);
        return;
      }

      ch = channel;
      console.log('Connected to RabbitMQ!');
    });
  });

  // Return a function that can be called to send a message
  return (msg: string) => {
    console.log('Producing message to RabbitMQ...');
    ch.sendToQueue(queueName, Buffer.from(msg));
  }
}

export default createMQProducer;