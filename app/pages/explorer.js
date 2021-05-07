import Head from 'next/head'
import Link from 'next/link'

export default function Explorer() {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/explorer">Explorer</Link>
        <Link href="/questions">Questions</Link>
      </nav>
      <main className="Explorer">
        <div className="page">
          <h1>Data Explorer</h1>
          <p>Coming soon...</p>
        </div>
      </main>
    </div>
  )
}
