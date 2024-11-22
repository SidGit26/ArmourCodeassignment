# Use the Node.js LTS image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app


COPY package*.json ./


RUN npm install

# Copy the application files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000


CMD ["node", "app.js"]

