# 01 - Build the Angular application
FROM node:14.19-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 02 - Get the compiled Angular application and run it
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/money_manager /usr/share/nginx/html
