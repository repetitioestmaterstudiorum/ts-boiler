# stage to build js from ts and install node_modules for alpine
FROM node:16-alpine3.14 as builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# stage to run the app using pm2
FROM node:16-alpine3.14
ENV NODE_ENV production

WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json .

USER node
CMD ["npm", "start"]