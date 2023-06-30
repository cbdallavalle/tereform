import styled from 'styled-components'
import { H2, P } from '../../baseComponents/Typography/Typography.styles'
import { colors } from '../../constants/cssConstants'
import { SectionWrapper } from '../PageComponents/Section/Section'

export const DivMission = styled.div`
  ${SectionWrapper} {
    &:last-of-type {
      min-height: unset;
      background-image: radial-gradient(${colors.brightBlue}, ${colors.lightBlue})
    }
  }
  ${H2} {
    margin: 40px 0;
  }
  span {
    color: ${colors.darkOrange};
  }
  p {
    font-weight: 600;
  }
`

export const DivCount = styled.div`
  display: flex;
    justify-content: center;
  ${P} {
    margin: 30px 0;
    font-size: 150px;
  }
`