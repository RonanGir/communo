# ---------- Stage 1 : build ----------
FROM maven:3-eclipse-temurin-25-alpine AS build

WORKDIR /communo_backend

# 1) Ce qui change rarement -> cache conservé
COPY mvnw .
COPY .mvn ./.mvn
COPY pom.xml .
RUN ./mvnw dependency:go-offline -B

# 2) Ce qui change souvent
COPY src ./src
RUN ./mvnw package -DskipTests

# ---------- Stage 2 : runtime ----------
FROM bellsoft/liberica-openjre-alpine:25-cds

WORKDIR /communo_backend

# utilisateur non-root : à créer ici (addgroup / adduser sous Alpine)
RUN addgroup -S communo_group && adduser -S communo_user -G communo_group

COPY --from=build --chown=communo_user:communo_group /communo_backend/target/*.jar backend.jar
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