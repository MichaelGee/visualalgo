FROM node:11-alpine

WORKDIR /usr/src/sieve
COPY . ./
RUN yarn run build
EXPOSE 3000
CMD ["yarn", "start"]