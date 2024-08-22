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
    return {
        hello: 'world'
    };
});
try {
    server.listen({ port: 8080 });
}
catch (err) {
    server.log.error(err);
    process.exit(1);
}
