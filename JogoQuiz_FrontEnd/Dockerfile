# Etapa 1: Build do Angular
FROM node:21 AS build

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos do projeto para dentro do container
COPY . .

# Instalar dependências
RUN npm install

# Instalar o Angular CLI globalmente
RUN npm install @angular/cli -g

# Compilar o projeto Angular para produção
RUN ng build --prod

# Etapa 2: Servir com Nginx
FROM nginx:alpine

# Copiar os arquivos compilados para o diretório do Nginx
COPY --from=build /app/dist/JogoQuiz_FrontEnd /usr/share/nginx/html

# Expor a porta 80 para servir o conteúdo
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]

