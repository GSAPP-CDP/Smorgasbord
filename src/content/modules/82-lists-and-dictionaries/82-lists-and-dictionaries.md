---
moduleid: 82
title: Lists and Dictionaries
published: True
slug: lists-and-dictionaries
---

# Lists and Dictionaries

## Module Summary

In the [previous module](), we learned a set of basic data types and how we can work with them using variables and a variety of operators supported by Python. In all the examples we only assigned a single value to a variable at a time. In this module, we will see how we can store entire sets of data within a variable using two key structures: Lists and Dictionaries.

## Multi-part variables

In addition to storing single pieces of data, you can also use variables to store many pieces of data, and then access them in a structured way. There are two basic types of multi-part variables:

- **Lists** (sometimes called arrays)
- **Dictionaries** (sometimes called key-value pairs)

## Working with Lists

A List can be created by using square brackets, and separating individual elements by commas like so:

```python
numbers = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'bananas']
```

To retrieve an object from such a List, you once again use square brackets, but this time appended to the end of the variable name. Inside the brackets you place the *index* or position of the item you want in the List. For example:

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

## Working with Dictionaries

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

## Combining Lists and Dictionaries

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

# Challenge

Create a database of objects represented by lists and dictionaries