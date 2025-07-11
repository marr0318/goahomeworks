

def split_sentence(sentence):
    return sentence.split()

print(split_sentence("Hello world! This is a test."))


def join_words(words):
    return ' '.join(words)
print(join_words(['Hello', 'world!', 'This', 'is', 'a', 'test.']))


def print_with_index(words):
    for index, word in enumerate(words):
        print(f"Index: {index}, Word: {word}")
print_with_index(['Hello', 'world!', 'This', 'is', 'a', 'test.'])


def print_words_from_input():
    sentence = input("Please enter a sentence: ")
    words = split_sentence(sentence)
    for word in words:
        print(word)
print_words_from_input()


def join_names(product_names):
    return ', '.join(product_names)
print(join_names(['Apples', 'Bananas', 'Cherries', 'Dates']))