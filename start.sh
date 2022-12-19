#!/bin/bash
cd /app & npm start & P1=$! & node ./index_server.js & P2=$! & wait $P1 $P2