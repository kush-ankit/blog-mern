FROM node:22-alpine
WORKDIR /app/client/
ENV PATH /app/client/node_modules/.bin:$PATH
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]