// Beispiel für die Kommunikation mit dem Backend
fetch('http://backend-service:3000/data')
  .then(response => response.json())
  .then(data => console.log(data));
