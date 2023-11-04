#!/bin/bash

# Find the process ID (PID) of the process running on port 3000
pid=$(lsof -t -i :3000)

if [ -n "$pid" ]; then
  # If a process is found, kill it
  kill -9 "$pid"
  echo "Process with PID $pid killed."
else
  echo "No process found on port 3000."
fi

cd /home/SamLProgrammer/church-billboard/front/Church-BillBoard-Front

# Install npm dependencies
npm i

# Start the React app with npm run dev
npm start
