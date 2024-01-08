// // sitemap-generator.js
// const SitemapGenerator = require('sitemap');

// const baseUrl = 'https://rotem-chocolate.co.il';

// const urls = [
//   { url: baseUrl, changefreq: 'daily', priority: 1.0 },
//   { url: '#about', changefreq: 'weekly', priority: 0.7 },
//   { url: '#workshops', changefreq: 'weekly', priority: 0.7 },
//   { url: '#gallery', changefreq: 'weekly', priority: 0.7 },
//   { url: '#reviews', changefreq: 'weekly', priority: 0.7 },
//   { url: '#contact', changefreq: 'weekly', priority: 0.7 },
//   { url: '/workshop/handmade', changefreq: 'weekly', priority: 0.7 },
//   { url: '/workshop/children', changefreq: 'weekly', priority: 0.7 },
//   { url: '/workshop/chocolate', changefreq: 'weekly', priority: 0.7 },
//   { url: '/workshop/couple', changefreq: 'weekly', priority: 0.7 },
//   { url: '/workshop/family', changefreq: 'weekly', priority: 0.7 },
//   { url: '/workshop/work', changefreq: 'weekly', priority: 0.7 },
//   // Add more URLs as needed
// ];

// const sitemap = SitemapGenerator.createSitemap({
//   hostname: baseUrl,
//   cacheTime: 600000,
//   urls,
// });

// sitemap.toFile('./public/sitemap.xml', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Sitemap generated successfully!');
//   }
// });




// sitemap-generator.js
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const outputDir = './public';
const targetUrl = 'https://rotem-chocolate.co.il';

const generateUrls = () => {
  // Your logic to generate URLs goes here
  return [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '#about', changefreq: 'weekly', priority: 0.7 },
    { url: '#workshops', changefreq: 'weekly', priority: 0.7 },
    { url: '#gallery', changefreq: 'weekly', priority: 0.7 },
    { url: '#reviews', changefreq: 'weekly', priority: 0.7 },
    { url: '#contact', changefreq: 'weekly', priority: 0.7 },
    { url: '/workshop/handmade', changefreq: 'weekly', priority: 0.7 },
    { url: '/workshop/children', changefreq: 'weekly', priority: 0.7 },
    { url: '/workshop/chocolate', changefreq: 'weekly', priority: 0.7 },
    { url: '/workshop/couple', changefreq: 'weekly', priority: 0.7 },
    { url: '/workshop/family', changefreq: 'weekly', priority: 0.7 },
    { url: '/workshop/work', changefreq: 'weekly', priority: 0.7 },
    // Add more URLs as needed
  ];
};

const sitemapStream = new SitemapStream({ hostname: targetUrl });

generateUrls().forEach((url) => {
  sitemapStream.write(url);
});

sitemapStream.end();

streamToPromise(sitemapStream)
  .then((data) => {
    fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });