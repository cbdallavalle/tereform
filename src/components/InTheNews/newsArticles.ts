export type NewsUrl = {
  title?: string;
  url: string;
}

export type NewsArticleType = {
  title: string;
  urls: NewsUrl[];
  body: string;
}

export const articles = [
  {
    title: 'A Pitch for the Future of Energy Day 2023',
    body: 'Mikhail gives a pitch at the Denver Startup Week session hosted by Halliburton Labs.',
    urls: [{url: 'https://www.denverstartupweek.org/schedule/8180-future-of-energy-day-west-gate-entrepreneurs-delivering-a-brighter-energy-future'}]
  },
  {
    title: 'Tereform awarded the H&M Foundation\'s Global Change Award!',
    body: 'Tereform was honored with the "Nobel Prize in Fashion"! The GCA identifies and supports, both economically and through business development resources, fashion-centric innovations that aim to reshape the industry towards a more sustainable future.',
    urls: [{url: 'https://hmfoundation.com/gca/'}]
  },
  {
    title: '"Energy I-Corps Success Story": highlighted by the DOE',
    body: 'The DOE\'s OTT spotlights Tereform for its ongoing progress and achievements following the completion of I-Corps.',
    urls: [{url: 'https://www.energy.gov/technologytransitions/articles/tereform-enabling-circularity-textiles'}]
  },
  {
    title: 'Acceptance into the West Gate incubator program',
    body: 'Mikhail was accepted into the inaugural cohort of NREL\'s West Gate program, enabling Tereform\'s research and development to be conducted at NREL with support from the DOE\'s EERE and OTT.',
    urls: [{url: 'https://www.energy.gov/technologytransitions/articles/energy-i-corps-cohort-15-welcomes-dozens-new-scientists'}]
  },
  {
    title: 'Tereform welcomed into Energy I-Corps 15',
    body: 'Round two of the DOE-sponsored business accelerator will help Tereform refine their business model and network through tailored teaching sessions and stakeholder interviews.',
    urls: [{url: 'https://www.energy.gov/eere/bioenergy/articles/tereform-enabling-circularity-textiles'}]
  },
  {
    title: 'An early pitch: NextCycle Colorado Pitch Competition 2022',
    body: 'Kevin gives a pitch upon graduation from the Colorado NextCycle business accelerator.',
    urls: [
      {
        url: 'https://www.nrel.gov/news/program/2022/first-cohort-of-innovators-enter-west-gate.html'
      },
      {
        title: 'Click here to watch the pitch',
        url: 'https://www.youtube.com/watch?v=bTKWNcXDnt4'
      }
    ]
  },
] as NewsArticleType[]