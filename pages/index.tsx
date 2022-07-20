import type { NextPage } from "next"
import Head from "next/head"
import Footer from "../layout/Footer/Footer"
import Header from "../layout/Header/Header"

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='description' content='Приложение премиум недвижимости' />
        <link rel='icon' href='/real-estate.webp' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main className='main'>
        {/* <Home /> */}
        Home
      </main>
      <Footer />
    </>
  )
}

export default Index
