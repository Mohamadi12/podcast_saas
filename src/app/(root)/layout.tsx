import React from 'react'

const Layout = async ({children}:Readonly<{children: React.ReactNode}>) => {
  return (
    <div>
        <main>
            <p className='text-white-1'>LEFT SIDEBAR</p>
            {children}
            <p className='text-white-1'>RIGHT SIDEBAR</p>
        </main>
    </div>
  )
}

export default Layout