import {
  H2,
  H3,
  H4,
  P
} from './Typography.styles';

type TypographyProps = {
  tag: 'h2' | 'h3' | 'h4' | 'p',
  addBackground?: boolean,
  color?: string,
  children: React.ReactNode
}

export default function Typography({ color, tag, children, addBackground = false }:TypographyProps) {
  let tagToReturn = <P color={color} addBackground={addBackground}>{children}</P>
  
  switch (tag) {
    case 'h2':
      tagToReturn = <H2 color={color} addBackground={addBackground}>{children}</H2>
      break;
    case 'h3':
      tagToReturn = <H3 color={color} addBackground={addBackground}>{children}</H3>
      break;
    case 'h4':
      tagToReturn = <H4 color={color} addBackground={addBackground}>{children}</H4>
      break;
    default:
      break;
  }

  return tagToReturn
}
