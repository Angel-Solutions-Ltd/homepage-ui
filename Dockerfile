# Use node image as base
FROM node:14 as builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy source files
COPY . .

# Build React app
RUN yarn build

# Use nginx as base image
FROM nginx:alpine

# Copy nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose ports
EXPOSE 80
EXPOSE 443