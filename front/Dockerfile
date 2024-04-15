FROM node:18.19.1

RUN npm install -g ember-cli

# Criação do diretório de trabalho do aplicativo
WORKDIR /app

COPY . /app


CMD bash -c "npm install && npm start"
