import * as trpcExpress from '@trpc/server/adapters/express'
import express, { Application, NextFunction, Request, Response } from 'express'
import { expressHandler } from 'trpc-playground/handlers/express'
import {appRoute} from 'server/controller/todoRouter'
import cors from 'cors'


const runApp = async () => {
  const app: Application = express()

  app.use(cors())

  const trpcApiEndpoint = '/api/trpc'
  const playgroundEndpoint = '/api/trpc-playground'

  app.get('/', (req, res) => {
    return res.send('Hello')
  })

  app.use(
    trpcApiEndpoint,
    trpcExpress.createExpressMiddleware({
      router: appRoute,
      createContext: () => ({}),
    }),
  )

  app.use(
    playgroundEndpoint,
    await expressHandler({
      trpcApiEndpoint,
      playgroundEndpoint,
      router: appRoute,     
    }),
  )

  app.listen(5001, () => {
    console.log('listening at http://localhost:5001')
  })
}

runApp()


