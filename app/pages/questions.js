import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import { getAllQuestions } from '../site/questions'
import { ServerLoadingNotification } from '../components/Notification'

export async function getStaticProps() {
  return {
    props: {
      questions: getAllQuestions(),
    },
  };
}

export default function Questions({ questions }) {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="Questions">
        <div className="page">
          <div className="center">
            <h1>Questions</h1>
            <p>Learn more about transit and public health in Chicago with these featured data vignettes.</p>
          </div>
          <div className="QuestionsSection">
            {questions.map(({ params }) => {
              return (
                <div className="QuestionPreview" key={params.id}>
                  <h2>{params.title}</h2>
                  <p>By {params.author}</p>
                  <p>{params.description}</p>
                  <br />
                  <Link href={`/questions/${params.id}`}>
                    <a className="btn secondary">View Question</a>
                  </Link>
                </div>
              );
            })}
          </div>
          <br />
          <p className="center">That's all for now! More questions coming soon...</p>
        </div>
      </main>
      <ServerLoadingNotification />
    </div>
  )
}
