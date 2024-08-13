import fastify from 'fastify';
const server = fastify({ logger: true });
const options = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    }
};
server.get('/ping', options, async (request, reply) => {
    reply.send('ponggggg poooong\n');
});
server.get('/', options, (request, reply) => {
    reply.send({ hello: 'world' });
});
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
