#! /bin/bash
docker stop my-fe-helper-app
docker rm my-fe-helper-app
docker rmi kvnkrruk/ha_automationhelper_fe
sudo docker run -t -d -p 3000:3000 --name my-fe-helper-app kvnkrruk/ha_automationhelper_fe
