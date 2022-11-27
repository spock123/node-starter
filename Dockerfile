FROM node:18.12.1-bullseye-slim as base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Test
FROM base as test
ENV PORT=8100
ENV NODE_ENV=test
COPY . .
RUN npm run build:test
EXPOSE 8100
CMD [ "node", "dist/index.js" ]


# Production
FROM base as production
ENV PORT=8100
ENV NODE_ENV=production
COPY . .
RUN npm run build:production
EXPOSE 8100
CMD [ "node", "dist/index.js" ]