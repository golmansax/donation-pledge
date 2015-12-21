const PLEDGERS = {
  golmansax: {
    fullName: 'Holman Gao',
    pledges: [{
      impact: 'donate to youth education programs',
      howOften: 'year on my birthday',
      mission: 'I was fortunate enough to benefit from great programs when I ' +
        'was young and I want to support organizations that empower youth.',
      donations: [
        {
          year: 2015,
          organization: {
            url: 'http://www.mbhsmagnet.org/',
            text: 'Montgomery County ARML Team',
          },
          reason: 'This was an overnight math team field trip that I went to ' +
            'throughout middle and high school, and I loved going every year!',
        },
        {
          year: 2014,
          organization: {
            url: 'https://www.hopechineseschool.org/hcscp/',
            text: 'Hope Chinese School College Park Campus',
          },
          reason: 'I am very grateful to this school and my parents for ' +
            'helping/pushing me to learn Mandarin Chinese',
        },
        {
          year: 2013,
          organization: {
            url: 'http://www.asia.si.edu/events/imaginasia.asp',
            text: 'Smithsonian ImaginAsia Family Program',
          },
          reason: 'I volunteered for this program for six years, and I saw ' +
            'firsthand how empowering art projects can be',
        },
      ],
    }],
  },
};

Object.keys(PLEDGERS).forEach((id) => {
  const pledger = PLEDGERS[id];
  pledger.pledges.forEach((pledge) => {
    pledge.pledgeStatement = `I pledge to ${pledge.impact} every ` +
      `${pledge.howOften}.`;
  });
});

export default PLEDGERS;
