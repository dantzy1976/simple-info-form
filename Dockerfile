FROM node:23-bookworm-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN ln -sf /usr/share/zoneinfo/Europe/Bucharest /etc/localtime
RUN dpkg-reconfigure tzdata

WORKDIR /home/node

COPY src/ .

RUN chown -R node:node /home/node/

USER node

RUN npm ci

CMD ["/usr/local/bin/npm", "run", "dev"]

EXPOSE 8080
