### init the node app
```bash
npm init
```
Run the command in the app folder. then follow the on screen instructions.

### to install modules
```bash
npm install moment --save
```
This is will install the moment module and make an entry into the dependencies block
of package.json

```bash
npm install jasmine-node --save-dev
```
This will install the module and make an entry into the dev dependencies block of
package.json

```bash
npm install -g nodemon
```
installs the package globally

### module versions
`^` -- as a prefix to the version, - get all the latest update versions
`~` -- as a prefix to the version, - get only the path upadtes

### nodemon
```bash
nodemon app.js
```
monitors the node application for changes in the files. restarts the server when changes detected.
