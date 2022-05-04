const fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const appName = process.argv[2];

async function createApp() {

    exec(`npx create-react-app@latest ${appName}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        //return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        //return;
      }

      if (stdout) {
        console.log(`stdout: ${stdout}`);
        //return;
      }

      try {
        console.log("-- Modify React v18 install...");

        fs.unlinkSync(`./${appName}/package-lock.json`)
        fs.unlinkSync(`./${appName}/src/App.js`)
        fs.rmSync(`./${appName}/node_modules`, { recursive: true, force: true });

      } catch(err) {
        console.error(err)
      }

    });


} // end createApp() fct def

createApp(appName);
