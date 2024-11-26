# Etapa 1: Build do Angular
FROM node:21

WORKDIR /app

COPY . .

RUN npm install

# Compila o front-end para produção
RUN npm install @angular/cli -g

EXPOSE 4200

# Comando para rodar o servidor Nginx
CMD ["ng", "serve", "--host", "0.0.0.0"]
