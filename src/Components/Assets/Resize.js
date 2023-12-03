const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './Images/Rings';
const outputDirectory = path.join(directory, 'resized');

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDirectory)){
    fs.mkdirSync(outputDirectory);
}

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {

    if (!file.match(/\.(jpg|jpeg|png|gif)$/)) return;

    const filePath = path.join(directory, file);
    const outputPath = path.join(outputDirectory, file);

    sharp(filePath)
      .resize(100, 100) // Change these values to your desired dimensions
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error('Error resizing file:', file, err);
        } else {
          console.log('Resized:', file, 'to', info.width, 'x', info.height);
        }
      });
  });
});
