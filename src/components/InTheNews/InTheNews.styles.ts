import styled from 'styled-components'
import { BackgroundStyle } from '../../baseComponents/Typography/Typography.styles'
import { colors } from '../../constants/cssConstants'

export const DivInTheNews = styled.div`
`

export const UiNewArticles = styled.ul`
  display: flex;
      flex-direction: column;
      align-items: center;
  gap: 20px;
`

export const LiNewsArticle = styled.li`
  ${BackgroundStyle}
  width: 100%;
  max-width: 800px;
  display: flex;
    flex-direction: column;
  padding: 40px;
  h3 {
    margin: 0;
  }
  p {
    margin: 30px 0;
  }
  a {
    text-align: right;
    color: ${colors.offBlack};
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`