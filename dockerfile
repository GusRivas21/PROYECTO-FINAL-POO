#imagen a utilizar
FROM node:latest

#Ubicación donde se copiara el contenido
WORKDIR /home/main


#Copiar el package.json
COPY package*.json ./

#copiar el contenido de toda la carpeta por uso
COPY . .

EXPOSE 3002

# Instalación de paquetes
RUN npm install

#Configuración para que el archivo corra al nomas instalarse
CMD ["npm", "start"]

