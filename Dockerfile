FROM node:18-alpine

COPY public/ /portfolio/public/
COPY src/ /portfolio/src/
COPY package.json /portfolio/
COPY package-lock.json /portfolio/
COPY tsconfig.json /portfolio/

WORKDIR /portfolio/

RUN npm install

CMD ["npm", "start"]
