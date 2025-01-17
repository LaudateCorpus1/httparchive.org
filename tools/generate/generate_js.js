const fs = require('fs-extra');

const generate_js = async () => {
  console.log(`\n Generating non-webpack JavaScript`);
  console.log(` Copying highcharts-more.js`);
  fs.copy(
    './node_modules/highcharts/highcharts-more.js',
    './static/js/highcharts-more.js',
  );
  console.log(` Copying highstock.js`);
  fs.copy(
    './node_modules/highcharts/highstock.js',
    './static/js/highstock.js',
  );
};

module.exports = {
  generate_js,
};
