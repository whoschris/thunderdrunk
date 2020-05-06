#!/usr/bin/python3

# video editor reports video time in mm:ss:[frame count]. This script
# converts it to seconds. 

with open("times_mmssff.txt") as file:
    lines = file.read().splitlines()[1:]

time_final = []
for timestamp in lines:
    time_parts = timestamp.split(":")
    #print(time_parts)
    seconds = float(time_parts[0])*60 + float(time_parts[1]) + float(time_parts[2])/30
    time_final.append(seconds)

print(time_final)
