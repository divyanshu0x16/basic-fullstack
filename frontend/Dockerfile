FROM node:14 as build

WORKDIR /code

COPY package.json package.json  
COPY package-lock.json package-lock.json 

#similar to npm install. writes to package.json are frozen. 
#meant to be used in automated environments, test platforms etc.
RUN npm ci --production 

COPY . . 

RUN npm run build

# NGINX Web Server
FROM nginx as prod 
#Copy to default serving location of nginx
COPY --from=build /code/build /usr/share/nginx/html
#Default nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]