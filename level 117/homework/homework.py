
for i in range(1, 11):
    f = open(f"file_{i}.txt", "w")   
    f.write(f"This is file number {i}\n")
    f.close()

for i in range(1, 11):
    f = open(f"file_{i}.txt", "r")
    content = f.read()
    print(content)
    f.close()



f = open("file.txt", "w")

f.write("Hello.\n")
f.write("hi\n")

f.close()

f = open("file.txt", "r")
content = f.read()
print(content)
f.close()



import os
for i in range(1, 6):
    filename = f"temp_file_{i}.txt"
    with open(filename
, "w") as f:
        f.write(f"This is temporary file {i}\n")
    os.remove(filename)
    print(f"{filename} created and deleted.")
    if not os.path.exists(filename):
        print(f"{filename} successfully deleted.")
    else:
        print(f"Failed to delete {filename}.")


f = open("ludi.txt", "w")
f.write("2 ბაკალი ლუდი\n")
f.close()
f = open("ludi.txt", "r")
content = f.read()
print(content)

f.close()


for i in range(1, num_bottles + 1):
    with open(f"ludi_{i}.txt", "w") as f:
        f.write("1 beer\n")
    print(f"ludi_{i}.txt created with 1 bottle of beer.")


count = 1  

while True:
    num = int(input("how much whiskers? "))

    if num > 20:
        print("not tha much whiskers")
        break


    for i in range(1, num + 1):
        f = open(f"whisker_{count}_{i}.txt", "w")
        f.write(f"this is {i} lion whiskers{count}.\n")
        f.close()

    print(f"made {num} file (დათcountვლა #{count})")
    count += 1