# ---------- Stage 1 : Build Frontend (Angular) ----------
FROM node:22-alpine AS frontend-build

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

# ---------- Stage 2 : Build Backend (Spring Boot) ----------
FROM maven:3-eclipse-temurin-25-alpine AS backend-build

WORKDIR /communo_backend

# 1) Dépendances Maven (cache conservé)
COPY backend/mvnw .
COPY backend/.mvn ./.mvn
COPY backend/pom.xml .
RUN ./mvnw dependency:go-offline -B

# 2) Code source backend + injection des fichiers statiques Angular
COPY backend/src ./src
COPY --from=frontend-build /app/frontend/dist/frontend/browser ./src/main/resources/static

RUN ./mvnw package -DskipTests

# ---------- Stage 3 : Runtime ----------
FROM bellsoft/liberica-openjre-alpine:25-cds

WORKDIR /communo_backend

RUN addgroup -S communo_group && adduser -S communo_user -G communo_group

COPY --from=backend-build --chown=communo_user:communo_group /communo_backend/target/*.jar backend.jar
USER communo_user

ENV JAVA_TOOL_OPTIONS="\
  -XX:+UseSerialGC \
  -Xms64m \
  -Xmx256m \
  -XX:MaxMetaspaceSize=96m \
  -XX:ReservedCodeCacheSize=48m \
  -Xss256k \
  -XX:MaxDirectMemorySize=32m \
  -XX:+ExitOnOutOfMemoryError"

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "backend.jar"]