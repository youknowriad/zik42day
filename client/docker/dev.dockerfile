FROM node:0.12
RUN npm -g install gulp bower tsd
VOLUME /code
WORKDIR /code
EXPOSE 8000
ENTRYPOINT cp config/config.js.docker config/config.js \
  && tsd install && npm install && gulp build serve
