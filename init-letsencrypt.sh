#!/bin/bash

DOMAINS="-d angelsolutions.net"

echo "### Requesting Let's Encrypt certificate for $DOMAINS ..."
docker-compose run --rm certbot certonly --webroot -w /usr/share/nginx/html "$DOMAINS"

echo "### Reloading nginx ..."
docker-compose exec nginx nginx -s reload