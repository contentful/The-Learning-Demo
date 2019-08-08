#!/bin/bash
# Initial attempt to automate creating a new demo environment space

echo "Welcome to the Contentful Learning Demo installer!"
echo "To get started we need to ask you a few things, then we'll build a fresh demo for you on your laptop."
echo "What is your Contentful Space ID?"
read spaceid
echo "What is your space's Content Delivery API token?"
read cdatoken
echo "Let's start!"
echo "Deleting demo environment if it already exists"
contentful space environment delete --environment-id 'demo' --space-id $spaceid
echo "About to import content from contentful_exports/SEDemo.json"
contentful space import --content-file contentful_exports/SEDemo.json --space-id $spaceid
sed -i -e "s/space_id: ''/space_id: '$spaceid'/" src/components/config.js
sed -i -e "s/delivery_token: ''/delivery_token: '$cdatoken'/" src/components/config.js
echo "We're going to create a new environment named demo."
contentful space environment create --environment-id 'demo' --name 'Demo' --space-id $spaceid
# add locales here
echo "About to run npm install"
npm install
echo -e "To start your web server and demo type: npm run dev"
echo "To see the demo bring up a web browser and go to http://localhost:8080"

