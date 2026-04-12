#!/usr/bin/bash

git status
git add .
git status
read -p "Your commit name: " commit_name
git commit -m "${commit_name}"
git status
git push
