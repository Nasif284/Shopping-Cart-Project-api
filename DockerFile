FROM node:alpine3.18
WORKDIR /app
COPY package*.json ./
RUN npm Install
COPY . .
EXPOSE 8000
CMD [ "node","index.js" ]


