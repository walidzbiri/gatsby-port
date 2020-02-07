module.exports = {
  siteTitle: 'Zbiri Walid | Software Engineer',
  siteDescription:
    'Zbiri Walid is a software engineer based in SALE, MA who specializes in developing high-quality websites and applications.',
  siteKeywords:
    'Walid zbiri, zbiri, Walid, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://walidzbiri.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Zbiri Walid',
  location: 'SALE, MA',
  email: 'walid.zbiri@uit.ac.ma',
  github: 'https://github.com/walidzbiri/',
  twitterHandle: '@ZbiriWalid',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/walidzbiri/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/walid-zbiri-64701812b/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/zbiriwalid',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/walidotnet/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ZbiriWalid',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
