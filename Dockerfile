FROM node:20-alpine

RUN yarn global add serve

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3010

CMD ["serve", "-s", "build"]
