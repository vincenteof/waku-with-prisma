import { Counter } from './Counter.js'
import { PrismaTest } from './PrismaTest.js'
const App = ({ name = 'Anonymous' }) => {
  return (
    <div style={{ border: '3px red dashed', margin: '1em', padding: '1em' }}>
      <h1>Hello {name}!!</h1>
      <h3>This is a server component.</h3>
      <PrismaTest />
      <Counter />
    </div>
  )
}

export default App
