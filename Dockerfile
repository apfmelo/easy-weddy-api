FROM node:18.16.0-alpine

WORKDIR /opt/app
COPY ./package.json ./yarn.lock ./

ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install --frozen-lockfile --unsafe-perm
COPY . .

RUN yarn build --outDir ./dist

EXPOSE 8080

CMD ["yarn", "start"]