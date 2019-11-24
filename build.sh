#!/usr/bin/env bash

yarn bootstrap

cd ./packages/website

yarn build:web

cd ../../

cp -r -f ./packages/website/public  ./
