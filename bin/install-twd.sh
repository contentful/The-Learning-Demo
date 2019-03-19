#!/bin/bash
# Initial attempt to automate creating a new demo environment space

echo "Welcome to the Contentful Learning Demo installer!"
echo "To get started we need to ask you a few things, then we'll build a fresh demo for you on your laptop."
echo "What is your Contentful Space ID?"
read spaceid
echo "What is your space's Content Delivery API token?"
read cdatoken
echo "We're going to create a new environment named demo."
echo "Let's start!"
contentful space environment create --environment-id 'demo' --name 'Demo' --space-id '$spaceid'
# add locales here
echo pwd
echo "About to import content from contentful_exports/SEDemo.json"
contentful space import --content-file contentful_exports/SEDemo.json --space-id '$spaceid' --environment-id 'demo'
# run SED to edit config.js here
echo "About to run npm install"
npm install
echo "About to start server - go to http://localhost:8080 to see the demo"
npm run dev

