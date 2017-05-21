var gm = require('gm').subClass({imageMagick: true});
var path = require('path');

module.exports = function() {
  var img = gm(path.join(__dirname, '../public/test/20161024051141-Brand-name.jpeg'));
  var h = 0;
  var w = 0;
  img.identify(function (err, data) {
    if (err) throw err;
    console.log("_____________________________________________");
    console.log(data);
    console.log("_____________________________________________");
  });
  img.size(function (err, size){
    if (err) throw err;
    h = size.height;
    w = size.width;
  });
  
  img.resize(300, 300)
  .noProfile()
  .write(path.join(__dirname, '../public/test/lena-small-bw.jpg'), function (err) {
    if (err) throw err;
    console.log('done');
  });

  gm(path.join(__dirname, '../public/test/20161024051141-Brand-name.jpeg'))
  .resize(300, 300)
  .noProfile()
  .write(path.join(__dirname, '../public/test/lena-small-bw.jpg'), function (err) {
    if (err) throw err;
    console.log('done');
  });
};
