const rimraf = require('rimraf');
const path = require('path');
const ora = require('ora');
// console.log(process.cwd(),__dirname);
rimraf.sync(path.join(process.cwd(),'dist'));
const spinner = ora('开始构建项目...');
spinner.start();