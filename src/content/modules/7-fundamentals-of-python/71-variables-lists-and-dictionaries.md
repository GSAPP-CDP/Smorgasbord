---
moduleid: 71
title: Variables, Lists, and Dictionaries
published: True
slug: variables-lists-and-dictionaries
authors:
 - "Danil Nagy"
---

# Variables, Lists, and Dictionaries

## Module Summary

In this module we will learn about the basic data types in Python and how we can work with them using variables and a variety of built-in operators. We will also see how we can store entire sets of data within a variable using two important structures: Lists and Dictionaries.

## Introduction

If you’ve never written code, or done any computer programming, the whole concept might seem daunting at first. However, while advanced software development is without a doubt incredibly complex, programming in general is based on only a few key concepts. By understanding these concepts from the beginning, you will be less intimidated by all of the particular syntax that you don't yet know. As long as you can express what you want the program to do in general terms, you can always search the internet for examples on using the proper syntax. In fact this is how most people learn to code today. Furthermore, while each programming language has it’s own syntax, they almost all follow the same basic principles, so learning these principles will be useful no matter what language you end up using.

## Comments and print()

The first bit of Python syntax we will cover is the all-important 'comment'. You specify a comment by starting a line with '#', which tells Python to ignore everything on that line after the '#' symbol. Try typing the following lines of code into your editor and executing the script:

```python
# this is a comment
print('this is code') # this is also a comment
```

If you run this code you will see that it prints out 'this is code' because it executes the line `print('this is code')`. This uses the `print()` Function which takes in any text (or piece of data) you put inside the parenthesis and prints it to our code editor's console text box. `print()` is one of many Functions built-in to Python. We will see other useful functions in this and the [following module](), and will see how we can create our own Functions in a [later module]().

Meanwhile, it ignores both comments occurring after the '#' symbol. Although every language specifies them differently, comments are an important part of every programming language, as they allow the developer to add extra information and description to their code which is not strictly related to its execution.

Most Python editors also have a shortcut for commenting whole lines of code. Pressing `CTRL + /` should 'comment out' the current line of code by placing a '#' in front of it. You can also use the shortcut with multiple lines selected to comment out entire sections of code. This is useful during troubleshooting if you want to disable certain parts of your script without deleting the actual code.

Now that we know the basics, let's start to explore the fundamental principles of coding in Python, startin with variables.

## Variables

You can think of variables as containers that store some form of data. You can use variables in Python to store pieces of information, and then later recall them when you need them. Variables can be declared and assigned freely in Python, as opposed to other languages where you have to explicitly state the kind of data they will be storing. To assign a value to a variable, use the `=` operator:

```python
a = 2
```

Here, `a` is the name of the variable, and the number '2' is the data I am assigning it. From here on out, `a` will be associated with the number '2', until it is assigned another value, or the program ends. Try this code:

```python
a = 2
b = 3
print(a + b)
```

This should print out the number 5, since `a` is storing the number '2', and `b` is storing the number '3'. You can use many other common arithmetic [operators](https://www.w3schools.com/python/python_operators.asp) in the same way. Some of the most common are:

- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)
- `**` (raise to a power)
- `%` (modulo)

In Python, you can name your variables anything, as long as the name starts with a letter, does not contain spaces, and is not a reserved keyword (such as 'print'). In practice, to enhance readability most programmers follow some conventions for naming variables. One common approach is to use ‘camel case’ to make variables composed of multiple words readable without spaces.

```
withCamelCaseTheFirstWordIsLowerCaseWhileAllSubsequentWordsAreUpperCase
```

It is also common to substitute underscores ('\_') for spaces in variable names. In general, variable names should not be too long, but should err on the side of description rather than brevity to facilitate the code's readability. For instance, if you are keeping track of the number of blueberries, it is better to call the variable 'numBlueberries' than simply 'n' or 'b'.

Variables can hold data of different types. Although Python does not make you explicitly declare the type of data you will be using, it is important to know the types because they will each behave differently in your code. Although there are many different types of data supported by Python, the most common are:

- `int` (means integer, or a whole number)
- `float` (means floating point, or decimal number)
- `bool` (means boolean, or a True/False)
- `str` (means string, or ‘a piece of text’)

In Python you can use the `type()` function to get the type for any piece of data. Try to run the following code:

```python
print(type(12))
print(type(12.1))
print(type(True))
print(type('blueberries'))
```

You can see that it prints the four types described above. Notice also the particular way in which the data must be written so that Python does not confuse it with the name of a variable. Numbers can be written directly because you cannot name variables with only a number. Booleans must be written capitalized (True or False) as these are reserved key words in Python (notice that the Python editor gives a special color to the 'True' keyword). Strings are always contained within quotes. You can use either single (') or double (") quotes, but they must match on either side of the string. If you try to write:

```python
print(type(blueberries))
```

without the quotes, you will get the following error:

```
NameError: name 'blueberries' is not defined
```

This error tells you that the name ‘blueberries’ is not defined as a variable. However, if you write:

```python
blueberries = 5
print(type(blueberries))
```

it will tell you that it's a type `int`, because 'blueberries' is now a variable with an `int` stored inside of it.

In Python, many operators are 'over-loaded', which means that they function differently depending on the data type that they are used on. For instance, if we run:

```python
print(2 + 2)
```

we get '4'. When given two numbers, the `+` operator performs arithmetic addition. However, if we run:

```python
print('First ' + 'Last')
```

we get 'First Last'. When given two strings, the `+` operator 'concatenates' or merges them together into one string. Over-loading is useful because it produces clean and readable code without having a special function for each type of variable. You have to be careful, however, because mismatching different types of variables can lead to errors. For instance, running this line:

```python
numBerries = 5
print('Number of Blueberries: ' + numBerries)
```

will produce an error because it is trying to perform a concatenation of a string and an integer. Instead, you can use the `str()` function to convert the 5 to a string before using it with the `+` operator:

```python
numBerries = 5
print('Number of Blueberries: ' + str(numBerries))
```

## Multi-part variables

In addition to storing single pieces of data, you can also use variables to store many pieces of data, and then access them in a structured way. There are two basic types of multi-part variables:

- **Lists** (sometimes called arrays)
- **Dictionaries** (sometimes called key-value pairs)

### Working with Lists

A List can be created by using square brackets, and separating individual elements by commas like so:

```python
numbers = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'bananas']
```

To retrieve an object from such a List, you once again use square brackets, but this time appended to the end of the variable name. Inside the brackets you place the _index_ or position of the item you want in the List. For example:

```python
numbers = [1, 2, 3, 4, 5]
print(numbers[0])
fruits = ['apples', 'oranges', 'bananas']
print(fruits[1])
```

Notice that like in all languages (including Grasshopper), counting begins with '0', so if you want the first item in a list you use `[0]`, the second item `[1]`, and so on. Unlike many other languages, Python will allow you to mix different types of data within a single List, so something like this is perfectly legal:

```python
fruitsAndNumbers = ['apples', 2, 'bananas']
print(type(fruitsAndNumbers))
print(type(fruitsAndNumbers[0]))
print(type(fruitsAndNumbers[1]))
```

You can also use a `:` operator within the square brackets to obtain a range of values from a List, which will create a new list that you can assign to a new variable:

```python
numbers = [1, 2, 3, 4, 5]
newNumbers = numbers[0:3] # [index of first item:index after last item]
print(newNumbers)
```

You can even index backwards using negative indices. Here is a typical application that will print out the last item in the List:

```python
numbers = [1, 2, 3, 4, 5]
print(numbers[-1])
```

Lists implement various methods to help you work the data stored within. The most common is `.append()`, which adds a value to the end of a List:

```python
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(numbers)
```

You can even start with an empty List, and fill it gradually with appends:

```python
numbers = []
numbers.append(1)
numbers.append(2)
print(numbers)
```

For other common List methods you can refer to the [Python documentation](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists).

### Working with Dictionaries

Lists are extremely useful for storing multiple pieces of data within a specific sequence. However, sometimes you want to be able to recall a piece of data without knowing its exact position in a List. For this you can use Dictionaries, which store multiple pieces of data by tying them to unique keys. You can then use the keys to recall the data. For this reason, Dictionary entries are often called 'key-value pairs'.

To create a Dictionary in Python you use curly braces, separating keys and values with a colon (`:`), and multiple entries with comma (`,`):

```python
myDictionary = {'a': 1, 'b': 2, 'c': 3}
```

In this Dictionary, the integers 1, 2, and 3 are tied to their unique keys, 'a', 'b', and 'c'. Note that keys must be strings, while values can be any data type. To retrieve a piece of data from this Dictionary, you can again use the square bracket notation, this time passing in a key instead of an index:

```python
myDictionary = {'a': 1, 'b': 2, 'c': 3}
print(myDictionary['a'])
```

To add entries to a Dictionary, you just have to specify the data that relates to a particular key using the `=` operator and the same square bracket syntax:

```python
myDictionary = {'a': 1, 'b': 2, 'c': 3}
myDictionary['d'] = 4
print(myDictionary['d'])
```

As with Lists, you can start with an empty Dictionary and build it up over time:

```python
myDictionary = {}
myDictionary['a'] = 1
myDictionary['b'] = 2
print myDictionary
```

Like Lists, Dictionaries implement many useful methods for working with the data contained inside. One very useful method is `.keys()`, which returns a List of all of the dictionary’s keys, which you can then use to [iterate over all the entries in the Dictionary]():

```python
python
myDictionary = {'a': 1, 'b': 2, 'c': 3}
print(myDictionary.keys())
```

For other useful methods you can refer to the proper place in [the documentation](https://docs.python.org/3/tutorial/datastructures.html#dictionaries).

### Combining Lists and Dictionaries

Values within lists and dictionaries are not restricted to being single pieces of data, and can be Lists and Dictionaries as well. This allows you to build highly sophisticated data structures that can match the needs of any project. You can access items within such a hierarchical structure by chaining together requests with square brackets. Here is an example:

```python
# start by initializing an empty Dictionary
myDictionary = {}

# add two Lists as entries in the Dictionary
myDictionary['numbers'] = [1, 2, 3, 4, 5]
myDictionary['fruits'] = ['apples', 'oranges', 'bananas']

# add new data to both Lists
myDictionary['numbers'].append(6)
myDictionary['fruits'].append({'berries':['strawberries', 'blueberries']})

# use a compound request to pull data from the Dictionary. This should print 'blueberries'
print(myDictionary['fruits'][-1]['berries'][1])
```

JSON, one of the most implemented and easiest to work with data formats, is actually based on this concept of nested lists and key-value pairs, and has great support within almost every programming language, including Python and JavaScript. We will work with the JSON format later in this sequence, but for now you can check out its documentation here: [http://json.org/](http://json.org/).

## Additional resources:

- [Variables](https://realpython.com/python-variables/)
- [Operators](https://realpython.com/python-operators-expressions/)

# Challenge

Complete code to write a "MadLibs" like story with sets of things

Create a database of objects represented by lists and dictionaries
