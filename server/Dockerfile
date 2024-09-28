FROM node:22
WORKDIR /app/server
COPY package*.json .
RUN npm install --silent
COPY . .
EXPOSE 4000
CMD ["npm", "start"]