import styled from 'styled-components'
import Title from '../Title/Title'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import Mission from '../Mission/Mission'
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs'

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
      </DivHome>
  );
}

export default Home;
