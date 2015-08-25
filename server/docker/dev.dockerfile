FROM node:0.12
VOLUME /code
WORKDIR /code
EXPOSE 4444
ENTRYPOINT cp src/config/config.js.docker src/config/config.js \
  && npm install \
  && node src/index.js
