import '../styles/globals.css'
import NavBa from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBa />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
