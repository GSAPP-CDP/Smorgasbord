---
moduleid: 73
title: Working with geometry in Python
published: True
slug: working-with-geometry-in-python
---

# Working with geometry in Python

## Module Summary

This module demonstrates how we can use the Rhino API to create a basic attractor point example that takes a grid of points to define a set of circles and another point to control the radii of the circles.

## Introduction

In the last tutorial, we saw how we can define geometry in Python based on a single input. But what if we want to work with inputs that contain multiple values? Let’s extend our definition to see how this works.

## Working with sets of data

Instead of a single point we will now create a grid of points by using two `Series` components to create two lists of 5 values each, and plug in those lists as the x and y components of the `Pt` component. To get a grid we need to graft one of the number lists, which we can do with a shortcut by right-clicking on the output of the second `Series` component and selecting 'Graft'. We will also flatten the resulting set of points by right-clicking on the output of the `Pt` component and selecting 'Flatten'. Let’s also reduce the circle radius to 0.4 so we can see the circles easier.

![grasshopper setup](images/01.png#img-full)

> Creating a grid of circles

There are two main ways to handle multi-value inputs with the `Python` component. The default way is to have the `Python` component act just like any other component in Grasshopper. This means that when you plug in a multi-value data stream into any of the component's inputs, the component will execute once for each value in the stream. This is how our component is working now. You can see that in the script we are only referencing a single point, and the component is actually running 25 times to create a circle for each point in the stream.

The second way to handle multi-value data streams is to bring them directly into the `Python` component as a list. In this case the component will execute only once, and you can work with the different values directly in the script. To enable this kind of input you need to right-click on the input's name in the `Python` component and select 'List Access'. Now all 25 points are brought into our script as a Python list, so we need to change our code to iterate over all the points and create a circle for each one. We also have to define the 'a' output as a list, and use the `.append()` method to add the circles to that list as we generate them.

```python
a = []
for pt in x:
	a.append(rh.Circle(pt, 0.4))
```

![grasshopper setup](images/02.png#img-full)

> Inputting all the points as a list into Python

So which of these strategies should you use when working with multi-value data streams?

For simple tasks where you only want to deal with one value at a time it is often easier to use 'Item Access' mode and let Grasshopper handle the looping. However, for more complex tasks it is often easier to bring the data in all at once using 'List Access' mode and use Python's loops and conditionals to deal with it directly. Often this allows you to work around Grasshopper's complicated Data Tree structure which can be confusing and non-intuitive for advanced tasks involving complex data structures.

However, what if our data is already in a tree structure in Grasshopper and we need to maintain that structure in our script? Can we import the data tree directly into our Python script and work with it there?

## Working with data trees in Python

Working with Grasshopper's Data Tree structure in Python adds extra complexity and should be avoided if at all possible. If we only need to work with one value in the tree at a time we can use 'Item Access' mode and Grasshopper will maintain the same data tree structure in the output (you can try this by reverting to our 'Item Access' implementation above and getting rid of the 'Flatten' shortcut in the 'Pt' output of the `Pt` component). You can also flatten the Trees before inputting them into Python and use the 'List Access' mode to work with them directly as Python lists as we did above.

However, if you absolutely must deal with the Data Tree structure directly in Python, you can do so by changing the input type to 'Tree Access' and bringing the Data Tree structure directly into Python. Let’s see how we can work with this data by making some modifications to our circle script. Let’s take off the 'Flatten' shortcut in the `Pt` component's output and change the 'x' input of the Python component to 'Tree Access' mode.

![grasshopper setup](images/03.png#img-full)

> Working with Data Trees in Grasshopper

This will bring the center points into our script as a Data Tree with 5 branches of 5 points each. The data is now represented in Python as a special type called 'DataTree' (we can see this by using the `type()` function in Python and printing the results).

```python
print type(x)
```

This data type has several properties and methods that allow you to work with the tree structure and access the data in the different branches.

- The `.BranchCount` property stores the number of branches in the Data Tree
- The `.Path()` method returns the path of a branch given its index
- The `.Branch()` method returns a list of data in a branch given its index

Using these methods we can modify our script to work directly with the tree data. First we create a loop to iterate over all the branches in the tree (we use `range()` to create a list of indexes from 0 to the number of branches) and loop over them using the variable `i`.

```python
for i in range(x.BranchCount):
```

Then we create a second loop to iterate over each point stored in each branch. Remember that the `i` variable is iterating over the index of each branch, so we can use `x.Branch(i)` to access the data in each branch one at a time.

```python
    for pt in x.Branch(i):
```

What if we also want to output our results in Data Tree format? Again, this adds extra complexity to our script and should be avoided if possible. If we really need to do it though, we can. In this case we need to actually create a new *DataTree* object, which requires us to import two additional classes from the main Grasshopper library into our script. We can import them by writing these two lines at the top of our script:

```python
from Grasshopper import DataTree
from Grasshopper.Kernel.Data import GH_Path
```

The *DataTree* class allows us to create new Data Tree objects while the *GH_Path* class allows us to create path variables which tell the Data Trees where to store data. Both of these classes are found within the main Grasshopper Python library and can be imported using the `from ... import ...` syntax to import only the specific classes we need.

![grasshopper setup](images/04.png#img-full)

> Creating Data Trees in Python

Now we need to change the 'a' output to work as a Data Tree instead of as a basic Python list. First we declare 'a' as an instance of the `DataTree` class:

```python
a = DataTree[object]()
```

Then inside of the first loop we create a new variable to represent the path to the branch where we will place the data:

```python
for i in range(x.BranchCount):
    newPath = GH_Path(i)
```

The GH_Path class can define any Data Tree path by taking in a sequence of integer values. In this case we pass in the `i` variable which is storing the index of each incoming branch. This will in effect replicate the structure of the incoming Data Tree.

Finally, we use the Data Tree's `.Add()` method to add each circle to the tree based on the specified path.

```python
    for pt in x.Branch(i):
        a.Add(rh.Circle(pt, .4), newPath)
```

## Computing geometry in Python

Let's finish this section by looking at how we can use the `Rhino.Geometry` library to do geometry-based computation directly in Python. First, let's extend our definition by creating a new input to the `Python` component which takes in a single point referenced from the Rhino document. Remember to also change its 'Type hint' to 'Point3d' so that Python converts it to point geometry.

Now we will change our circle definition to compute the radius of each circle dynamically based on the distance from its center to our referenced point.

![grasshopper setup](images/05.png#img-full)

> Controlling circle radius with an attractor point

First we write a new line of code to compute the radius:

```python
        radius = pt.DistanceTo(y) / 5.0
```

We use the `.DistanceTo()` method of the circle's center point stored in the `pt` variable to compute the distance to the new point stored in the `y` variable and divide the distance by 5.0 to make all the circles smaller. We then change our circle definition to use this radius instead of the previous hard-coded one:

```python
        a.Add(rh.Circle(pt, radius), newPath)
```

This gives our circles a dynamic relationship to the referenced point, allowing us to create different patterns by moving the point in the Rhino document.

![grasshopper setup](images/06.png#img-full)

> Moving the point to change the circle radii

This example shows how we can use the `Rhino.Geometry` library to replicate all the capabilities of Rhino and Grasshopper directly with Python code. Although working this way takes practice, it gives us a huge degree of control over our geometry and allows us to describe complex computational models beyond the limits of what can be directly done in Grasshopper.

# Challenge - use multiple attractor points