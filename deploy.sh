#!/bin/bash

cd ./dist
git init
git add .
git commit -m 'Deploy'
git remote add origin git@github.com:kaluabentes/kaluabentes.github.io.git
git push origin master --force
