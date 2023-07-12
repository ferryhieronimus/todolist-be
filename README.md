docker compose up -d
docker-compose -f redis-docker-compose.yml up -d

npx prisma migrate dev --name

kalo udah selesai
docker compose down
ctrl-c
