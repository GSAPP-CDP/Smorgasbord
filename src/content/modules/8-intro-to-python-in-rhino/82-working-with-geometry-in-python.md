---
moduleid: 82
title: Working with geometry in Python
published: True
slug: working-with-geometry-in-python
authors:
 - "Danil Nagy"
---

# Working with geometry in Python

## Module Summary

This module demonstrates how we can use the Rhino Libraries to create a basic attractor point example that takes a grid of Points to define a set of Circles and another Point to control the radii of the Circles.

## Introduction

In the last tutorial, we saw how we can define geometry in Python based on a single input. But what if we want to work with inputs that contain multiple values? Let’s extend our definition to see how this works.

## Working with sets of data

Instead of a single point we will now create a grid of points by using two `Series` components to create two lists of 5 values each, and plug those lists in as the x and y inputs of the `Point` component. To get a grid we need to graft one of the number lists, which we can do with a shortcut by right-clicking on the output of the second `Series` component and selecting 'Graft'. We will also flatten the resulting set of points by right-clicking on the output of the `Point` component and selecting 'Flatten'. Let’s also reduce the Circle radius to 0.4 so we can see the Circles easier.

![grasshopper setup](images/2-01.png#img-full)

> Creating a grid of Circles

There are two main ways to handle multi-value inputs with the `Python` component. The default way is to have the `Python` component act just like any other component in Grasshopper. This means that when you plug in a multi-value data stream into any of the component's inputs, the component will execute once for each value in the stream. This is how our component is working now. You can see that in the script we are only referencing a single point, and the component is actually running 25 times to create a Circle for each point in the stream.

The second way to handle multi-value data streams is to bring them directly into the `Python` component as a List. In this case the component will execute only once, and you can work with the different values directly in the script. To enable this kind of input you need to right-click on the input's name in the `Python` component and select 'List Access'. Now all 25 Points are brought into our script as a Python List, so we need to change our code to iterate over all the Points and create a Circle for each one. We also need to define the 'a' output as a List, and use the `.append()` method to add the Circles to that List as we generate them.

```python
a = []
for pt in x:
	a.append(rh.Circle(pt, 0.4))
```

![grasshopper setup](images/2-02.png#img-full)

> Inputting all the points as a List into Python

So which of these strategies should you use when working with multi-value data streams?

For simple tasks where you only want to deal with one value at a time it is often easier to use 'Item Access' mode and let Grasshopper handle the looping. However, for more complex tasks it is often easier to bring the data in all at once using 'List Access' mode and use Python's loops and conditionals to deal with it directly. Often this allows you to work around Grasshopper's complicated DataTree structure which can be confusing and non-intuitive for advanced tasks involving complex data structures.

However, what if our data is already in a DataTree structure in Grasshopper and we need to maintain that structure in our script? Can we import the DataTree directly into our Python script and work with it there?

## Working with DataTrees in Python

Working with Grasshopper's DataTree structure in Python adds extra complexity and should be avoided if possible. If we only need to work with one value in the Tree at a time we can use 'Item Access' mode and Grasshopper will maintain the same DataTree structure in the output (you can try this by reverting to our 'Item Access' implementation above and getting rid of the 'Flatten' shortcut in the 'Pt' output of the `Point` component). You can also flatten the DataTree before inputting it into Python and use the 'List Access' mode to work with it directly as a single Python List as we did above.

However, if you absolutely must deal with the DataTree structure directly in Python, you can do so by changing the input type to 'Tree Access' and bringing the DataTree structure directly into Python. Let’s see how we can work with this data by making some modifications to our circle script. Let’s take off the 'Flatten' shortcut in the `Pt` component's output and change the 'x' input of the Python component to 'Tree Access' mode.

![grasshopper setup](images/2-03.png#img-full)

> Working with DataTrees in Grasshopper

This will bring the center points into our script as a DataTree with 5 branches of 5 points each. The data is now represented in Python as a special type called 'DataTree' (we can see this by using the `type()` function in Python and printing the results).

```python
print type(x)
```

This data type has several properties and methods that allow you to work with the DataTree structure and access the data in different branches of the Tree.

- The `.BranchCount` property stores the number of branches in the DataTree
- The `.Path()` method returns the path of a branch given its index
- The `.Branch()` method returns a List of data in a branch given its index

Using these methods we can modify our script to work directly with the Tree data. First we create a loop to iterate over all the branches in the tree (we use `range()` to create a List of indexes from 0 to the number of branches) and loop over them using the variable `i`.

```python
for i in range(x.BranchCount):
```

Then we create a second loop to iterate over each point stored in each branch. Remember that the `i` variable is iterating over the index of each branch, so we can use `x.Branch(i)` to access the data in each branch one at a time.

```python
    for pt in x.Branch(i):
```

What if we also want to output our results in DataTree format? Again, this adds extra complexity to our script and should be avoided. If we really need to do it though, we can. In this case we need to actually create a new _DataTree_ object, which requires us to import two additional classes from the main Grasshopper library into our script. We can import them by writing these two lines at the top of our script:

```python
from Grasshopper import DataTree
from Grasshopper.Kernel.Data import GH_Path
```

The _DataTree_ class allows us to create new DataTree objects while the _GH_Path_ class allows us to create path variables which tell the DataTrees where to store data. Both of these classes are found within the main Grasshopper Python library and can be imported using the `from ... import ...` syntax to import only the specific classes we need.

![grasshopper setup](images/2-04.png#img-full)

> Creating DataTrees in Python

Now we need to change the 'a' output to work as a DataTree instead of as a basic Python List. First we declare 'a' as an instance of the `DataTree` class:

```python
a = DataTree[object]()
```

Then inside of the first loop we create a new variable to represent the path to the branch where we will place the data:

```python
for i in range(x.BranchCount):
    newPath = GH_Path(i)
```

The GH_Path class can define any DataTree path by taking in a sequence of integer values. In this case we pass in the `i` variable which is storing the index of each incoming branch. This will in effect replicate the structure of the incoming DataTree.

Finally, we use the DataTree's `.Add()` method to add each Circle to the Tree based on the specified path.

```python
    for pt in x.Branch(i):
        a.Add(rh.Circle(pt, .4), newPath)
```

## Computing geometry in Python

Let's finish this section by looking at how we can use the `Rhino.Geometry` library to do geometry-based computation directly in Python. First, let's extend our definition by creating a new input to the `Python` component which takes in a single point referenced from the Rhino document. Remember to also change its 'Type hint' to 'Point3d' so that Python converts it to Point geometry.

Now we will change our circle definition to compute the radius of each Circle dynamically based on the distance from its center to our referenced point.

![grasshopper setup](images/2-05.png#img-full)

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

![grasshopper setup](images/2-06.png#img-full)

> Moving the point to change the circle radii

## Conclusion

In this module, we looked at how we can use the `Rhino.Geometry` library to replicate all the capabilities of Rhino and Grasshopper directly with Python code. Although working this way takes practice, it gives us a huge degree of control over our geometry and allows us to describe complex computational models beyond the limits of what can be directly done in Grasshopper.

# CHALLENGE:

Can you modify the definition to work with two attractor points instead of one?

![grasshopper setup](images/2-07.gif#img-full)

> Hint: Start by creating an additional point in Rhino and referencing it into the Grasshopper definition. Then input the new Point into the `Python` component and use it's distance to each point along with that of the first Point to calculate the final radius of each Circle. You can try a variety of ways to combine the effect of both attractors, for example adding the two distances together, or taking the minimum of the two distances using Python's built-in `min()` function.
