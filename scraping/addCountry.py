import json

# Sort each entry within the current json file
# Use command line input to specify the country code group it belongs to
with open("data.json", "r") as file:
    result = {}
    data = json.load(file)
    for entry in data:
        print(entry)
        countryCode = input()
        if countryCode in result:
            result[countryCode].append(entry)
        else:
            result[countryCode] = [entry]


print(result)

with open("updatedData.json", "w") as newfile:
    json.dump(result, newfile)

