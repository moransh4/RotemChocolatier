// setHomepage.js
const fs = require('fs');
const packageJson = require('./package.json');

// Set the homepage field dynamically based on environment
if (process.env.NODE_ENV === 'development') {
  packageJson.homepage = 'http://localhost:3000';
}else if (process.env.NODE_ENV === 'qa') {
    packageJson.homepage = 'https://moransh4.github.io/RotemChocolatier';
} else if (process.env.NODE_ENV === 'production') {
  packageJson.homepage = 'https://rotem-chocolate.co.il';
} else {
  console.error('Error: NODE_ENV environment variable not set or invalid.');
  process.exit(1);
}

// Save the modified package.json file
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
