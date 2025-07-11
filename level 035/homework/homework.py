def number(num1):
    multiply=num1*5
    return multiply

multiply_by_5=number(3)
print(multiply_by_5)


def integers(n1,n2):
    Multiply=n1*n2
    return Multiply

Multiply_n1_to_n2=integers(5,8)
print(Multiply_n1_to_n2)

def string(word):
    user_word=len(word)
    print(user_word)

string('Mariami')


def isPalindrome(s):
    return s == s[::-1]

s = "anna"
is_it = isPalindrome(s)

if is_it:
    print("True")
else:
    print("False")


def sstring(user_words):
    words=user_words.upper()
    return words

my_word="hello world!"
print(my_word)

