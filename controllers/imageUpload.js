var Jimp = require('jimp');
var path = require('path');

module.exports = function() {
  Jimp.read(path.join(__dirname, '../public/test/20161024051141-Brand-name.jpeg'), function(err, img) {
    if (err) throw err;
    var img1 = img.crop(0, 0, 100, 100);
    var img2 = img.crop(0, 100, 100, 100);
    var img3 = img.crop(0, 200, 100, 100);
    
    img1.write(path.join(__dirname, '../public/test/img1.jpg'));
    img2.write(path.join(__dirname, '../public/test/img2.jpg'));
    img3.write(path.join(__dirname, '../public/test/img3.jpg'));
    img.write(path.join(__dirname, '../public/test/lena-small-bw.jpg'));
  });
};
