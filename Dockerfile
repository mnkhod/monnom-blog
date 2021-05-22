# base image
FROM node:12.14.1

# create & set working directory
RUN mkdir -p /app
WORKDIR /app

# copy source files
COPY . /app

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start