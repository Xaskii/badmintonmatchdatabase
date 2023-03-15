FROM node:16.16.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3003

CMD ["node", "index.js"]s