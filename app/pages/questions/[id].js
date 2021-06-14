import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import { ServerLoadingNotification } from '../../components/Notification'
import { useState } from 'react'
import {
  questionComponents,
  questionsParams,
  getAllQuestions,
} from '../../site/questions'

export async function getStaticPaths() {
  return {
    paths: getAllQuestions(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: questionsParams[params.id] };
}

export default function Question(props) {
  const [ isLoading, setIsLoading ] = useState(true);
  const BodyComponent = questionComponents[props.component];
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Nav />
      <main className="QuestionLayout">
        <div className="page">
          <div className="center medium-width">
            <h1>{props.title}</h1>
            <p>By {props.author}</p>
            <p>{props.description}</p>
            <hr />
          </div>
          <div className={isLoading ? "block" : "hidden"}>
            <p className="center">Loading...</p>
          </div>
          <div className={isLoading ? "hidden" : "block"}>
            <BodyComponent setContentIsLoading={setIsLoading} />
          </div>
          <br />
        </div>
      </main>
      <ServerLoadingNotification />
    </div>
  );
}
