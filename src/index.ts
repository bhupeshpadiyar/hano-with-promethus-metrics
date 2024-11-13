import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prometheus } from '@hono/prometheus'
import { cors } from 'hono/cors'



const app = new Hono()


const { printMetrics, registerMetrics } = prometheus()

app.use('*', registerMetrics)
//app.use("*", cors())
app.get('/metrics', printMetrics)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 4000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
