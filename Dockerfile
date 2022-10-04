FROM node:16-alpine as builder
WORKDIR /app
COPY package* ./
RUN npm ci
COPY ./ ./

RUN npm run build

ENV NODE_ENV development

EXPOSE 300

CMD ["npx", "serve", "build"]