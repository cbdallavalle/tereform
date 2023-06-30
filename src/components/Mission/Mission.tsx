import { useState, useEffect } from 'react';
import SectionHeader from '../PageComponents/SectionHeader/SectionHeader';
import Section from '../PageComponents/Section/Section';
import Typography from '../../baseComponents/Typography/Typography';
import {
  DivMission,
  DivCount} from './Mission.styles'
import { colors } from '../../constants/cssConstants';

export default function Mission() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        return prevCount >= 5 ? 1 : (prevCount + 1)
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <DivMission>
      <Section addPadding={true}>
        <article>
          <SectionHeader headerText='OUR MISSION' />
        </article>
        <article>
          <Typography tag='h2'>Count to five.</Typography>
          <DivCount>
            <Typography tag='p'><span>{count}</span></Typography>
          </DivCount>
          <Typography tag='h2' addBackground={true}>
            In that time, <span>100 tons of textiles</span> were landfilled or incinerated.
          </Typography>
          <Typography tag='p'>
            <span>A total of 92 million metric tons</span> of textile waste is produced each year.
            <span> Less than 1%</span> of those textiles are recovered.
          </Typography>
        </article>
      </Section>
      <Section addPadding={true}>
        <Typography tag='h2' color={colors.white}>
          Our mission is to enable textile-to-textile recycling.
        </Typography>
      </Section>
    </DivMission>
  );
}