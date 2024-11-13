products=[
    'skittles','m&ms','water',
    'snikers','lemon water','twix',
    'bounty','cola','sparkling water'
]

prices=[2,6,1,3,1.5,7,5,4,7]
your_money=5

if your_money>=prices[0]:
    print(products[0])

elif your_money>=prices[1]:
    print(products[1])

elif your_money>=prices[2]:
    print(products[2])

elif your_money>=prices[3]:
    print(products[3])

elif your_money>=prices[4]:
    print(products[4])

elif your_money>=prices[5]:
    print(products[5])

elif your_money>=prices[6]:
    print(products[6])

elif your_money>=prices[7]:
    print(products[7])

elif your_money>=prices[8]:
    print(products[8])


print('''
    skittles(0) 2$ , m&ms(1) 6$ , water(2) 1$ ,
    snikers(3) 3$ , lemon water(4) 1.5$ , twix(5) 7$ ,
    bounty(6) 5$ , cola(7) 4$ , sparkling water(8) 7$ .
''')

your_choice=int(input('Enter A Number: '))

print('You chose: ',products[your_choice])

if your_money>=prices[your_choice]:
    print('You can buy this! Yummy!')
    
    
else:
    print('You are on a low budget, You cannot buy this!')



