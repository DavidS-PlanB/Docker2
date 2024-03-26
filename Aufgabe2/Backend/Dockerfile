# Verwenden eines vorhandenen Docker-Images als Basis
FROM node:alpine

# Setzen des Arbeitsverzeichnisses innerhalb des Containers
WORKDIR /app

# Kopieren der Datei ins Arbeitsverzeichnis des Containers
COPY server.js /app


# Exponieren des Ports, auf dem der Node.js-Server läuft
EXPOSE 3000

Run npm install express
# Starten des Node.js-Servers beim Start des Containers
CMD ["node", "server.js"]
