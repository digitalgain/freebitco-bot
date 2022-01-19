# FREEBITCO-bot
The **FREEBITCO-bot** is a free script that automates rolls on the [FREEBITCO.IN](https://freebitco.in/?r=37400527) website; to increase your earnings visit [FREEBITCO-bot informative page](https://digitalgain.net/freebitco-bot.php).
#### PRE-REQUISITES
The **FREEBITCO-bot** runs on a NodeJS environment, you must install [**NodeJS**](https://nodejs.org/en/download/) to run the script. Open a terminal and run the following commands to ensure your environment is ready:
*   `node -v` must return the NodeJS version (version 11+ required)
*   `npm -v` must return the NPM version (version 6+ required)
#### INSTALL THE SCRIPT
*   Clone the repository to your computer
*   Open a terminal and navigate to the freebitco-bot folder
*   Launch the command `npm install` to install the script's dependencies
* 	Install dependencies Linux:
	`sudo apt-get update`
	`sudo apt-get install libgbm1 libgbm-dev gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget`


#### LAUNCH THE SCRIPT
Before launch the script you must to complete the following steps:
*   Login [FreeBitco.in website](https://freebitco.in/?r=37400527)
*   Disable 2FA protection (if this option is enabled, the script can't work)
*   Ensure you have at least 2500 FUN Token to disable captcha when roll numbers

Then you are ready to launch the script
*   Launch the command `node freebitco-bot.js -u your_username -p your_password` to run the script
*   `your_username` is your [FreeBitco.in](https://freebitco.in/?r=37400527) username/email
*   `your_password` is your [FreeBitco.in](https://freebitco.in/?r=37400527) password
* 	Stop execution with a CTRL + C
*	Edit file firstLogin.js and paste your activation link
* 	Run the firstLogin.js file with the command `node firstLogin.js` 
*	Launch the command `node freebitco-bot.js -u your_username -p your_password` to run the script

**The script don't save or send your username and password to third-party.**
#### DISCLAIMER
Using this free script you take full responsibility for its operation on your [FreeBitco.in](https://freebitco.in/?r=37400527) account