MONGODB_IMAGE="mongodb/mongodb-community-server"
MONGODB_TAG="7.0-ubuntu2204"
CONTAINER_NAME="mongodb"

# Root credentials
ROOT_USER="root-user"
ROOT_PASSWORD="root-password"

# Key-value credentials for the database
KEY_VALUE_DB='key-value-db'
KEY_VALUE_USER="key-value-user"
KEY_VALUE_PASSWORD="key-value-password"

#CONECTIVITY
LOCALHOST_PORT=27017
CONTAINER_PORT=27017

#NETWORK
NETWORK_NAME="key-value-net"

#VOLUME
VOLUME_NAME="key-value-data"
CONTAINER_VOLUME_PATH="/data/db"

docker run --rm -d --name $CONTAINER_NAME \
    -e MONGO_INITDB_ROOT_USERNAME=$ROOT_USER \
    -e MONGO_INITDB_ROOT_PASSWORD=$ROOT_PASSWORD \
    -e KEY_VALUE_DB=$KEY_VALUE_DB \
    -e KEY_VALUE_USER=$KEY_VALUE_USER \
    -e KEY_VALUE_PASSWORD=$KEY_VALUE_PASSWORD \
    -p $LOCALHOST_PORT:$CONTAINER_PORT \
    -v $VOLUME_NAME:$CONTAINER_VOLUME_PATH \
    -v ./db-config/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro \
    --network $NETWORK_NAME \
    $MONGODB_IMAGE:$MONGODB_TAG