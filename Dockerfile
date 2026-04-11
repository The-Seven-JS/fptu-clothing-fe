FROM node:24.14.1-alpine3.23 AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine AS runner
RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80


