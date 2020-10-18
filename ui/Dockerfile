FROM node:14.14.0

RUN mkdir /alcatraz

WORKDIR /alcatraz
COPY . /alcatraz

RUN yarn install

EXPOSE 3000
CMD sh -c "yarn build && yarn start"
