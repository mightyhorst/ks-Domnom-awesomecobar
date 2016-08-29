#!/bin/bash

sudo git clone https://github.com/mitni455/ks-Domnom-awesomecobar /home/Domnom/ks-Domnom-awesomecobar
sudo chmod -R 777 /home/Domnom/ks-Domnom-awesomecobar
sudo docker-compose -f /home/Domnom/ks-Domnom-awesomecobar/docker-compose.yml up -d 
sudo docker exec ksdomnomawesomecobar_frontend_1 /var/www/angular/run.sh
sudo docker exec ksdomnomawesomecobar_workspace_1 /var/www/laravel/run.sh