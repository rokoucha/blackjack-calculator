import * as React from 'react'

const layout: React.FC<{}> = ({ children }) => (
  <div className="min-h-screen w-full flex flex-col">{children}</div>
)

export default layout
