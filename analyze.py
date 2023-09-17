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



songs = []

count = 0

for song in data['songs']:

    if song['Title'] in songs:
        print(f"HERE {song['Title']}")
    else:
        songs.append(song['Title'])

