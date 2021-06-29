import sys
import os
import json
from time import strptime, strftime, gmtime

sync_folder = "/var/www/html"
size_history_data = {}

if len(sys.argv) == 3:
    new_size = int(sys.argv[1]) / (1024 * 1024)
    print("{0:.1f}GB".format(new_size))
    new_size_date = gmtime(int(sys.argv[2]))
else:
    exit(1)

try:
    with open(os.path.join(sync_folder, "json/history.json"), "r") as f:
        size_history_data = json.load(f)
except IOError:
    size_history_data = json.loads("""{
          "type": "line",
          "options": {
            "plugins": {
                    "title": {
                        "text": "Data folder size evolution"
                    }
            },
            "scales": {
              "y": {
                "beginAtZero": "true"
              }
            }
          },
          "data": {
            "labels": [],
            "datasets": [
              {
                "label": "Data size (GB)",
                "borderColor": "rgb(16, 20, 44)",
                "data": []
              }
            ]
          }
        }""")
size_date = strftime("%m/%d", new_size_date)
size_history_data["data"]["labels"].append(size_date)
size_history_data["data"]["datasets"][0]["data"].append("{0:.0f}".format(new_size))

with open(os.path.join(sync_folder, "json/history.json"), "w") as outfile:
    json.dump(size_history_data, outfile, indent=4)
