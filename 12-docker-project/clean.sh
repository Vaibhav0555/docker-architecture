source .env.db
source .env.network
source .env.volume  

if  [ "$(docker ps -aq -f name=$DB_CONTAINER_NAME)" ]; then
    echo "Stopping and removing container $DB_CONTAINER_NAME..."
    docker stop $DB_CONTAINER_NAME
else
    echo "A container with the name $DB_CONTAINER_NAME does not exist. skipping container deletion"
fi

if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ]; then
    echo "Deleting volume $VOLUME_NAME..."
    docker volume rm $VOLUME_NAME
else
    echo "A volume with the name $VOLUME_NAME already deleted. skipping volume creation"
fi

if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ]; then
    echo "Deleting network $NETWORK_NAME..."
    docker network rm $NETWORK_NAME
else
    echo "A network with the name $NETWORK_NAME already deleted. skipping network creation"
fi