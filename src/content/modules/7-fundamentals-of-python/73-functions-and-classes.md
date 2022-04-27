---
moduleid: 73
title: Functions and Classes
published: True
slug: functions-and-classes
authors:
 - "Danil Nagy"
---

# Functions and Classes

## Module Summary

In this module, we will learn how to package code in custom Functions so it is easily reusable throughout our code. We will also learn how to create custom Classes, which define objects as containers of both data and behaviors, which is the basic building block of modern object-oriented programming (OOP).

## Introduction

So far, we have seen how we can use [Variables]() in Python to store different kinds of data, and how we can use 'flow control' structures such as [Conditionals and Loops]() to change the order or the way in which lines of code get executed. With only these tools we can already start to express some pretty complex logics. However, with only our current tools, any sufficiently complex script would start to get very long, since every time we wanted to do a certain process we would have to rewrite all of its code.

This is where Functions and Classes come in. Functions allow us to encapsulate lines of code to create custom processes that can be reused anywhere throughout the script. Classes take this encapsulation one step further and wrap up not only a single process, but several related processes, as well as local variables that can keep track of the state of a particular instance of the Class.

## Functions

We have already seen and used some Functions such as `type()`, `str()`, and `range()` which are included within Python. But what are Functions really?

As in math, a Function is a basic structure that can accept inputs, perform some processing on those inputs, and give back a result. Let’s create a basic Function that will add two to a given number and give us back the result:

```python
def add_function(input_number):
    result = input_number + 2
    return result
```

A function’s definition begins with the keyword `def`. After this is the function's name, which follows the same naming conventions as Variables. The Function's name is always followed immediately by a set of parenthesis. Inside the parenthesis you can place any number of input variables separated by commas (`,`), which will be passed to the function when it is called, and are available within the body of the function. If a function does not expect any inputs you still include the parenthesis, however in this case there won't be anything inside of them, for example: `my_function_name()`.

On its own, this code will only define what the Function does, but will not actually run any code. To execute the code inside the Function you have to call it somewhere within the script and pass it the proper inputs:

```python
print(add_function(2))
```

Here we call the Function by writing its name and passing in '2' as the input. The result of the Function (the number '4') will then be passed into the `print()` Function which will print '4' to the console.

When you call a Function, you can either directly pass values or pass Variables that have values stored inside of them. For example, this code will call the Function in the same way:

```python
var = 2
print(add_function(var))
```

Here the value of the `var` variable, which in this case is 2, is being passed to the `add_function` Function, and is then available within that Function through the `input_number` Variable. Notice that the names of the two Variables `var` and `input_number` don’t have to match. When a value gets passed to a Function it is reassigned to the Variable name declared in the Function definition, and the value is then available through that name.

In this case we refer to `var` as a <u>global variable</u> since it stores the value '2' in the main script, while `input_number` is a <u>local variable</u> since it stores that value only within the body of that Function. In this way, Functions 'wrap up' specific tasks and all the data that is necessary to execute that task to limit the number of global variables necessary in the main script.

The first line declaring the Function and its inputs ends with a colon (`:`), which should be familiar by now, with the rest of the Function body inset from the first line. Optionally, if you want to return a value from the function back to the main script, you can end the function with the keyword `return`, followed by the value or variable you want to return. Once the function hits on a `return` statement, it will skip over the rest of the body and return the associated value. This can be used to create more complex behavior within the function:

```python
def add_function(input_number):
    if input_number < 0:
        return 'Number must be positive!'
    result = input_number + 2
    return result

print(add_function(-2))
print(add_function(2))
```

You can see that in this case, if the input is less than zero the conditional will be met, which causes the first `return` statement to run, skipping the rest of the code in the Function. However, if the number is equal or greater than zero, the conditional will be skipped causing the rest of the Function to run, ending with the second `return` statement.

You can pass any number of inputs into a Function, but the number of inputs must always match between what is defined in the Function, and what is passed into it when the Function is called. For example, we can expand our simple addition Function to accept two numbers to be added:

```python
def add_two_numbers(input_number_1, input_number_2):
    result = input_number_1 + input_number_2
    return result

print(add_two_numbers(2, 3))
```

You can also return multiple values by separateing them with a comma (`,`) after the return statement. In this case, you also need to provide the same number of variables to which to assign the results of executing the Function. Let’s expand our Function to return both the addition and multiplication of two numbers:

```python
def two_numbers(input_number_1, inputinput_number_2Number2):
    addition = input_number_1 + input_number_2
    multiplication = input_number_1 * input_number_2
    return addition, multiplication

val_1, val_2 = twoNumbers(2, 3)
print('addition: ' + str(val_1))
print('multiplication: ' + str(val_2))
```

Functions are extremely useful for creating efficient and readable code. Wrapping up sections of code into custom Functions allow you (and possibly others) to reuse code in a very efficient way, and also forces you to be explicit about the set of operations involved in accomplishing a certain task in your code, as well as the data needed execute it.

You can see that the basic definition of Functions is quite simple, however you can quickly start to define more advanced logics, where Functions call each other and pass around inputs and returns in highly complex ways. You can even pass a Function as an input into another function and create Functions which call themselves. These are called <u>Recursive Functions</u> which we will look at in a [later module]().

## Classes

While Functions make our code more efficient and reuseble, they still assume that the code is meant to be executed a single time. This is typical in design applications, where code is used to create relatively short 'scripts' that are meant to be run when needed to accomplish a specific task. This type of programming is commonly referred to as <u>procedural programming</u>, since each passage of code defines a single procedure that is meant to be executed once and runs top to bottom until it is complete.

For more complex modern programs, however, the program does not have a single specific behavior, but runs continuously and changes based on a user's input. Instead of just using Conditionals, Loops, and Functions to control the execution of the code, such programs rely on <u>objects</u> that define the different functionalities of the program. As the program runs, these objects can interact with each other and change their behavior based on user input and other events that are happening within the program.

This type of programming is called <u>object-oriented programming</u> or <u>OOP</u>, and is one of the major foundations of modern programming. The key to OOP are Classes, which defines the behavior of these objects. Although we will not get too deep into OOP within this sequence, creating custom Classes can be very useful for defining custom objects with specific behaviors even if we are using a mostly procedural approach. In a later module we will see how we can use Classes and OOP to create interesting design models based on [agent-based behavior]().

Like Functions, Classes are structures in our code that contain passages of code that define functionality that can be used in our main script. However, while Functions define a single set of procedures, Classes can define a set of related Functions that define the behavior of a particular object, as well as a set of local variables that keep track of the state of each instance of that object. Functions defined within a Class are commonly called **Methods**, while variables that are local to that Class are referred to as its **Properties**. Together, these variables and methods define the 'behavior' of the object, and dictate how it interacts with other objects in the programming 'environment'.

Like Functions, Classes are structures that define certain functionality, but don't do anything on their own. Just like a class needs to be called within the main script to run its code, we can use Class definions to create **Instances** of the Class, which we can then use within our script.

Let’s think about this in everyday terms. For an animal, an example of a Method might be 'running'. Lots of things can run, so the definition of running as a Function would be general, and would not necessarily relate to who is doing the running. On the other hand, an example of a Class might be 'dog', which would have an instance of the 'running' Method, as well as other Methods related to being a dog such as 'eating' and 'barking'. It would also have a set of Properties for storing information about a given dog, such as its age, breed, or weight. Another class might be 'human', which would store different Properties, and would have its own particular version of Methods such as 'running' and 'eating' (but hopefully not 'barking').

You may not realize it, but we've already used Classes and Methods throughout this sequence. With the exception of a few basic data types such as `int`, `float`, and `bool`, all data types we've worked with including `str (string)`, `list`, and `dict (dictionary)` are actually implemented as Classes that come built into Python. When we created `strings` or `lists` we've actually been creating Instances of those Classes, and when we've run operations on them (for example calling `.append` to add an item to a list), we've actually been using the Methods implemented for those Classes.

For the rest of this module we will look at how we can define custom Classes in Python and use them within our scripts to create Instances of the Class. 

### Defining a custom Class

Let's define a very basic class to see how it works. We will use an example of a counter, which will store a value, and increment that value based on user requests:

```python
class Counter:

    count = 0

    def add_to_counter(self, input_value):
        self.count += input_value
            
    def get_count(self):
        return self.count
```

Notice we are again using the `+=` shorthand to increment the value of the Instance's `count` Property by the input value. To use this Class, we first need to create an Instance of it, which we will store in a variable just like any other piece of data:

```python
my_counter = Counter()
```

Once we create an instance of a Class, we can run that Instance's Methods, and query it's internal Properties. Note that the general class definition is only a construct. All Properties defined within the Class only apply to a particular Instance, and the Methods can only be run as they relate to that Instance. For example:

```python
my_counter.add_to_counter(2)
print(my_counter.get_count())
```

Right away, you will notice a few differences between how we define Functions and Classes. First of all, no variables are passed on the first line of the definition since the `Class` keyword only defines the overall structure of the class. After the first line you will find a list of Variables which define the local Parameters of that Class, and keep track of data for individual Instances. After this you will have a collection of local Methods (remember 'Methods' are simply Functions that belong to a particular Class) that define the Class functionality. These Methods are defined just like Functions, except you see that the first input is always the keyword 'self'. This is a reference to the Instance that is calling the Method, and is always passed as the first input into each Method within a Class. This allows you to query the local Parameters of the Instance, as you can see us doing with the 'count' variable.

To call a Method within a Class, you use the name of the variable that is storing the Instance, and use the dot (`.`) notation to call the Method. The dot is basically your way into the Instance and all of its data and functionality. It is also possible to use the dot syntax to query the local Parameters of the Class instance. For example, if we want to find the value of my_counter’s `count` variable, we can just ask it by typing:

```python
my_counter.count
```

However, this is discouraged because it reveals the true name of the local Parameters to the end user of the Class. In a production environment this would pose severe security risks, but it is considered bad practice even in private uses. Instead, you are encouraged to create special 'accessor' methods to pull Parameter values from the Instance, as we have done with the `get_count()` method in the example above. Another advantage of this practice (which is called [encapsulation](http://beginnersbook.com/2013/05/encapsulation-in-java/)) is that the code is easier to maintain. You are free to make any changes within the Class definition, including changing the names of the local Parameters and what they do. As long as you maintain the accessor functions and they return the expected result, you do not have to update anything in the main code that uses the Class.

As far as naming Classes goes, you can follow the same rule as naming variables or functions, however the standard practice is to capitalize every word, including the first one.

Finally, in the example above every Instance we make of the Counter will start the counter at 0. However, what if we want to specify what this count should be when we make an Instance of the Class? For this we can implement the `__init__()` method (those are two underscores on each side of `init`):

```python
class Counter:

    def __init__(self, initial_value):
        self.count = initial_value

    def add_to_counter(self, input_value):
        self.count += input_value
            
    def get_count(self):
        return self.count
```

Now when we can create a new Instance of the counter we can pass in a starting value for the count:

```python
my_counter = Counter(10)
my_counter.add_to_counter(2)

#this should now return 12
print(my_counter.get_count())
```

When the Class Instance is initialized, it will automatically run the `__init__()` Method, which will utilize any variable passed into it during initialization. `__init__()` is one of a series of special methods that Classes can implement to achieve different functionality. The rest of these are beyond the scope of this module, but you can find a more thorough description of these, as well as other aspects of Classes, in the [Python documentation](https://docs.python.org/2/tutorial/classes.html).

# Challenge

Story generator - custom Class that stores information and generates a story with title and body.
