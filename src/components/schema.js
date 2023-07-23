// schema.js
const schemaMarkup = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Obed Rayo',
  url: 'https://www.yourwebsite.com/',
  image: 'https://www.yourwebsite.com/images/developer-pic-1.png',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://www.linkedin.com/in/your-linkedin-profile',
    'https://github.com/your-github-profile',
    // Add other social media or professional profile URLs as needed...
  ],
};

export default schemaMarkup;
