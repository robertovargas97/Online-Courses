# phrases = [
#     "Python Language",
#     "Python Programming",
#     "Javascript Programming",
#     "C Language",
#     "C Programming",
# ]

# for language in sorted(phrases, key=len):
#     print(language)


languages = [
    {"l": "js", "t": "Front"},
    {"l": "jquery", "t": "Front"},
    {"l": "html", "t": "Front"},
    {"l": "Python", "t": "Back"},
    {"l": "typescript", "t": "Back"},
]

l_set = sorted(
    {language.get("l") for language in languages if language.get("t") == "Back"}
)

print(l_set)

# In sets we can use the following :
# & -> Intersection : set_1 & set_2
# | -> Union : set_1 | set_2
# - -> Diference : set_1 - set_2

# The best way to format strings is by using f strings (the more pythonic way)
