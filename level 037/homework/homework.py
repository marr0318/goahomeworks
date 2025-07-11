def square(number):
    squared=number**2
    return squared

print(square(10))

def numbers(num1,num2):
    addition=num1+num2
    return addition

print(numbers(5,10))

def find_smallest_number(numbers):
    return min(numbers) if numbers else None

numbers = [18, 52, 23, 41, 32]
print(find_smallest_number(numbers))

def nm(numb1):
    if numb1>0:
     print('its positive')
    else:
     print('its negative')

print(nm(35))
print(nm(-2))

