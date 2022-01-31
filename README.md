Made by CCU: Cryptowallets coding utilities.


░█████╗░░█████╗░██╗░░░██╗██╗
██╔══██╗██╔══██╗██║░░░██║╚═╝
██║░░╚═╝██║░░╚═╝██║░░░██║░░░
██║░░██╗██║░░██╗██║░░░██║░░░
╚█████╔╝╚█████╔╝╚██████╔╝██╗
░╚════╝░░╚════╝░░╚═════╝░╚═╝

░█████╗░██████╗░██╗░░░██╗██████╗░████████╗░█████╗░░██╗░░░░░░░██╗░█████╗░██╗░░░░░██╗░░░░░███████╗████████╗░██████╗
██╔══██╗██╔══██╗╚██╗░██╔╝██╔══██╗╚══██╔══╝██╔══██╗░██║░░██╗░░██║██╔══██╗██║░░░░░██║░░░░░██╔════╝╚══██╔══╝██╔════╝
██║░░╚═╝██████╔╝░╚████╔╝░██████╔╝░░░██║░░░██║░░██║░╚██╗████╗██╔╝███████║██║░░░░░██║░░░░░█████╗░░░░░██║░░░╚█████╗░
██║░░██╗██╔══██╗░░╚██╔╝░░██╔═══╝░░░░██║░░░██║░░██║░░████╔═████║░██╔══██║██║░░░░░██║░░░░░██╔══╝░░░░░██║░░░░╚═══██╗
╚█████╔╝██║░░██║░░░██║░░░██║░░░░░░░░██║░░░╚█████╔╝░░╚██╔╝░╚██╔╝░██║░░██║███████╗███████╗███████╗░░░██║░░░██████╔╝
░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░░░╚═╝░░░░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝░░░╚═╝░░░╚═════╝░

░█████╗░░█████╗░██████╗░██╗███╗░░██╗░██████╗░
██╔══██╗██╔══██╗██╔══██╗██║████╗░██║██╔════╝░
██║░░╚═╝██║░░██║██║░░██║██║██╔██╗██║██║░░██╗░
██║░░██╗██║░░██║██║░░██║██║██║╚████║██║░░╚██╗
╚█████╔╝╚█████╔╝██████╔╝██║██║░╚███║╚██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝░╚═════╝░

██╗░░░██╗████████╗██╗██╗░░░░░██╗████████╗██╗███████╗░██████╗
██║░░░██║╚══██╔══╝██║██║░░░░░██║╚══██╔══╝██║██╔════╝██╔════╝
██║░░░██║░░░██║░░░██║██║░░░░░██║░░░██║░░░██║█████╗░░╚█████╗░
██║░░░██║░░░██║░░░██║██║░░░░░██║░░░██║░░░██║██╔══╝░░░╚═══██╗
╚██████╔╝░░░██║░░░██║███████╗██║░░░██║░░░██║███████╗█████╔╝
░╚═════╝░░░░╚═╝░░░╚═╝╚══════╝╚═╝░░░╚═╝░░░╚═╝╚══════╝╚═════╝░

# Get started!

- For windows
First (if you already have nodejs & npm installed you can skip this step.) go to https://nodejs.org/dist/v16.13.2/node-v16.13.2-x64.msi and install that. This will install nodejs and npm. Now you can go ahead and run: "npm init -y". Then you will have to install the required packages: "npm install discord.js" and "npm install fs". Now you can finally run node src/index.js. Have fun with your new bot! (Please dont forget to add your bot token, prefix and embed color to the config.json file!)

- For linux
First (if you already have nodejs & npm installed you can skip this step.) run: "sudo apt update". Once you are done with this run: "curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -" Once that is completed you can finally run: "sudo apt install -y nodejs" to confirm that you installed the right version run: node-v to check the current node version. (Out put should be v16). Now you can go ahead and run: "npm init -y". Then you will have to install the required packages: "npm install discord.js" and "npm install fs" and "npm install pm2 -g". Now if everything is done properly you will be able to run: "pm2 start src/index.js" this will automatically put your bot online 24/7. If you dont want it to run 24/7 just run: "node src/index.js". (Please dont forget to add your bot token, prefix and embed color to the config.json file!)



CBG v.0.0.1 PRE-RELEASE