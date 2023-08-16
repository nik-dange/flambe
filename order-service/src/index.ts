import server from './src'
import config from './src/config'

server.listen(config.port, () => {
  console.log(`Server starting on port ${config.port}`)
})