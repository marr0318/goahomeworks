list1 = [5, 12, 7, 20, 15]
list2 = [3, 9, 2, 14, 8]
list3 = [6, 10, 4, 22, 1]

print(max(list1))
print(max(list2))
print(max(list3))

print(min(list1))
print(min(list2))
print(min(list3))

list4 = [5, 12, 7, 20, 15, 30]
list5 = [3, 9, 2, 14, 8, 11]
list6 = [6, 10, 4, 22, 1, 13]

print(len(list4))
print(len(list5))
print(len(list6))

print(sum(list1))
print(sum(list2))
print(sum(list3))

def list(numbers):
    if len(numbers) < 5:
        return
    
    max_number = max(numbers)
    min_number = min(numbers)
    sum_numbers = sum(numbers)
    length_list = len(numbers)
    
    print(max_number)
    print(min_number)
    print(sum_numbers)
    print(length_list)

numbers = [10, 20, 30, 40, 50]
list(numbers)

