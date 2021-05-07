import Head from 'next/head'
import Link from 'next/link'

export default function About() {
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
      <main className="About">
        <div className="page">
          <h1>About</h1>
          <p>TransitHealth is developed by students at Scarlet Data Studio.</p>
        </div>
      </main>
    </div>
  )
}
