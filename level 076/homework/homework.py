#1
def largestfromall(a, b, c):
    largest=b
    if a>largest:
        largest=a
    if b>largest:
        largest=b
    return largest

print(largestfromall(10, 25, 15))
#2
def word1(word):
    vowels="uoiea"
    total=0
    for i in word.lower():
        if i in vowels:
            total += 1
    return total

print(word1("Mary"))
print(word1("Elephant"))
print(word1("Ear"))
#3
name="Yves Saint Lourent"

if name==name[::-1]:
    print(f"{name} is palindrome")
else:
    print(f"{name} isn't palindrome")
#4
def reverse(name1):
    return name1[::-1]
print(reverse("welcome"))
#5
# The split() method splits a string into a list.
# You can specify the separator, default separator is any whitespace.
# Note: When maxsplit is specified, the list will contain the specified number of elements plus one.