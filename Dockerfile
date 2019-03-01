FROM node:11.10.1-alpine

# Install zero globally
RUN apk update && apk upgrade && apk add --no-cache python
RUN npm install --quiet --no-progress --unsafe-perm -g zero

# Add current folder to /app
ADD . /app

# Run zero in production mode
ENV NODE_ENV production
ENV API_URL http://localhost:1313

# Expose port
ENV PORT 1313
EXPOSE 1313

WORKDIR /app

CMD ["zero"]