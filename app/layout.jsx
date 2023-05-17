import '@styles/globals.css'

export const metadata = {
    title: 'Layout',
    description: 'Layout',
}

const Rootlayout = () => {
  return (
      <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                {children}
            </main>
        </body>
      </html>
  )
}

export default Rootlayout
