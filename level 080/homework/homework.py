def get_secret_number():
    return 18

def get_user_guess():
    return int(input("guess the number between 1 and 100: "))

def check_guess(secret_number, guess):
    if guess < secret_number:
        print("low")
        return False
    if guess > secret_number:
        print("high")
        return False
    print("You guessed the number")
    return True

def main():
    secret_number = get_secret_number()
    guessed_correctly = False

    while not guessed_correctly:
        user_guess = get_user_guess()
        guessed_correctly = check_guess(secret_number, user_guess)

main()