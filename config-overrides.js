//antd配置文件

const { override, fixBabelImports } = require('customize-cra');

 module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
         style: 'css',
       }),
     );