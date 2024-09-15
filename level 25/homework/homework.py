name='mari'
print(name[1])

age1=20
age2=30
print(age1+age2)

name1='nini'
name2='lika'
print(name1+name2)
#კონკატენცია ნიშნავს ერთი ან ორი სტრინგისგან მიღებული ერთი სტრინგი

age1=60
age2=20
print(age1/age2)
#აქ float გამოიტანა რადგან 

print(3>4)
print(5<2)
print(6>=6)
print(7<=9)
print(6!=7)
print(8==8)

print(3+55>7+65)
print(5+82<23-5)
print(90/7>=45*2)
print(55//5<=67+5)
print(89/4!=45//4)
print(34+34==70-2)

print(True or False)
print(False or True)
print(False or False)
print(True or True)
print(True and False)
print(False and True)
print(True and True)
print(False and False)

x=5
y=10
print(x>0 and y<20)
print(x<0 or y>20)
print(x==4 and y!=30)
print(x>=6 or y<=20)
print(x>7 and y<4)

for i in range(1,11):
    print(i)

numbers=[1,2,3,4,5]
sum=0
for number in numbers:
    sum+=number

string="hello world!"
for character in string:
    print(character)

i=1
while i<=10:
    print(i)
    i+=1

sum=0
num=1

while sum<50:
    sum+=num
    num+=1
