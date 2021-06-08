import Meta from './meta'
import Header from './header'
import Footer from './footer'

export default function Layout({ body }) {
  return (
    <>
      <Meta />
      <div className="main_container">
        <Header />
        <main> { body } </main>
        <Footer />
      </div>
    </>
  )
}