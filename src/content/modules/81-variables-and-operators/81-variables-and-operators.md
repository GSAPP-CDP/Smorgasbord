---
moduleid: 81
title: Variables and Operators
published: True
slug: variables-and-operators
---

# Variables and Operators

## Module Summary

In this module we will learn about the basic data types in Python and how we can work with them using variables and a variety of built-in operators.

## Introduction

If you’ve never written code, or done any computer programming, the whole concept might seem daunting at first. However, while advanced software development is without a doubt incredibly complex, programming in general is based on only a few key concepts. By understanding these concepts from the beginning, you will be less intimidated by all of the particular syntax that you don't yet know. As long as you can express what you want the program to do in general terms, you can always search the internet for examples on using the proper syntax. In fact this is how most people learn to code today. Furthermore, while each programming language has it’s own syntax, they almost all follow the same basic principles, so learning these principles will be useful no matter what language you end up using.

## Comments and print()

The first bit of Python syntax we will cover is the all-important 'comment'. You specify a comment by starting a line with '#', which tells Python to ignore everything on that line after the '#' symbol. Try typing the following lines of code into your editor and executing the script:

```python
#this is a comment
print('this is code') #this is also a comment
```

If you run this code you will see that it prints out 'this is code' because it executes the line `print('this is code')`. This uses the `print()` Function which takes in any text you put inside the parenthesis and prints it to our code editor's console text box. `print()` is one of many Functions built-in to Python. We will see other useful functions in this and the [following module](), and will see how we can create our own Functions in a [later module]().

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

This should print out the number 5, since `a` is storing the number '2', and `b` is storing the number '3'. You can use many other common arithmetic operators in the same way. Some of the most common are:

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

It is also common to substitute underscores ('_') for spaces in variable names. In general, variable names should not be too long, but should err on the side of description rather than brevity to facilitate the code's readability. For instance, if you are keeping track of the number of blueberries, it is better to call the variable 'numBlueberries' than simply 'n' or 'b'.

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

# Challenge

Complete code to write a "MadLibs" like story