# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Optional: Gemini key at build time (vite inlines it). Leave empty for static clinic site only.
ARG GEMINI_API_KEY=
ENV GEMINI_API_KEY=${GEMINI_API_KEY}

RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
