import { buffer } from "stream/consumers";
import { rabbit } from "../../domain/broker/broker";
import * as amqp from 'amqplib'

export class Broker implements rabbit{

     async sendMessage(name: string):Promise <void> {
        try {
            const message = `${name} supplier`
            const connection =  await amqp.connect(
                process.env.RABBITMQ_URL || "amqp://localhost:5672"
            );
            const channel = await connection.createChannel();
            const ex = 'amqp.direct';
            channel.publish(ex,'',Buffer.from(message));
            await channel.close();
            await connection.close();
            console.log('Mensaje publicado');
        } catch (error) {
            console.log("err0r--en  elcatch", error);
        }
    }



}