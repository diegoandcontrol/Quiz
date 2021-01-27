import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import BackgroundImage from '../src/components/Quizbg';

const QuizContainer = styled.div`
  width: 100%;
  max-width:350px;
  padding-top:45px;
  margin: auto;
  @media screen and (max-width: 500px){
    margin:auto;
    padding: 15px;
  }
`

export default function Home() {
  return(
    <BackgroundImage backgroundImage={db.bg}>
      <QuizContainer>
          <Widget>
          <Widget.Header>
            <Widget.Content>
                <h1>Quiz Test</h1>
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit ame
                </p>
            </Widget.Content>    
          </Widget.Header>
          </Widget>

          <Widget>
            <Widget.Header>
              <Widget.Content>
                <h1>Alternativas</h1>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit ame</p>
              </Widget.Content>
            </Widget.Header>
            
          </Widget>
          <Footer />
      </QuizContainer>
    </BackgroundImage>
  )
}
