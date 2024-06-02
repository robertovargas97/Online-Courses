import re

# . - any char

# [a-zA-z] - char class a or b or c or ... z A or B or C ... Z

# [0-9] - digit class 0 or 1 or 2 .... or 9 ->  \d

# /w - Alphanumeric values

# [^0-9] - \D

# + - at least 1 [a-z]+

# * - zero or more

# ^ - start of the string

# $ end of the string

# ? - optional

# [a-z{min,max}] - the should be min chars or max chars

# \s - space

# \S - anything other value than space


string_to_check = 'ABCDE1234A'
pattern = re.compile('^[A-Z]{5}[0-9]{4}[A-Z]$')
matching_string = re.findall(pattern, string_to_check)
print(matching_string)


phone_number = '8123456789'
phone_pattern = re.compile('^[6-9][0-9]{9}$')
matching_number = re.findall(phone_pattern, phone_number)
print(matching_number)

date_string = '92-05-2018'
date_pattern = re.compile('^[0-9]{2}-[0-9]{2}-[0-9]{4}$')
matching_date = re.findall(date_pattern, date_string)
print(matching_date)


# Named Group
date_string = '12-05-2018'
date_pattern = re.compile('^(?P<day>\d{2})-(?P<month>\d{2})-(?P<year>\d{4})$')
matching_date = re.search(date_pattern, date_string)
print(matching_date.group('year'))


# ?: means NOT TO capture the group
phone_number = '+506 8123456789'
phone_pattern = re.compile('(?:\+506/s)?([6-9][0-9]{9})')
matching_number = re.search(phone_pattern, phone_number)
print(matching_number.group())
