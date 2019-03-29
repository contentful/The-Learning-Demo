# Contentful Learning Demo

## Overview

The Contentful Learning Demo is a fork of The Winning Demo. We've attempted to make it easy to for anyone in the company to be able to install this demo locally on their laptop. 

Because the demo uses content from the `demo` environment you can simply delete the `demo` environment after giving a demo where you have made content changes, create a new `demo` environment, and you should have a clean set of new content for your demo.

## Steps to run:

### Mac Users

1. Make sure you have [Node.js](https://blog.teamtreehouse.com/install-node-js-npm-mac)installed on your Mac. Double check it got installed by checking what version you are on `node --version`.
2. Install the Contentful CLI on your laptop - `npm install -g contentful-cli`.
3. Create/select a new Contentful space that supports 2 or more environments.
4. Start the Terminal application.
5. Download a Zip file of the demo repo from [here](https://drive.google.com/open?id=1HuDzmlksLzz4ZQ3tEnL0xRPIDIru-N_U).
6. Create a new directory for the demo on your laptop `mkdir tld`
7. Go to the new directory `cd tld`
8. Double-click on the Zip file to uncompress it and move it to your tld directory `cp -rf ~/Downloads/The-Learning-Demo ~/tld`.
9. Run the install script: `bin/install-twd.sh` in a terminal window. This script will prompt you for your Contentful space ID and CDA token, then import the demo's content model and content, and finally create a new "demo" environment which the demo site uses.
10. Go to API keys in the Contentful app, scroll to the bottom, check the checkbox for demo and hit Save at the top. 
11. Open browser to http://localhost:8080. If you don't see any content after choosing Paradise Ocean Beach resorts it's probably because there was a problem creating your demo environment - such as when you use a space that only supports one environment.
12. To stop the web site from running on your laptop just type `CNTL-c` in your terminal window.
13. To start up the demo later open a terminal window, `cd` to the directory where you installed the demo and type `npm run dev`.

### Windows Users

1. Make sure you have [Node.js](https://blog.teamtreehouse.com/install-node-js-npm-windows) installed on your Windows laptop. Double check it got installed by checking what version you are on `node --version`.
2. Install the Contentful CLI on your laptop - `npm install -g contentful-cli`.
3. Create/select a new Contentful space that supports 2 or more environments.
4. Install the [cygwin](https://cygwin.com/install.html) app so you can run a BASH script.
5. Follow these [instructions](https://www.question-defense.com/2009/04/01/how-to-copy-and-paste-from-the-cygwin-bash-prompt) to enable copy and paste in cygwin.
6. Download a Zip file of the demo repo from [here](https://drive.google.com/open?id=1HuDzmlksLzz4ZQ3tEnL0xRPIDIru-N_U).
7. Uncompress the Zip file by (need help from Meghan here).
8. Create a new directory for the demo on your laptop `mkdir tld`
9. Go to the new directory `cd tld`
10. Run the install script: `bin/install-twd.sh` in your cygwin window. This script will prompt you for your Contentful space ID and CDA token, then import the demo's content model and content, and finally create a new "demo" environment which the demo site uses.
11. Go to API keys in the Contentful app, scroll to the bottom, check the checkbox for demo and hit Save at the top. 
12. Open browser to http://localhost:8080. If you don't see any content after choosing Paradise Ocean Beach resorts it's probably because there was a problem creating your demo environment - such as when you use a space that only supports one environment.
13. To stop the web site from running on your laptop just type `CNTL-c` in your cygwin window.
14. To start up the demo later open a terminal window, go to the directory where you installed the demo and type `npm run dev`.


## Content model

![Content model simple](./winning-demo-content-model-simple.png)

![Content model full](./winning-demo-content-model.png)
