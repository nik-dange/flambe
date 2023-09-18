import amqp, { Message } from 'amqplib/callback_api'

const createMQConsumer = (amqpURl: string, queueName: string) => {
  console.log('Connecting to RabbitMQ...');
  return () => {
    amqp.connect(amqpURl, (errConn, conn) => {
      if (errConn) {
        throw errConn;
      }

      conn.createChannel((errChan, chan) => {
        if (errChan) {
          throw errChan;
        }

        console.log('Connected to RabbitMQ');
        chan.assertQueue(queueName, { durable: true });
        chan.consume(queueName, (msg: Message | null) => {
          if (msg) {
            console.log("Running consumer");
            // parse potential message in json format
            const parsed = JSON.parse(msg.content.toString());
            console.log('Parsed message: ', parsed);
            console.log("Parsed action: ", parsed.action);
            // various logic depending on the action of the message
            switch (parsed.action) {
              case "REGISTER":
                console.log('Consuming REGISTER action', parsed.data);
                break;
              case "LOGIN":
                console.log('Consuming LOGIN action', parsed.data);
                break;
              default:
                break;
            }
          }
        }, { noAck: true })
      })
    });
  }
}

export default createMQConsumer;