import { type FastifyInstance } from "fastify"

export default function routes(fastify: FastifyInstance, options) {
    fastify.post('/appointments', async (request, reply) => {
        return { hello: 'world'}
    })
}