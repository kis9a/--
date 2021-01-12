FROM node:12-slim
WORKDIR /app
COPY package*.json ./
ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NOWARNINGS yes
RUN yarn
ENV NODE_ENV=development
CMD ["yarn", "run", "serve"]
EXPOSE 8080
