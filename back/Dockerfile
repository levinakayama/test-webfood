FROM node:18.19.0
RUN apt update && apt install -y zip unzip

# Criação do diretório de trabalho do aplicativo
WORKDIR /app

COPY . .

CMD bash -c "unzip node_modules.zip && sleep 10 && node app.js"
