import { app } from './app';
import { port } from './config/envVars';

const main = () => {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
};

main();
