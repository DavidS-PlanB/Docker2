# Verwenden eines vorhandenen Docker-Images als Basis
FROM node:alpine

# Setzen des Arbeitsverzeichnisses innerhalb des Containers
WORKDIR /app

# Kopieren der Datei ins Arbeitsverzeichnis des Containers
COPY script.js /app

#EXPOSE 3000
RUN npm install express 

# Starten des Node.js-Servers beim Start des Containers
CMD ["node", "script.js"]
