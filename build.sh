#!/usr/bin/env bash

cd ./packages/website

yarn
yarn build

cd ../../

cp -r -f ./packages/website/public  ./
