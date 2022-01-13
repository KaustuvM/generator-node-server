# generator-node-server
> Yeoman generator plugin for NodeJS micro-service scaffolding.

#### Pre-Requisites:
- Install [NodeJS](https://nodejs.org/) version 16.13.0. This will install NPM v8.1.0 as well.

#### Installation steps:

- Install [Yeoman](http://yeoman.io)
```bash
npm install -g yo
```
- Clone/Download generator-node-server
- 'cd' (change directory) /to/generator-node-server folder
- Install dependent node modules.
-  NPM link generator-node-server package
```bash
cd <installation directory>/generator-node-server
npm i
sudo npm link
```

- Next, from any directory (where you want to create your server), run node-server and provide the necessary inputs

```bash
yo node-server
```

- Thats's it. You are ready to go!!

#### Highlights of the micro-service scaffolding project:
- Option to integrate Express or Koa as the web application framework.
- Supports OpenAPI Specification V3.
- Auto generates stubs (controller & service classes) based on Open API Specification V3.
- Provides sample GET, PUT, POST request based on OpenAPI Specification V3.
- Provides out-of-the box '/health' API.

#### Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).
 
# About the generated microservice scaffolding

### Supports OpenAPI Specification V3
###### Path for your API definition:
```bash
/apiDefinition/openapi.json
```
### Auto generates stubs (controller & service classes) based on Open API Specification V3.
###### Step 1 - Define your own API:
```bash
/apiDefinition/openapi.json
```
###### Step 2 - Verify file content using Swagger UI ([Swagger Editor](https://editor.swagger.io/)):
###### Step 3 - Generate relevant controller and service classes:
```bash
npm run stub
```
###### Step 4 - Controller and service classes will be generated in:
```bash
/src/controllers
/src/services
```
### Provides sample GET, PUT, POST request based on OpenAPI Specification V3
###### As a ready example, try the '/sample' endpoint already defined in: 
```bash
/apiDefinition/openapi.json
```
###### Step 1 - Generate relevant controller and service classes for '/sample' endpoint:
```bash
npm run stub
```
###### Step 2 - Run the server locally:
```bash
npm run local-start
OR
npm run start
```
###### Step 3 - Verify GET '/sample' API:
```bash
http://localhost:3000/sample
```
### Provides out-of-the box health endpoint
###### Step 1 - Run the server locally:
```bash
npm run local-start
OR
npm run start
```
###### Step 2 - Verify application health:
```bash
http://localhost:3000/health
```
## License

MIT © [Kaustuv Mukherjee]()
