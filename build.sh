#!/usr/bin/env bash

cd ./packages/website

yarn
yarn build:web

cd ../../

cp -r -f ./packages/website/public  ./
