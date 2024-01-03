import styled from 'styled-components'
import Title from '../Title/Title'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import Mission from '../Mission/Mission'
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs'
import InTheNews from '../InTheNews/InTheNews'

const DivHome = styled.div`
  min-width: 320px;
  width: 100vw;
  box-sizing: border-box;
`

function Home() {
  return (
    <DivHome>
        <Title />
        <Mission />
        <WhatWeDo />
        <AboutUs />
        <ContactUs />
        <InTheNews />
      </DivHome>
  );
}

export default Home;
