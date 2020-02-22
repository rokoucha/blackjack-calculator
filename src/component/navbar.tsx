import * as React from 'react'

const navbar: React.FC<{ mode: string }> = ({ mode }) => (
  <div className="flex bg-gray-800 text-gray-300">
    <div className="flex mx-auto container max-w-screen-md p-4">
      <div className="flex-1 justify-start my-auto">
        <a href="/" className="py-2 font-bold text-xl text-teal-300">
          Blackjack Calculator
        </a>
      </div>
      <a
        href={mode === 'easy' ? 'hard' : 'easy'}
        className="flex justify-end mx-2 p-2 border rounded"
      >
        {mode === 'easy' ? 'Hard mode' : 'Easy mode'}
      </a>
    </div>
  </div>
)

export default navbar
