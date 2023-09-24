# Stage 1: Compile and Build angular codebase

FROM node:16-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY  . .

RUN npm run build --prod


# Stage 2: Serve app with nginx server

FROM nginx:latest as nginx

COPY ./nginx/nginx.conf  etc/nginx/nginx.conf 

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/smart-learner-prototype /usr/share/nginx/html