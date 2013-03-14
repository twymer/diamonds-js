import sys
import string

def toBase36(int_value):
    alphabet = '0123456789' + string.uppercase
    return alphabet[int(int_value)]

def convert(level):
    level = level.split(',')

    result = []
    f = open('output.txt', 'w')

    for i in range(0, len(level), 12):
        line = level[i:i+12]

        line_as_string = ' '.join(str(toBase36(item)) for item in line)
        result.append(line_as_string)
        f.write(line_as_string + '\n')

if __name__ == "__main__":
    if sys.stdin.isatty():
        level = raw_input('Paste the levl here: ')
    else:
        level = sys.stdin.read()
    convert(level)
