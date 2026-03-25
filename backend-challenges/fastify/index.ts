import Fastify from "fastify";
import { AppointmentController } from "./AppointmentModule";

const fastify = Fastify({
    logger: true
})


fastify.register(AppointmentController)

fastify.listen({ port: 3000 }, function (err, address) {
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`Server running on ${address}`)
})