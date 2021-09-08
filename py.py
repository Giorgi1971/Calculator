import random


def get_guess():
    return list(input("what is your guess? "))


def generate_code():
    digits = [str(num) for num in range(10)]
    print(digits)
    random.shuffle(digits)
    print(digits)
    return digits[:3]


def generate_clues(code, user_guess):
    if code == user_guess:
        return "Code Cracked!"

    clues = []
    for ind, num in enumerate(user_guess):
        if num == code[ind]:
            clues.append("Match")
        elif num in code:
            clues.append("Close")

    if clues == []:
        return ["Nope"]
    else:
        return clues


print("Welcome!")

secret_code = generate_code()

clue_report = []

while clue_report != "Code Cracked!":

    guess = get_guess()

    clue_report = generate_clues(guess, secret_code)

    print('here is your result guess')

    for clue in clue_report:
        print(clue)

    
