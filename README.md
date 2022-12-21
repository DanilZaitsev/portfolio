# Getting Started with Create React App

Portfolio project running as React App and also Backend sever.
There trick on the backend server for production application start.
Server up also react ui by 

## Available Scripts

In the project directory, using scripts:
index_server.js - to start backend server mostly for graphite and also to up React App build PROD version on port 80
deploy.sh - using in CI-CD pipeline to deploy app on the target server (docker-compose commands)

### `npm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs the backend server app

### `npm start`

Runs the backend server app only

### `npm run build`

Builds the app for production to the `build` folder.\

### Deployment

Push changes to the main branch and CI-CD github action will be activated

## CI-CD github action

1. Login docker - use DOCKER_PASS secret from github secrets
2. Build and push docker image - spotaddockers/portfolio:<tag>
3. Create pem file from secret PORTFOLIO_PEM, for the target deployment server
4. Set into docker-compose.yml file generated RELEASE_VERSION (tag)
5. Copy docker-compose.yml file to the target deployment server
6. Execute deployment commands from deploy.sh on the target deployment server
7. During deployment there full stop and clean docker images, because of low disk space


### Troubleshooting

## Check big size files for removing if out of disk space 
sudo du -aBm /var/lib/docker/volumes/ 2>/dev/null | sort -nr | head -n 10