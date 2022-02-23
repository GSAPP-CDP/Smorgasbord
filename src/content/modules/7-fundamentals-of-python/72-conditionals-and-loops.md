---
moduleid: 72
title: Conditionals and Loops
published: True
slug: conditionals-and-loops
authors:
 - "Danil Nagy"
---

# Conditionals and Loops

## Module Summary

In this module, we will learn two basic types of 'flow control' structures that will allow us to control how the code within our scripts is executing and allow us to start writing more complex algorithms.

## Introduction

Now that we understand [Variables](), we can start to develop more complex code structures which can build more interesting functionality into our scripts. Up to this point, our scripts have been pretty basic, and limited to only executing in a top-down order, with one command or operation per line. The following two concepts — Conditionals and Loops — are the two basic 'flow control' structures which can actually alter the sequence in which our code is executed, thereby creating more complex behavior and more interesting functionality.

## Conditionals

Conditionals are structures within a script which can execute different lines of code based on certain 'conditions' being met. In Python, the most basic type of Conditional will test a Boolean to see if it is `True`, and then execute some code if it passes:

```python
b = True
if b:
    print('b is True')
```

Here, since `b` is in fact `True`, it passes the test, causing the code that is inset after the `if b:` line to execute. Try to run the code again, this time setting b to False to see that nothing happens. In this case, if `b` does not pass the test, the entire block of inset code after the first conditional line is skipped over and ignored. In this code, `if b:` is shorthand for `if b == True:`. If you want to test for Falseness, you could use the Python shorthand `if not b:` or write the full `if b == False:`.

### Code structures and indents

In Python, a line ending with a colon (`:`) followed by lines of code inset with tabs is a basic syntax for creating hierarchical structure, and is used with all code structures including Conditionals, Loops, Functions, and Classes. The trick is that Python is very particular about how these insets are specified. You have the option of using tabs or a series of spaces, but you cannot mix and match, and you have to be very explicit about the number of each that you use based on the level of the structure. For instance, this code:

```python
b = False
if b:
    print('b is True')
    print('b is False')
```

will skip both `print()` lines if b is `False`. However, by deleting the indent on the last line, you take that line out of the nested structure, and it will now execute regardless of whether `b` is `True` or `False`:

```python
b = False
if b:
    print('b is True')
print('b is False')
```

On the other hand, if you inset the last line one level further:

```python
b = False
if b:
    print('b is True')
        print('b is False')
```

You will get an error saying

```
IndentationError: unexpected indent
```

which means that something is wrong with your indenting. In this case, you have indented to a level that does not exist in the code structure. Such errors are extremely common and can be quite annoying, since they may come either from improper indentation, mixing spaces with tabs, or both. On the bright side, this focus on proper indenting enforces a visual clarity in Python scripts that is often missing in other languages.

### Else statements

Coming back to Conditional, if a conditional test does not pass and the first block of code is passed over, it can be caught by an `else` statement:

```python
b = True
if b:
    print('b is True')
else:
    print('b is False')
```

In this case, when `b` is `True` the first statement will execute, and when `b` is `False` the second statement will execute. Try this code both ways to see.

### Comparison operators

In addition to using Booleans, you can also create conditionals using various comparison operators. For example, a conditional can test the size of a number:

```python
num = 7
if num > 5:
    print('num is greater than 5')
```

Or the contents of a string:

```python
t = 'this is text'
if t == 'this is text':
    print('the text matches')
```

In this example I use the double equals (`==`) operator to check if one thing equals another. This is the standard way to check equality, since the single equals (`=`) is reserved for assigning values to variables. The most common comparison operators are:

- `==` or `is` - check if two values are equal
- `!=` or `is not` - check if two values are not equal
- `>` - check if one number is larger than another
- `>=` - check if one number is larger or equal to another
- `<` - check if one number is smaller than another
- `<=` - check if one number is smaller or equal to another

In all cases, a succeeding condition will compute to a value of `True`, while a failed condition will compute to a value of `False`. You can check this by passing a Conditional statement into the `type()` function and observing that the type is `bool`:

```python
print(type(5 > 4))
```

### Elif statements

Between the `if ...:` and `else:` statments, you can also use any number of `elif ...:` (a concatenation of else and if) statement to chain together conditions to create more complex logics:

```python
num_1 = 3
num_2 = 7

if num_1 > 5:
    print('num_1 is greater than 5')
elif num_2 > 5:
    print('num_2 is greater than 5')
else:
    print("they're both too small!")
```

This creates a chain of tests that happen in order. If the first test passes, that block of code is executed, and the rest of the Conditional is skipped. If it fails, the second test (written after the `elif` keyword) is analyzed, and so on. If none of the tests pass, the code following the `else:` statement is executed.

### Combining conditions

With Python, you can also combine multiple tests within a single line of code by joining them using a set of special logic operators:

- `and` - returns `True` if <u>both</u> conditions are `True`, `False` otherwise
- `or` - returns `True` if <u>either</u> conditions are `True` and `False` <u>only</u> if they are both `False`
- `not` - added in front of any conditional or boolean, this operator reverses the boolean, making a `True` value `False` and vice versa. 

Using these logic operators we can write the following compound conditionals:

```python
num_1 = 3
num_2 = 7

if num_1 < 5 and num_2 < 5:
    print("they're both too small!")

if num_1 < 5 or num_2 < 5:
    print("at least one of them is too small!")

if not num_2 < 5:
    print("num_1 is at least 5")
```

### The 'in' operator

Finally, we can create a conditional to check if an item or value is stored within a list using the spacial `in` operator. We can also combine it with `not` to check if something is currently <u>not</u> stored inside a list. For example:

```python
myList = [1, 2, 3, 4, 5]
if 5 in myList:
    print("5 is in the list")

myDictionary = {'a': 1, 'b': 2, 'c': 3}
if 'd' not in myDictionary.keys():
    print("there is no item with a key of 'd'")
```

## Loops

Loops are code structures that allow certain lines of code to repeat multiple times under specific conditions. The most basic type of loop is one that iterates over each value within a List:

```python
fruits = ['apples', 'oranges', 'bananas']
for fruit in fruits:
    print(fruit)
```

### For loops

The `for *item* in *list*:` structure is the most basic way to construct a Loop in Python. It will runs whatever code follows this line once for each item in the List, each time setting the current item to the variable specified before the `in`. In this case, it will run the `print(fruit)` code three times, once for each fruit in the List. Every time the code is run, the variable `fruit` is set to a different fruit in the List in order. This is often used to apply a certain kind of analysis or processing to every element within a List.

You can do the same basic kind of iteration on a dictionary using the `.keys()` method, which will return a list of all the keys in the dictionary, and allow you to iterate over each entry:

```python
myDictionary = {'a': 1, 'b': 2, 'c': 3}
for key in myDictionary.keys():
    print myDictionary[key]
```

If you run this code, you will see that the entries are not returned in the same order that they are typed. This is because Dictionaries, unlike Lists, do not enforce a specific order. However, iterating through the keys using the .key() function will ensure that you go through each item in the Dictionary once.

### Looping with the range() function

In addition to iterating through every item in a List or Dictionary, Loops are often used to simply repeat a particular piece of code a specific number of times. For this, Python’s built-in `range()` function is very useful. `range()` takes an integer as an input and returns a List of integers starting at 0, up to but not including that value:

```python
print(range(5))
```

Using the `range()` function, we can set up a loop to iterate a specified number of times like this:

```python
for i in range(5):
    print('Hello')
```

This will simply run the code inside the Loop five times, since in effect we are creating a list of five sequential numbers, and then iterating over every item in that list. In addition, we are also storing each successive number in the variable `i`, which we can also use within the loop. A common example is to combine both strategies by tying the `range()` function to the length of a List (using the `len()` function), and then using the iterating number to get items from that list:

```python
fruits = ['apples', 'oranges', 'bananas']
for i in range(len(fruits)):
    print(fruits[i])
```

### Looping with the enumerate() function

Although this might seem redundant given the first example, there are times when you want to build a Loop that has access to both an item within a List, as well as an iterator which specifies its index. In such cases, you can use a special function called `enumerate()` which takes in a list and returns both the item and its index:

```python
fruits = ['apples', 'oranges', 'bananas']
for i, fruit in enumerate(fruits):
    print('the ' + fruit + ' are in position ' + str(i))
```

### While loops

While the `for ... in ...` loop will serve most purposes, there is another kind of loop which will iterate over a piece of code until a certain condition is met:

```python
i = 0
while i < 5:
    print(i)
    i += 1
```

In this case, the Loop will keep going while it’s condition is satisfied, and only stop once the variable `i` obtains a value greater or equal to 5. This type of Loop can be useful if you do not know how long the Loop should be run for, or if you want to make the termination criteria somehow dynamic relative to other activities within the script. It requires a bit more setup, however, as the value tested must first be initialized (i = 0), and there has to be code within the loop which changes that value in such a way that it eventually meets the exit criteria. The `+=` operator here is a shorthand in Python for adding a value to a variable. You can write the same thing explicitly like:

```python
i = i + 1
```

This type of `while ...` Loop is inherently more dangerous than a `for ... in ...` loop, because it can easily create a situation where the Loop can never exit. In theory, such a loop will run indefinitely, although in practice it will most certainly cause Python to crash. The most dangerous kind of loop is also the simplest:

```python
while True:
    print('infinity')
```

because by definition it has no way to ever terminate. Surprisingly, this kind of `while True` Loop does have some common uses, but you should never write code like this unless you absolutely know what you are doing (maybe try it just the once so you can get a sense of its effects).

## Conclusion

This concludes our basic coverage of the two main types of 'flow control' structures — Conditionals and Loops. With these structures you can start to write much more complex scripts, which are not restricted to executing one command per line, and can exhibit different behavior based on changing conditions in the script. In the [next module](), we will introduce even more flexibility by packaging pieces of code into custom Functions and Classes so they can be easily reused in multiple places throughout the script.

## Additional resources:
- [Lists](https://www.w3schools.com/python/python_lists.asp)
- [Dictionaries](https://www.w3schools.com/python/python_dictionaries.asp)

# Challenge

Complete a story with preset data and buildling the right conditionals and loops.
Give data and expected result.
