import requests
from bs4 import BeautifulSoup
import os
import json

# Scrape the opening name and the main line of moves from
# the wikipedia page "List of chess openings named after places"


# Delete previous results of scraping for a fresh start
existing_file = "scrape_results.txt"

if os.path.exists(existing_file):
    os.remove(existing_file)

# URL to the wikipedia page
url = "https://en.wikipedia.org/wiki/List_of_chess_openings_named_after_places"
# Request the contents of the page
response = requests.get(url)
# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(response.text, "html.parser")
# Retrieve all of the list item tags
lis = soup.find_all("li")

# Temporarily write the results to a text file
file = open("scrape_results.txt", "w")
for li in lis:
    file.write(li.text + "\n")
file.close()

# Open up the text file again to clean it
with open("scrape_results.txt", "r") as uncleaned:
    lines = uncleaned.readlines()

# Splice the unnecessary lines
lines = lines[259:448]

# Format into json and store in a file
with open("data.json", "w") as cleaned:
    resultjson = []
    for line in lines:
        for i, c in enumerate(line):
            if c.isdigit():
                break

        key = line[:i]
        # Remove the new line character
        value = line[i:-1]
        data = {key:value}
        resultjson.append(data)

    json.dump(resultjson, cleaned)

# Clean up
uncleaned.close()
cleaned.close()

