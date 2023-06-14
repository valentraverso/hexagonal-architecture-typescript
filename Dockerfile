# Base Image
FROM node:18

# Set Working Directory
WORKDIR /home/node/app

# Install and cache app dependencies
COPY package.json .

USER node

RUN npm i

# Add app
COPY --chown=node:node ./ .

EXPOSE 3000

# Start app
CMD ["npm", "run", "dev"]