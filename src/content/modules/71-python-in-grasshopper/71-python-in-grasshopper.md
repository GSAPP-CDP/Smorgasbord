---
moduleid: 71
title: Using Python in Grasshopper
published: True
slug: using-python-in-grasshopper
---

# Sequence: Intro to Python Scripting in Rhino

## Sequence Summary:

This sequence introduces the programming language Python, and the various ways in which you can use it both on it's own and to control other design software like Rhino.

## Why?

Python has become one of the most popular programming languages in the world, mostly for it's relatively straight forward syntax and shallow learning curve. Due to this popularity, it has become the language of choice for many displines outside of computer programming, including natural sciences, data science, and even fine art. In recent years many design tools have also begun to support Python as their native scripting language, meaning you can use Python to control and customize the software to your needs.

## Modules:

Using Python in Grasshopper
Working with the Rhino API in Python

# Template for Modules:

# Using Python in Grasshopper

## Module Summary

This module introduces how Python can be used as a scripting language for Rhino by embedding Python code directly into a Python component in Grasshopper.

## Introduction

Grasshopper, despite being a great platform for algorithmic design, can also be limiting when trying to incorporate more complex programming elements. On the other hand, programming directly with computer code in a programming language like Python gives us much more control over our models and allows us to develop more complex and interesting design spaces but has a much higher learning curve and can be quite intimidating when first starting out.

So how do we choose one over the other? Luckily we don’t have to! In fact we can easily extend the basic functionality of Grasshopper by embedding Python code directly into special Grasshopper nodes that can then interact with other nodes in our model. This allows us to rely mostly on Grasshopper for basic elements, and use code only when necessary for more complex functionality.

## Why Python?

As discussed previously, there are many different programming languages out there to choose from — so why would we choose to work with Python?

Python is a very modern, general-purpose and high-level object-oriented programming language. In recent years Python has become extremely popular in a variety of fields outside of computer programming such as science, medicine, statistics, math, and machine learning. This popularity can be attributed to Python’s:

- relatively simple syntax, with a focus on simplicity, clarity, and readability which makes it less complicated to learn and write
- extensibility through a large collection of external libraries
- a huge support community of active users

Unlike more complex languages such as C++, Python is not often used for full software development. Because of it’s emphasis on ease of use, it also tends to be less efficient and somewhat slower than these languages, but this is usually not an issue for applications outside of software development.

Lately, Python is also starting to be embedded as a scripting language within many different design software, including ArcGIS, QGIS, Rhino, Solidworks, and Autodesk Fusion. This is a big change from earlier years when every design tool had it’s own proprietary scripting language (Rhinoscript for Rhino, EKL for Catia, Actionscript for Illustrator), so you had to learn a whole new language each time you used a new tool. Integrating Python as a standard scripting language allows designers to learn a single language and use it to control a variety of design software. So if you are not a programmer but want to learn one programming language that will give you the most use in your design career, there is a strong argument that the language should be Python.

## Python in Rhino and Grasshopper

Starting in version 5, Rhino has Python directly embedded alongside (and as an eventual replacement for) Rhinoscript. In addition to running any standard Python code, it can also import the Rhino API which allows you to work with Rhino's native Classes including all of it's geometry types. Using these libraries designers can use Python to control almost every feature of Rhino, from the model geometry, to its views, cameras, and even the user interface.

You can also work with Python directly in Grasshopper through a special Python component. In the past you needed to download an external Grasshopper library to get access to this component but the Grasshopper included in the latest versions of Rhino (6 and 7) come with this component installed. This means there is nothing extra to install and as long as you have Rhino 6 ot 7 you have everything you need to start working with Python in Grasshopper!

The great thing about working with Python in Grasshopper is that it allows you to mix and match between working with code and normal Grasshopper components. This way, there is no pressure to develop your entire model just through code starting with a blank text file, which can be very intimidating for people just starting out with scripting or computational design. Instead, you can develop most of the model using standard Grasshopper components, and only use Python code to do more complex tasks that are difficult or impossible in standard Grasshopper. In a way, Python in Grasshopper is like a ‘gateway drug’ into using code for computational design. You can start off by writing small, simple scripts for specific purposes, and gradually develop more and more complex code as you learn.

## Using the GHPython component

To get started with Python in Grasshopper, you can find the GHPython component in the `Maths` tab of Grasshopper.

![python component](images/python_component.png#img-full)

Let’s put one of these components onto the canvas and see how it works. You can see that the GHPython component has input and output ports just like any other component in Grasshopper, except it can have any number of inputs and outputs and you can call them whatever you want.

You can add more inputs and outputs by zooming in on the node until you see minus icons appear next to the input/output names and plus icons appear between them. You can use these icons to either add or remove inputs and outputs. You can also rename them by right clicking on the name and entering a new name in the text box at the top of the menu.

![renaming outputs](images/renaming_outputs.png#img-full)

These inputs and outputs are automatically brought into the Python script where you can use them as variables. This allows the Python script to interact with the rest of your Grasshopper model by bringing data in through input variables and then outputting other data that was created within the script.

Double clicking on the center of the node brings up the script editing window where you can write the actual Python code. Let’s create a simple ‘hello world’ example to see how this works.

![renaming outputs](images/hello_world.png#img-full)

Change the name of one of the Python component's inputs to ‘input’ and the name of one of the outputs to ‘output’. Plug a `Panel Component` into the input and type whatever you want into the `Panel`. Attach another `Panel Component` to the output so we can see the results.

Now type this line of code into the script window:

```
output = "hello " + input
```

and click the `Test` button at the bottom of the window. This button will execute the script and you should see the results above. Clicking `OK` will save changes to your script and close the editor window. Clicking `Close` will close the window without saving changes. This simple example brings in text from the Grasshopper canvas through its input port, joins this text to another piece of text, and then assigns the result to the output port, which can then be used on the Grasshopper canvas.

Integrating code into Grasshopper like this is a very powerful way to extend the basic functionalities of Grasshopper and will allow us to create interesting and complex models using the full tools of computation. At this point you should be ready to start learning Python. Try going through the Fundamentals of Python tutorials and practice writing the code into the code window within a GHPython component. You can also go to the next module in this sequence where we will learn how to import the Rhino library which will give us access to all of Rhino's native Classes, including it's geometry types, so we can start working with them in our Python scripts.

## Learning more

For more information about learning the Python programming language you can follow these guides:

- https://wiki.python.org/moin/BeginnersGuide/NonProgrammers
- https://wiki.python.org/moin/BeginnersGuide/Programmers

For more specific information on working with Python in Rhino and Grasshopper you can consult these resources:

- http://developer.rhino3d.com/guides/rhinopython/ — Rhino’s Python support page.
- http://www.rhino3d.com/download/IronPython/5.0/RhinoPython101 — book about using Python in Rhino.
- https://developer.rhino3d.com/api/RhinoCommon/html/R_Project_RhinoCommon.htm — documentation of the Rhino API. This includes documentation of all of Rhino's native Classes as well as code samples in Python as well as C# and VB.
- http://developer.rhino3d.com/api/RhinoScriptSyntax/win/ — documentation of the rhinoscriptsyntax library. This is a helper library that makes some functionalities easier to write in code. It was developed to replicate some of the functionalities of the old RhinoScript syntax making it easier to transition from RhinoScript to Python.
- http://developer.rhino3d.com/guides/rhinopython/python-rhinoscriptsyntax-introduction/ — support for the rhinoscriptsyntax Python library.
