# Contentful Learning Demo

## Steps to run:

The below steps are for Mac users. If you are on Windows you will need to use an application like Putty in place of the Mac terminal application.

1. Make sure you have Node.js installed on your [Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac) or [Windows](https://blog.teamtreehouse.com/install-node-js-npm-windows) laptop.
2. Create/select a new Contentful space that supports 2 or more environments.
3. Start the Terminal application
4. Create a new directory for the demo on your laptop `mkdir tld`
5. Go to the new directory `cd tld`
6. Clone this repo to that directory `git clone git@github.com:contentful/The-Learning-Demo.git .`
7. Run the install script: `bin/install-tld.sh` in a terminal window. This script will prompt you for your Contentful space ID and CDA token, then import the demo's content model and content, and finally create a new "demo" environment which the demo site uses.
8. Go to API keys in the Contentful app, scroll to the bottom, check the checkbox for demo and hit Save at the top. 
9. Open browser to http://localhost:8080. If you don't see any content after choosing Paradise Ocean Beach resorts it's probably because there was a problem creating your demo environment - such as when you use a space that only supports one environment.
10. To stop the web site from running on your laptop just type `CNTL-c` in your terminal window.
11. To start up the demo later open a terminal window, `cd` to the directory where you installed the demo and type `npm run dev`.


## Content model

![Content model simple](./winning-demo-content-model-simple.png)

![Content model full](./winning-demo-content-model.png)
