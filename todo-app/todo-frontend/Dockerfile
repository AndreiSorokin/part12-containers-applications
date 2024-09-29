# Stage 1: Build the frontend with Node.js
FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

# Install dependencies
RUN npm install

# Build the project for production
RUN npm run build

# Stage 2: Serve the built frontend with Nginx
FROM nginx:1.25-alpine

# Copy the built frontend from the build stage to the Nginx html directory
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 to access the frontend
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
