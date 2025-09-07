FROM node:18-alpine

WORKDIR /app

COPY packages*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run", "dev"]