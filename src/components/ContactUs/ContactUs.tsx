import {DivContactUs, DivContactLinks} from './ContactUs.styles';
import SectionHeader from '../PageComponents/SectionHeader/SectionHeader';
import Section from '../PageComponents/Section/Section';
import Email from '../../assets/email.png';
import LinkedIn from '../../assets/linkedin.png';

export default function AboutUs() {
  return (
  <DivContactUs>
      <Section addPadding={false}>
        <article>
          <DivContactLinks>
            <a href='https://www.linkedin.com/company/tereform/'>
              Follow us on LinkedIn
              <img src={LinkedIn} alt='Click to go to LinkedIn' />
            </a>
            <a
              href='#'
              onClick={(e) => {
                  window.location.href = 'mailto:info@tereform.com';
                  e.preventDefault();
              }}
            >
              Send us an email!
              <img src={Email} alt='Click to send an email to Tereform' />
            </a>
          </DivContactLinks>
        </article>
      </Section>
    </DivContactUs>
  );
}