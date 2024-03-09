# Docker-Basic
A simple Docker Project which contains Node.js server and backed up by mongoDB
## REQUIREMENTS
* npm
* Docker Desktop
  
### Install Dependencies
```
npm init -y
npm install express
npm install nodemon --save-dev
```

### Container Config(Development Environment)
```
#Bring up Server
docker-compose -f docker-compose.yml -f docker-compose.dev.yml -d up --build
#Bring down Server
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down 
```

This Repository is oriented towards Docker being used in Development Environment. Although there is a file for production env `docker-compose.prod.yml`, the file won't be used for now. This repository is actively maintained, and you can expect regular updates. Changes may include the addition of new files, enhancements to existing features, bug fixes, and more.
