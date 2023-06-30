import logoWithoutO from '../../assets/full-logo-without-o.png'
import logo from '../../assets/logo.png'
import Section from '../PageComponents/Section/Section';
import {
  DivTitle,
  DivTitleBackground,
  DivOverlay,
  DivTitleWrapper,
  DivTitleImages
} from './Title.styles';

function Title() {
  return (
    <DivTitle>
      <Section>
        <DivTitleBackground>
          <DivOverlay/>
          <DivTitleWrapper>
            <DivTitleImages>
              <img src={logoWithoutO} alt='Tereform' />
              <img src={logo} alt='Tereform logo rotating' />
            </DivTitleImages>
            <hr/>
            <p>Enabling circularity for textiles</p>
          </DivTitleWrapper>
        </DivTitleBackground>
      </Section>
      </DivTitle>
  );
}

export default Title;