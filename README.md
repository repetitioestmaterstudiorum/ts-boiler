# ts-boiler

Boilerplate for simple backend services in TypeScript.

## develop

-   create a .env file for your secrets: `touch .env`
-   develop: `npm run dev`
-   test: `npm run test` or `npm run test:watch`. Both will lint and run tsc first
-   execute just one file: `npm run ts-node ...filepath and name...`

## deploy

-   there's a docker-compose file that will build an environment (using the Dockerfile) and the app (using the npm build script) and start the application with pm2 in no-daemon mode
-   theoretically, this could be deployed somewhere without much adaptation (fly.io, Heroku, ...)
