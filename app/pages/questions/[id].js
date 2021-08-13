import fs from 'fs'
import Head from 'next/head'
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
  const questionParams = questionsParams[params.id];
  // Only load community area GeoJSON if needed
  const communityAreas = questionParams.loadCommunityAreas
    ? JSON.parse(fs.readFileSync(
        "./public/resources/community_area.json"
      ))
    : {};
  return {
    props: {
      ...questionParams,
      communityAreas,
    }
  };
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
            <BodyComponent
              setContentIsLoading={setIsLoading}
              communityAreas={props.communityAreas}
            />
          </div>
          <br />
        </div>
      </main>
      <ServerLoadingNotification />
    </div>
  );
}
