# Node.js 22.23.5 carries the 2026-11-11 Node.js security release. Pinned by
# digest so a stale cached tag cannot bring back an unfixed build.
FROM node:22.23.5-alpine@sha256:1314fb30ec37592d5845e5a160d522c0e680972aa534549940b8d73bde88481a

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Make port 3000 available outside the container
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]