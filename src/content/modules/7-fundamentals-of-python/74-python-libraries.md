---
moduleid: 74
title: Python Libraries
published: True
slug: python-libraries
authors:
 - "Danil Nagy"
---

# Working with Libraries in Python

## Module Summary

This module covers the fundamentals of working with Python libraries (often called Python modules). We will learn what libraries are, how to install them, and how to incorporate them into any piece of Python code you create.

## Introduction

As we've discussed in previous modules, Python is an object-oriented-programming (OOP) language, and a key component of OOP is the idea of reusability and modularity. Modularity in code or [modular programming](https://en.wikipedia.org/wiki/Modular_programming) is the idea of separating large pieces of software into self contained packages based on functionality. It is a very popular way of writing code as it allows developers to simplify complex tasks and maintain large scripts easier. Functions and classes, that we went over in the previous module, are constructs that help promote modularity. Python libraries are another. Python libraries are scripts (often a collection scripts) that package certain functionality into self contained pieces of code.

## Libraries Overview

There are three types of Python libraries:

- **A built-in module**: these are libraries that are included with any installation of Python. There purpose is to make hundreds of commonly used tasks much easier for programmers. For example, there is a `datetime` library for working with date and time objects. Say you wanted to get the current date or time, you could call the library and it would return the specifc date and time in any timezone specified.
- **A pure Python module**: these are usually written by open source contributors or by Python enthusiasts who create custom python code for doing a specific task, and then make that code available online. There are tens of thousands of pure Python modules out there – libraries to develop video games, to libraries that making working with images easier.
- **Modules written in C**: similar to pure Python libraries but written in the C programming language and loaded during runtime. As they are written in C, this usually means they run a lot faster than pure Python modules.

Accessing modules within Python is the same regardless of the type – using the `import` statement. The import statement tells python that we want to access all the content within a particular library by _importing_ it into our code.

For example, if we want to utilize the `math` built-in Python module we would write:

```python
import math
```

This now gives us access to all the functions and classes within the [math library](https://docs.python.org/3/library/math.html). To access the functions just use the `math` statement followed by the name of the function, like so:

```python
math.sqrt(81)
```

The above code uses the `.sqrt()` function that returns the square root of any number given as the input.

In the above example we imported the entirety of the `math` library. But we are also able to import individual objects, classes and functions from a module piece by piece:

```python
from math import sqrt
```

Here we just imported the `sqrt` function by using the `from` + `import` statements. This tells python to select a particular element **from** a certain library and import it. Another important statement for accessing Python modules is the `as` keyword.

`as` is used to import modules with an alias or alternative name – which is important for avoiding namespace conflicts. For example, lets say we imported the `floor` function from the `math` library, but then later in our code wanted to create a variable called _floor_ to hold information about some floor, there would be a conflict. As there are two objects in the code with the same name, referring to completely different things. As a workaround, we could use the `as` statement to give the `math.floor()` an alias:

```python
from math import floor as flr

floor = 10
```

Now we can make use of the math's `floor` function by calling `flr()` while also creating other variable called floor.

## Installing External Libraries

As mentioned, there are thousands of popular open source development projects for Python, with active contributors that make their software available for other coders to use under open source licenses. This allows Python users to benefit from solutions others have already created to common problems.

There are many ways to install external libraries, but the most popular is using the `pip` framework. Pip is a tool that comes pre-installed with most instances of Python and makes the process of install libraries pretty easy.

Pip is a command line tool and its basic usage for installing a package is as follows:

```
pip install Package_Name
```

This will download the specified package, plus all of the dependencies to your machine's instance of Python. We can also use pip to install libraries using git (or directly from github). For example, to install the popular Pandas library, we could write either:

```
pip install pandas

# or

pip install git+https://github.com/pydata/pandas.git
```

We can also use pip to uninstall libraries like so:

```
pip uninstall Package_Name
```

## Additional Resources

- A full list of [Python's built-in libraries](https://docs.python.org/3/py-modindex.html)
- List of useful [open source libraries](https://wiki.python.org/moin/UsefulModules)
