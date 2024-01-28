def name_value(my_list):
    scores = []
    alpha_str = list("abcdefghijklmnopqrstuvwxyz")
    for string in enumerate(my_list):
        char_list = list(string[1].replace(" ", ""))
        factor = string[0] + 1
        score = sum([alpha_str.index(x)+ 1 for x in char_list]) * factor
        scores.append(score)
    return(scores)
       
print(name_value(["codewars","abc","xyz"]))
print(name_value(["abc abc","abc abc","abc","abc"]))