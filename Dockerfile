FROM node:16.13.0-alpine as build

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i

WORKDIR /app/server
COPY ./server/package.json ./
RUN npm i
WORKDIR /app
COPY . .

RUN npm run build


FROM node:16.13.0-alpine
WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json
COPY --from=build /app/build ./build
COPY --from=build /app/server ./server
COPY --from=build /app/src/config.json ./src/config.json
COPY --from=build /app/index_server.js ./index_server.js

RUN mkdir -p logs
EXPOSE 3000
CMD ["npm", "start"]


## production environment
#FROM nginx:stable-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# docker run --rm --name folio -d -p 8080:3000 -p 81:80 -p 3004:3004 spotaddockers/portfolio:v9