FROM node:18.16.0-alpine

WORKDIR /opt/
COPY ./package.json ./yarn.lock ./

ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install --frozen-lockfile --unsafe-perm
WORKDIR /opt/
COPY ./ .

RUN yarn config set network-timeout 600000 -g && yarn install --frozen-lockfile --unsafe-perm
RUN yarn npx tsc

EXPOSE 3001

CMD ["yarn", "start"]
