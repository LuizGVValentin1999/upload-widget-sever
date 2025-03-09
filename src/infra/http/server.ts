import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'

const server = fastify()

server.register(fastifyCors, { origin: '*' })// teste de commit 

server.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP Server running!')
})
