#!/bin/sh

# wait for the process to stop
while systemctl -q is-active chain-maind.service
do
  echo "chain-maind active, wait 1 min"
  # wait 1 minute
  sleep 60
done

echo "start creating snapshot"
# retrieve halt-time from config
halt_time=$(grep halt-time ~/.chain-maind/config/app.toml | cut -d' ' -f 3)
# if halt-time is zero (config not set)
if [ "$halt_time" -eq 0 ]; then
  halt_time=$(date +%s)
fi
# format the halt-time
stop_at=$(date +%Y%m%d-%H%M --date=@"$halt_time")


remote_file="/home/dpierret/www/crypto-org-chain-mainnet-1.$stop_at.tar.lz4"
echo "sending $remote_file"
# create anonymous tar of data folder, compress locally with lz4,  send to storage server
tar --numeric-owner --owner=1000 --group=1000 -C /home/dpierret/.chain-maind -cf - data \
 | lz4 -B4 -9 - \
 | ssh store_serv -T -o Compression=no -x "cat > $remote_file"
ssh store_serv "/home/dpierret/checksum.sh $remote_file create"
ssh store_serv "chgrp www-data $remote_file*"
# store the database size
data_size=$(du -s ~/.chain-maind/data | cut -f1)
ssh store_serv "/home/dpierret/data_size.py add $data_size"

echo "send finished"
# HALT is next day (86400 sec / days)
HALT=$((halt_time + 86400))
# update the app.toml
sed -i.bak -E "s|^(halt-time[[:space:]]+=[[:space:]]+).*$|\1$HALT|" ~/.chain-maind/config/app.toml

# restart the chain process
sudo systemctl start chain-maind
