---
moduleid: 84
title: Functions and Classes
published: True
slug: functions-and-classes
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

For the rest of this module we will look at how we can define custom Classes in Python and use them within our scripts to create Instances of the Class. 

We have already used classes and methods...


### Defining a custom Class