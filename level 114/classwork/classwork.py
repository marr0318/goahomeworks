# 1) შექმენით სია რომელშიც შეინახავთ სხვადასხვა საგანს, შემდეგ კი ამ სიაზე გამოიყენეთ 
# ჩაშენებული ფუნქციები და მეთოდები. კომენტარებით ახსენით თუ როგორ მუშაობს თითოეული

# .append(),
# .insert(),
# .pop(),
# .sort(),
# .min(),
# .max()

list=["biology", "math", "chemistry", "english", "geography"]
list.append("cmputer science")
list.insert(2, "PE")
pop_list= list.pop()
list.sort()
min_list=min(list)
max_list=max(list)
print(list)

#append()-ამატებს სხვა ელემენტს სიაში
#insert()-ამატებს სხვა ელემენტს დაწერილ ინდექსზე
#pop()-ამოიღებს ელემენტს სიიდან
#sort()-აწყობს სიას ანბანის მიხედვით
#min()-აბრუნებს სიაში ყველაზე პატრა მნიშვნელობას
#max()-აბრუნებს სიაში ყველაზე დიდ მნიშვნელობას


# 2) შექმენით tuple, რომელშიც შეინახავთ ბოსტნეულს (მინიმუმ 5-ს), შემდეგ გამოიყენეთ 
# ამ tuple-ზე len და sorted ფუნქციები, ასევე tuple-ის გადმობარება "unpacking" გააკეთეთ, 
# ცალ-ცალკე ცვლადებში შეინახეთ tuple-ის პირველი 3 ელემენტი, ხოლო დანარჩენი *rest ოპერატორის
# გამოყენებით ბოლო ცვლადში. კომენტარებით ახსეით როდის ვიყენებთ tuple-ს და დაწერეთ მისი თვისებები

vegetables = ("cucumber", "potato", "tomat", "cabbage", "pepper")

print(len(vegetables))

sort=sorted(vegetables)
print(sort)

1, 2, 3, *rst = vegetables

print(1)
print(2)
print(3)
print(rst)

# 1. Immutable - Tuple-ის ელემენტები არ შეიძლება შეიცვალოს.
# 2. Ordered - Tuple-ის ელემენტები ინახება გარკვეული თანმიმდევრობით.
# 3. Indexable - Tuple-ის ელემენტებზე შეგვიძლია მივაწვდოთ ინდექსი.

# 3) შექმენით 2 set, რომლებშიც შეინახავთ სხვადასხვა რიცხვებს (ორივე სიმრავლეში აიღეთ გასნხვავებული და იგივე 
# ელემენტები, ასევე განმეორებადი ელემენტები) გამოიყენეთ add და remove მეთოდები ორივე set-ზე, შემდეგ ამ ორ set-ს 
# შორის განახორციელეთ ოპერაციები: union, intersection და difference

set1={1, 2, 3, 4, 5}
set2={9, 4, 7, 0, 6}
set1.add(9)
set2.remove(6)
print(set1)
print(set2)
print(set1.union(set2))
print(set1.intersection(set2))
print(set1.difference(set2))







