import styled from 'styled-components';
import db from '../db.json'
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';


// const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
// `;

export const QuizContainer = styled.div`
width: 100%;
max-width: width 350px;
padding-top: 45px;
margin: auto 2%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz do Harry</h1>
            <p>Em breve disponivel</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/iedabrito-martins" />
    </QuizBackground>
  );
}