def hi(name):
    print("Hi", name)

hi("me")


def add(a, b):
    return a + b

print(add(3, 5))      




print(len("Hello"))
square = lambda x: x*x 
print(square(4))

def factorial(n):
    return 1 if n==1 else n*factorial(n-1)

print(factorial(5))

def apply(func, x): 
    return func(x)

print(apply(len, "Hi")) 


def pure_square(x):
    return x*x

print(pure_square(5)) 




def manual_index(lst, item):
    for i in range(len(lst)):   
        if lst[i] == item:      
            return i      
    return -1                  


my_list = [10, 20, 30, 40]
print(manual_index(my_list, 30))
print(manual_index(my_list, 50)) 


def manual_count(lst, item):
    count = 0
    for i in lst: 
        if i == item: 
            count += 1 
    return count


my_list = [10, 20, 30, 20, 40, 20]
print(manual_count(my_list, 20))  
print(manual_count(my_list, 50)) 



from turtle import *

def draw_square(x, y, size=100):   
    penup()
    goto(x, y)     
    pendown()
    for _ in range(4):  
        forward(size)
        right(90)


draw_square(50, 50)

done()