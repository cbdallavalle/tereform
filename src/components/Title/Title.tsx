import logoWithoutO from '../../assets/full-logo-without-o.png'
import logo from '../../assets/logo.png'
import {
  DivTitle,
  DivOverlay,
  DivTitleWrapper,
  DivTitleImages
} from './Title.styles';

function Title() {
  return (
    <DivTitle>
      <DivOverlay/>
      <DivTitleWrapper>
        <DivTitleImages>
          <img src={logoWithoutO} alt='Tereform' />
          <img src={logo} alt='Tereform logo rotating' />
        </DivTitleImages>
        <hr/>
        <p>Enabling circularity for textiles</p>
      </DivTitleWrapper>
    </DivTitle>
  );
}

export default Title;