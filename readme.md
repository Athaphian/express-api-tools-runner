express-api-tools-runner
========================

This is a complimentary module to the express-api-tools module which makes building
pragmatic api endpoints easy.

This runner also serves a frontend from the /app directory.

### Usage
Usage is pretty simple.

Add this package as a dependency to your project and add this to your package.json
```
"scripts": {
    "run": "node ./node_modules/express-api-tools-runner/launcher.js log"
}
```

This will start the webserver on port 8088.

The frontend app should be located inside your apps /app directory and have an index.html file.

The backend modules should be placed in the /modules directory and export the following function
```
'api': (express, baseUrl) => {
    registerEndpoint(express, baseUrl + '/<YOUR-URL>', <CACHE-TIME IN MS>, function() {
        <RETURN JSON HERE>
    });
}
```

Don't forget to import the registerEndpoint
```
registerEndpoint = require('express-api-tools').register_endpoint.default;
```

### Todo
- Make port configurable
- Make frontend directory configurable
