import { FastifyInstance, FastifyRequest } from "fastify";

interface NameParam {
  name: string;
}

// JSON schema for serialization. Fastify is faster when a schema is provided so that JSON can be validated.
// this validates the JSON response in the greetings controller. No error is thrown unless a required property is specified
const replySchema = {
  response : {
    200: {
      type: 'object',
      properties: {
        hello: { type: 'string' }
      }
    }
  }
}

// controller handling the /greetings/ping/:name endpoint
// every fastify plugin takes in a fastify instance, optional options object, and a done callback
export const greetingsController = (fastify: FastifyInstance, options, done) => {
  fastify.get('/ping/:name', { schema: replySchema }, (req: FastifyRequest<{ Params: NameParam }>, reply) => {
    return {
      hello: `${req.params}`
    }
  })
  done();
}