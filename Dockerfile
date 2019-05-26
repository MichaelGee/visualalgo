FROM node:11-alpine

# Create app directory
RUN mkdir -p /usr/src/sieve
WORKDIR /usr/src/sieve

# Install app dependencies
COPY package.json /usr/src/sieve/
RUN npm install

# Bundle app source
COPY src /usr/src/sieve/src
COPY webpack.config.js /usr/src/sieve/
COPY tsconfig.json /usr/src/sieve/

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
