#! /bin/bash
cd ../..
cd newsuncork
git pull origin master
yarn
yarn build
cd ..
cd newsuncork-server/current