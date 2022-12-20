#!/bin/bash
cd portfolio
docker-compose stop
docker-compose rm
docker images|grep portfolio|grep -v ${{ env.RELEASE_VERSION }}|awk -F'       ' '{print "docker rmi "$1":"$2}'|bash
docker-compose -d up