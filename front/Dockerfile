FROM node:18
RUN apt update && apt install -y zip unzip
RUN npm install -g ember-cli

# Criação do diretório de trabalho do aplicativo
WORKDIR /app

COPY . .


CMD bash -c "unzip node_modules.zip && npm start"
