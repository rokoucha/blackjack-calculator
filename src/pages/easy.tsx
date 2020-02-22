import * as React from 'react'

import Container from '../component/container'
import Layout from '../component/layout'
import Navbar from '../component/navbar'

const CountButton: React.FC<{ onClick: Function }> = ({
  onClick,
  children,
}) => (
  <button
    className="bg-teal-300 border rounded md:w-full mx-1 my-2 p-2 text-lg"
    onClick={() => onClick()}
  >
    {children}
  </button>
)

const home: React.FC<{}> = () => {
  const [count, setCount] = React.useState(0)

  const minus1 = () => setCount(count - 1)
  const plus1 = () => setCount(count + 1)
  const zero = () => setCount(count)

  const reset = () => {
    if (window.confirm('Reset?')) {
      setCount(0)
    }
  }

  return (
    <Layout>
      <Navbar mode="easy" />
      <Container>
        <div className="mt-4 mb-1 mx-1">
          <div className="flex p-2 w-full">
            <div className="w-full text-center mb-2 text-xl font-bold">
              Easy mode
            </div>
          </div>
          <div className="flex flex-col md:flex-row m-auto justify-between mb-2">
            <CountButton onClick={plus1}>2 ~ 7</CountButton>
            <CountButton onClick={zero}>10 ~ A</CountButton>
            <CountButton onClick={minus1}>8, 9</CountButton>
          </div>
          <div className="flex mx-auto mb-2 justify-center">
            <div className="flex mx-2 text-4xl my-auto">Count:</div>
            <div className="flex mx-2 text-6xl my-auto">{count}</div>
          </div>
          <div className="flex mx-auto w-full">
            <button
              className="bg-red-400 border rounded mx-auto my-2 px-4 py-2 text-lg"
              onClick={reset}
            >
              Reset!
            </button>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default home
