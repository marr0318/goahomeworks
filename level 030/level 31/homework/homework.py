#1
def numbers(a=20,b=10):
    Nums=a/b
    print(Nums)

numbers(20,10)
#2
def my_name(name):
    Name='mariami'
    print(Name)

my_name(name='mariami')
#3
def age_from_birthdate(birthdate):
    birth_year = int(birthdate[:4])  
    current_year = 2024  
    age = current_year - birth_year
    print("Your age is: " + str(age) + " years")
#4
def multiply_five(num):
    your_num=num*5
    print(your_num)

multiply_five(10)
#5
def my_information():
    your_age=int(input('enter your age:  '))
    your_name=str(input('enter your name:  '))
    print(your_age,your_name)

my_information()
#6
def string(string_num):
    print(int(string_num*5))

print(string('12'))
#7
def numms(num1,num2):
    multiply=num1*num2
    divide=num1/num2
    sum=num1+num2
    minus=num1-num2
    print(multiply,divide,sum,minus) 

