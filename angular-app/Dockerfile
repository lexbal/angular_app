FROM node:14.17

WORKDIR /usr/src/app/angular-app

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4201

CMD ["npm", "start"]