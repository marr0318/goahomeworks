# 1. შექმენით ფუნქცია, სადაც არგუმენტად გადასცემთ ორ string-ს, შემდეგ შეაერთეთ ისინი და დაპრინტეთ.

# 2. შექმენით ფუნქცია, სადაც არგუმენტად გადასცემთ 5 ელემენტიან რიცხვების სიას, შემდეგ დაპრინტეთ სიის მე-3 ელემენტისა და მე-4 ელემენტი
# ჯამი.

# 3. შექმენით ფუნქცია, სადაც არგუმენტად გადასცემთ მანძილს კილომეტრში, შემდეგ გადააქციეთ ის მეტრში და დაპრინტეთ.

# 4. შექმენით ფუნქცია, სადაც არგუმენტად გადასცემთ ორ რიცხვს, შემდეგ დაპრინეთ ამ ორი რიცხვიდან უფრო დიდი.

# 5. შექმენით ფუნქცია, სადაც არგუმენტად გადასცემთ სტრინგს, შემდეგ შეაბრუნეთ ეს სტრინგი და დაპრინტეთ.

def words(word1,word2):
    word=word1+word2
    print(word)

words('mari','ami')

numbers=[1,2,3,4,5]
def number():
    nums=int(numbers[3])
    num=int(numbers[4])
    print(nums+num)    

number()

def kilometer(km):
    meter=km*1000
    return meter

kilometers=int(input('enter a kilometer: '))
print(kilometer(kilometers))

def numss(num1,num2):
    Nums=max(num1,num2)
    print(Nums)

numss(20,15)
    
def reverse_string(input_string):
    reversed_string = input_string[::-1]
    print(reversed_string)
    return reversed_string

my_string = "Hello, world!"
reverse_string(my_string)