
data = [(2, "c", "hello"), (1, "a", "world"), (3, "b", "hi")]

sorted_data = sorted(data, key=lambda i: i[0])
print(sorted_data)



def welcome(name, *guest, **persn):
    print(f"welcome {name}")
    for g in guest:
        print(f"hello {g}")

print(welcome)

welcome("nino", "mari", age=89, city="tbilisi")


def greeting():
    print('hello mari')
greeting()