#!/bin/bash

FULL_NAME=$(dscl . -read /Users/$USER/ RealName | sed -n 's/^ //g;2p')
USER_NAME=$(id -un)
DEVICE_NAME=$(scutil --get ComputerName)
HOST_NAME=$(scutil --get HostName)
PROFILE_PICTURE_DATA=$(dscl . -read /Users/$USER/ JPEGPhoto | tail -1 | xxd -r -p | base64)

echo '{"user": {"fullName": "'"$FULL_NAME"'", "userName": "'"$USER_NAME"'", "deviceName": "'"$DEVICE_NAME"'", "hostName": "'"$HOST_NAME"'", "profilePicture": "'"$PROFILE_PICTURE_DATA"'"}}'
