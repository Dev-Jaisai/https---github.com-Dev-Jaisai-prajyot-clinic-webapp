# STAGE 1: Build Angular
FROM node:18-alpine AS builder

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli@19

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the app (Corrected Command)
RUN npm run build -- --configuration=production

# STAGE 2: Serve with Nginx
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist/doctors-website/browser /usr/share/nginx/html

# Copy Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]