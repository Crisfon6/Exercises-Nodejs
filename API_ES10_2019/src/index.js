import '@babel/polyfill';

import app from './server';


//Settings


async function main(){  
      await app.listen(app.get('port'));
      
      
      console.log("server on port ",app.get('port'));
      
}
main();

