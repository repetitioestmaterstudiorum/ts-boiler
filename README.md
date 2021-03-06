# ts-boiler

Boilerplate for simple backend services in TypeScript.

## develop

-   create a .env file for your secrets: `touch .env` (if secrets are needed)
-   develop: `npm run dev`
-   test: `npm test` or `npm run test:full` if you're feeling lucky
-   execute just one file: `npm run ts-node ...filepath and name...`

## deploy

-   there's a docker-compose file that will build an environment (using the Dockerfile) and the app (using the npm build script) and start the application with pm2 in no-daemon mode
-   theoretically, this could be deployed somewhere without much adaptation (fly.io, Heroku, ...)

## pm2 usage

In production, pm2 is used to start (and restart in case of a crash) the built app. The configuration is kept to a minimum. There is a pm2 npm script that enables running pm2 commands, such as `npm run pm2 list` or `npm run pm2 monit` without installing pm2 globally.

If you'd like to see your app on `app.pm2.io`, you can set the environment variables PM2_PUBLIC_KEY and PM2_SECRET_KEY (typically, in production only).

Logging: by default, pm2 is configured not to save log files (so you don't need to rotate or delete them). The log file directory for stdout and stderr can be adjusted by changing the CLI options `-o '/dev/null' -e '/dev/null'` in the npm start script to something that exists.
