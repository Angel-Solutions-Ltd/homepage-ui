FROM node:latest AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
# Copy app files
COPY . .
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:latest as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Remove the default NGINX configuration (if any) and copy custom NGINX config
RUN rm /etc/nginx/conf.d/default.conf
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d
# Create directory for SSL certificates
RUN mkdir -p /etc/nginx/live
# Set permissions and ownership for SSL certificate directory
RUN chown -R root:root /etc/nginx/live && \
    chmod -R 600 /etc/nginx/live && \
    find /etc/nginx/live -type d -exec chmod 700 {} \;
# Copy SSL certificate files
COPY /etc/letsencrypt/live /etc/nginx/live
# Expose port
EXPOSE 443
# Start nginx
CMD ["nginx", "-g", "daemon off;"]