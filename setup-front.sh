#! /bin/bash
cd ..
cd newsuncork
git pull origin master
npm install
npm run build
cd ..
cd newsuncork-server