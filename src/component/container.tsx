import * as React from 'react'

const container: React.FC<{}> = ({ children }) => (
  <div className="flex-1 mx-auto container max-w-screen-md">{children}</div>
)

export default container
