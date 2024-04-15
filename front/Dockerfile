FROM node:18

# Criação do diretório de trabalho do aplicativo
WORKDIR /app

COPY package.json /app

RUN apt-get update && \
    apt-get install -y openssl

COPY . /app

CMD bash -c "yarn install && yarn start"
