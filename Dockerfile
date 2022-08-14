FROM        node:12.9-alpine

RUN         mkdir /proj
WORKDIR     /proj

COPY        ./ nudge

WORKDIR     /proj/nudge


RUN         npm install && npm run build
EXPOSE      3000
CMD ["npm", "start"]