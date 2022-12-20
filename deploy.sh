#!/bin/bash
echo $1
cd /home/ubuntu/portfolio
docker-compose stop
docker-compose rm -f
docker images|grep portfolio|grep -v $1|awk -F'       ' '{print "docker rmi "$1":"$2}'|bash
docker-compose up -d