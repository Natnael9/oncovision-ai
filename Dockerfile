# ==========================================
# Stage 1: Build Frontend (Vite + React)
# ==========================================
FROM node:20-slim AS frontend-builder

WORKDIR /app/client

# Install frontend dependencies
COPY client/package*.json ./
RUN npm install

# Build client production bundle
COPY client/ ./
RUN npm run build

# ==========================================
# Stage 2: Production Server (Node + Python)
# ==========================================
FROM python:3.11-slim

# Install Node.js 20 runtime into the Python image
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    gnupg \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python ML dependencies
COPY models/requirements.txt ./models/
RUN pip install --no-cache-dir -r models/requirements.txt

# Install Backend Node dependencies
COPY package*.json ./
COPY server/package*.json ./server/
RUN cd server && npm install --omit=dev

# Copy server code and ML models
COPY server/ ./server/
COPY models/ ./models/

# Copy compiled frontend from Stage 1 into client/dist
COPY --from=frontend-builder /app/client/dist ./client/dist

# Expose server port (default 5000, Render/Railway injects PORT env)
ENV PORT=5000
ENV NODE_ENV=production
EXPOSE 5000

# Start unified Express server
CMD ["node", "server/server.js"]

