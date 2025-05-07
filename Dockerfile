# Use NodeJS base image
FROM node:22-slim

# Set the environment variable NODE_ENV to production
ARG MY_NAME
ENV MY_NAME=$MY_NAME

# Create app directory in Docker
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies in Docker
RUN npm install

# Copy app from local environment into the Docker image
COPY . .

# Bind the port that the image will run on: Set the API’s port number
EXPOSE 8080

# Define the Docker image's behavior at runtime : Define Docker’s behavior when the image is run
CMD ["node", "server.js"]