
# BUILD STAGE (with Bun for speed)
FROM oven/bun:latest AS builder

# Set working directory
WORKDIR /app

# Copy package manifests first for caching
COPY bun.lock package.json vite.config.* tsconfig.* ./
COPY src ./src
COPY public ./public
COPY index.html ./

# Install dependencies
RUN bun install --frozen-lockfile

# Build production assets
RUN bun run build


# SERVE STAGE (NGINX)
FROM nginx:alpine AS runner

# Copy build output from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
