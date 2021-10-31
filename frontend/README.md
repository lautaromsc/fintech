## Commands

run `ssh ssh root@137.184.80.14`/ ssh ssh root@137.184.80.14

run `pm2 start "ng serve --prod --host 0.0.0.0" --name frontend`
run `pm2 save2`

run `pm2 start "index.js" --name backend`
run `pm2 save2`

run `sudo systemctl restart nginx`  to enable your new nginx config.</li>
run `pm2 save` to schedule your code to run at launch.</li>

run `sudo ufw status`  view firewall setting and make any changes you need. By default, only SSH/SFTP (port 22), HTTP (port 80),, , HTTPS (port 443) and NodejsServer (port 3001) are open
run `sudo ufw disable` disable this firewall by calling


pgAdmin web: lautaromsc/123456

sudo lsof -i :3000 --ver el puerto 3001
kill -9 {PID}


run `ng g module modules/reportes --route reportes --module app.module` to create a module with their routing and import dynamically into appmodule



The login and password are stored in the NODE_USER* values you see when you call  cat /root/.digitalocean_passwords

map the port your app runs on to an HTTP URL by running `nano /etc/nginx/sites-available/default` and adding another location. Us
e the existing entry for the port 3000 "hello" app as a basis. Call `sudo systemctl restart nginx` to enable your new nginx config.




## Angular commands

`ng g module modules/reportes --route reportes --module app.module`