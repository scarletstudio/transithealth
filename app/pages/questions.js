import Head from 'next/head'
import Nav from '../components/Nav'

export default function Questions() {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="Questions">
        <div className="page">
          <h1>Questions</h1>
          <p>Coming soon...</p>
        </div>
      </main>
    </div>
  )
}
