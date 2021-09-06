## Commands

run `ssh ssh root@137.184.80.14`/ ssh ssh root@137.184.80.14

run `pm2 start "ng serve --host 0.0.0.0" --name frontend`
run `pm2 save2`

run `pm2 start "index.js" --name backend`
run `pm2 save2`

run `sudo systemctl restart nginx`  to enable your new nginx config.</li>
run `pm2 save` to schedule your code to run at launch.</li>

run `sudo ufw status`  view firewall setting and make any changes you need. By default, only SSH/SFTP (port 22), HTTP (port 80),, , HTTPS (port 443) and NodejsServer (port 3001) are open
run `sudo ufw disable` disable this firewall by calling

