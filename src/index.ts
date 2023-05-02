// src/index.ts
import { createSchema, createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { schema } from "./schema";

const port = Number(process.env.API_PORT) || 4000

const yoga = createYoga({schema})

// const yoga = createYoga({
//     schema: createSchema({
//         typeDefs: /*GraphQL */ `
//             type Query {
//                 hello: String
//             }
//         `,
//         resolvers: {
//             Query: {
//                 hello: () => 'Hello from Yoga!'
//             }
//         }
//     })
// })

const server = createServer(yoga)

server.listen(port, () => {
    console.info('🚀  Server is running on http://localhost:4000/graphql')
})
