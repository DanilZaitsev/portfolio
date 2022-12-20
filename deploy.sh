#!/bin/bash
echo $1
cd /home/ubuntu/portfolio
docker-compose stop
docker-compose rm -f
docker images -a | grep "portfolio"| awk '{print $3}'| xargs docker rmi
docker-compose up -d