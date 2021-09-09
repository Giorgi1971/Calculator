def check(string):
    crt = {'open': 1}
    for i in string:
        if i == "(":
            if crt['open'] == 0:
                return 'სწორია'
            else:
                crt["open"] = 0

        elif i == ")":
            if crt["open"] != 0:
                return "არასწორია"
            else:
                crt.pop("open")

    return 'სტრიქონი არ შედება “(“ და “)“ ელემენტებისგან'


print(check(" dfdf(dfd9 sf  sdsdsddsd"))