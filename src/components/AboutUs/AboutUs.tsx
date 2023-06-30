import {DivAboutUs, DivUserProfile} from './AboutUs.styles';
import SectionHeader from '../PageComponents/SectionHeader/SectionHeader';
import Section from '../PageComponents/Section/Section';
import Typography from '../../baseComponents/Typography/Typography';
import Mikhail from '../../assets/mikhail.png'
import Kevin from '../../assets/kevin.png'

export default function AboutUs() {
  return (
    <DivAboutUs>
      <Section addPadding={true}>
        <article>
          <SectionHeader headerText='About Us' />
          <DivUserProfile>
            <img src={Kevin} alt='An image of Kevin Sullivan' />
            <div>
              <Typography tag='h3'>Kevin Sullivan</Typography>
              <Typography tag='h4'>CEO</Typography>
              <hr/>
              <Typography tag='p'>
              Kevin loves using oxygen to break stuff down. Whether that means 
              finding ways to decontaminate toxic compounds, converting materials 
              in biomass into valuable products, or degrading hard-to-recycle 
              plastics back to their monomers to create circular processes, 
              he is fascinated by how we can design creative chemical systems 
              that harness the power of oxidation and apply it towards these 
              challenging problems.
              </Typography>
            </div>
          </DivUserProfile>
          <DivUserProfile>
            <img src={Mikhail} alt='An image of Mikhail Konev' />
            <div>
              <Typography tag='h3'>Mikhail Konev</Typography>
              <Typography tag='h4'>CTO</Typography>
              <hr/>
              <Typography tag='p'>
                Mike began his career as an organic chemist synthesizing 
                complex molecules designed by nature. After spending the 
                last decade developing new chemical reactions to construct 
                molecular scaffolds, he refocused this expertise on breaking 
                chemical bonds in plastics instead.
              </Typography>
            </div>
          </DivUserProfile>
        </article>
      </Section>
    </DivAboutUs>
  );
}