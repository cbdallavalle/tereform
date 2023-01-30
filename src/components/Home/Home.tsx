import styled from 'styled-components'
import Title from '../Title/Title'
import Introduction from '../Introduction/Introduction'

const DivHome = styled.div`
  min-width: 320px;
  width: 100vw;
  box-sizing: border-box;
`

function Home() {
  return (
    <DivHome>
      <Title />
      <Introduction />
    </DivHome>
  );
}

export default Home;
