FROM node:18

WORKDIR /app

COPY cafe-front/ ./

CMD ["yarn", "dev"]