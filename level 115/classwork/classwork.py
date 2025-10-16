# 1) შექმენით person dictioanry, რომელშიც იქნება მინმიუმ 5 წყვილი (სახელი, ჰობი, აკადემია) ახსენით როგორი 
# მონცამეთა ტიპი dictionary და გამოიყენეთ მეთოდები

# clear(),
# copy(),
# get(),
# items(),
# keys(),
# values(),
# pop(),
# popitem(),
# update()

# person = {
#     "name": "mari",
#     "hobby": "reading",
#     "academy": "goa",
#     "age": 89,
#     "city": "tbilisi"
# }
# print(person.copy())
# print(person.get("name"))
# print(person.items())
# print(person.keys())
# print(person.values())
# removed_value = person.pop("age")
# print(removed_value)
# removed_item = person.popitem()
# print(removed_item)
# new={"hobby": "coding"}
# person.update(new)
# person.clear()
# print(person)


# 2) ყველა დავალება შეასრულეთ ჯერ სტანდარტული ფორმით, შემდეგ კი შემოკლებული გზით. 
# 1. შექმენით სია რომელშიც იქნება 0-იდან 21-მდე რიცხვები. 2. აიღეთ სია რომელშიც იქნება რიცხვების კვადრატები 
# (თავის თავზე ნამრავლი) 1-იდან 10-მდე 3. შექმენით რიცხვების სია რომელშიც დაამატებთ ლუწ რიცხვებს 20-იდან 40-მმდე 4. 
# შექმენით 1 რიცხვების სია, შემდეგ მორე რომელშიც გადაიტანთ მხოლოდ კენტ რიცხვებს პირბელი სიიან და გაამრავლებთ ორზე
num = []
for i in range(0, 21):
    num.append(i)
print(num)


num1 = []
for i in range(1, 10):
    num1.append(i * i)
print(num1)


even_num = []
for i in range(20, 41):
    if i % 2 == 0:
        even_num.append(i)
print(even_num)


numbers = [1, 2, 3, 4, 5]
odd=[]
for i in numbers:
    if i % 2 != 0:
        odd.append(i * 2)
print(odd)

numbers = [i for i in range(22)]
print(numbers)

squares = [i * i for i in range(1, 11)]
print(squares)

evens = [i for i in range(20, 41) if i % 2 == 0]
print(evens)

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd_times_two = [i * 2 for i in nums if i % 2 == 1]
print(odd_times_two)




Stack → ინახება პრიმიტული ტიპები (number, string, boolean, null, undefined, symbol, bigint) და ფუნქციის კონტექსტი.

Heap → ინახება კომპლექსური ტიპები (object, array, function და ა.შ.).

პრიმიტული = პირდაპირი მნიშვნელობა (მაგ. let x = 5).

კომპლექსური = reference (მისამართი Heap-ში), ცვლადი მხოლოდ მისამართს ინახავს (მაგ. let obj = {name: "Nika"}).
