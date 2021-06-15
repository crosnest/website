import os
import json
from time import strptime, strftime

sync_folder = "/home/dpierret/www"
sync_file = []
#json.load('/home/dpierret/www/sync.json')
files_list = os.listdir(sync_folder)

for file in files_list:
    # it's not the json nor a checksum file
    if file != "sync.json" and "checksum" not in file:
        # the checksum file exist
        if ".".join([file, "checksum"]) in files_list:
            print(f"file : {file}")
            file_date = strptime(file.split('.')[1], "%Y%m%d-%H%M")
            file_size = os.path.getsize("/".join([sync_folder, file]))/(1024*1024*1024)
            sync_file.append({'file': file,
                              'network': "mainnet" if "crypto-org-chain-mainnet-1" in file else "testnet",
                              'link': f"<a href='https://quicksync.cros-nest.com/{file}'>Download</a>",
                              'checksum': f"<a href='https://quicksync.cros-nest.com/{file}.checksum'>Checksum</a>",
                              'size': "{0:.2f}GB".format(file_size),
                              'date': strftime("%c", file_date)
                              }
                             )

sorted_file_list = sorted(sync_file, key=lambda k: strptime(k['date'], "%c"), reverse=True)
for file in sorted_file_list[2:]:
    os.remove("/".join([sync_folder, file["file"]]))
    os.remove("/".join([sync_folder, file["file"]+".checksum"]))


with open(os.path.join(sync_folder, "sync.json"), "w") as outfile:
    json.dump(sorted_file_list[:1], outfile, indent=4)