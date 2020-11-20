FROM node:14.13.1-alpine3.10

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
ENV MONGODB_URI mongodb://mongo:27017/ra
RUN npm run predev
EXPOSE 8080
CMD [ "npm", "run", "pm2" ]
