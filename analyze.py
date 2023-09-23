# import json 

# with open("fav_covers.json", 'r') as file:
#     data = json.load(file)

# count = 0

# for song in data['FavoriteCovers']:
#     print(song)
#     count += 1

# print(count)


import json

with open("/Users/michaeltotaro/LivestreamDirectory/database/song_list.json", 'r') as file:
    data = json.load(file)


with open("fav_covers.json", 'r') as file:
    fav_data = json.load(file)


app1 = []
count = 0
for song in data['songs']:
    for j in range(len(fav_data["FavoriteCovers"])):
        if song['Title'] == fav_data["FavoriteCovers"][j]['Song'].rsplit(" by ", 1)[0]:
            appearanceList = song['Appearances'].split(",")
            linkList = song['Links'].split(" , ")

            for i in range(len(appearanceList)):
                if appearanceList[i] == fav_data["FavoriteCovers"][j]['Appearance']:
                    print(f"{song['Title']}: ", end="")
                    print(linkList[i])
                    count += 1
                    fav_data["FavoriteCovers"][j]['Link'] = linkList[i]
                    app1.append(fav_data["FavoriteCovers"][j]['Appearance'])

print(count)

other_count = 0 
app2 = []
for fav_song in fav_data["FavoriteCovers"]:
    if (fav_song['Appearance'] != "" and fav_song['Appearance'][-1].isdigit()) or "Solo" in fav_song['Appearance']:
        other_count += 1
        app2.append(fav_song['Appearance'])

print(other_count)

# Step 3: Write the modified data structure back to the JSON file
with open('fav_covers.json', 'w') as file:
    json.dump(fav_data, file, indent=4, ensure_ascii=False)


print(f"A still and silent mountain link: https://youtu.be/o_u2RWvoGLU?si=yA5415-yGb_AtwZC&t=1718")


