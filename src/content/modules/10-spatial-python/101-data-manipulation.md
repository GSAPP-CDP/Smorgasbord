---
moduleid: 101
title: Data Manipulation
published: True
slug: data-manipulation
authors:
 - "Carlo Bailey"
---


# Data Manipulation in Python

![missing-image](images/Lights_Out_Simulation_of_Unmanned_Data_Center_OMA.jpg)
*MA, Lights Out, 2019, Simulation of Unmanned Data Center*


## Module Summary


Python is instrumental in the fields of artificial intelligence, machine learning, and geospatial data analytics. One of the main reasons for this is the wide array of open source libraries Python has that make data manipulation and processing super fast. Data manipulation is the process of organizing, modifying, merging, and transforming data in order to make it more readable or easier to analyze. It underpins a lot of the subsequent geospatial techniques in this sequence, and is crucial to understand in order to use Python for working with Big Data. In this module we will cover the basics of the Pandas and Numpy libraries, how to read, write, and manipulate large datasets.

Spoiler alert! This is perhaps the most boring module in the sequence, its all downhill after this.

## Why is this important?

[According to many](https://qz.com/1126615/the-story-of-the-most-important-tool-in-data-science/), Pandas is one of the driving forces that made Python the most popular programming languages in recent years. Pandas offers powerful, expressive and flexible data structures that make data manipulation and analysis easy, among many other things. Whereas in the past it might've taken 50 lines of code to read a CSV and iterate over it, with Pandas, you can do the same operation in 2 lines of code. Initially built for use within the financial sector, it is now widely used throughout the AI and data science community. Enabling individuals with non computer science backgrounds to do big data analysis.

---
<br/>
<br/>

For this module we will be using the Pandas Python libraries. Ensure to `pip install` on your machine, if you don't already have it, and import like so:

```python
import pandas as pd
```

<br/>

### Pandas Basics: DataFrames + Series

Pandas relies on two data structures that pretty much power nearly all other operations – Series and DataFrames. Understanding these are crucial to getting comfortable with the rest of the library’s functionality. DataFrames can be thought of as spreadsheets or tables that contain (horizontal) rows and (vertical) columns of data. They are highly flexible, enabling the storage of almost any data types – text, numbers, polygons, etc. Rows in a DataFrame represent a single record, while the columns represent an attribute of that record.

![missing-image](images/dataframe.png#img-full)

There are many ways to construct a DataFrame – one of the most common is to provide a dictionary with lists of equal length, inside the `DataFrame()` function. The keys of the dictionary are the column names, that should have equal sized lists as values, where each item of the list is a row. Open up a new Jupyter (or Colab) notebook and paste:

```python
data = {
  'column-1': [1, 2, 3, 4, 5]
  'column-2': ['a', 'b', 'c', 'd', 'e']
  'column-3': [2020, 2021, 2022, 2023, 2024]
}

# turn the above dictionary into a Pandas dataframe object
df = pd.DataFrame(data)
```

Now if you type `df.head()` in a new cell, you should see the following table:

**column-1**| **column-2**| **column-3**
:-----:|:-----:|:-----:
1|	a|	2020
2|	b|	2021
3|	c|	2022
4|	d|	2023
5|	e|	2024


Often times while using Pandas you read in external datasets rather than create your own. Pandas can read many different files types including: CSVs, Excel, and HTML, amongst others. To demonstrate, we will get data from the NYC Open data portal and download their [2015 Tree Census](https://data.cityofnewyork.us/widgets/uvpi-gqnh) dataset. The portal has thousands of datasets from various city institutions, all free to access. Click on the `MENU` button in the top right corner, select the `DOWNLOAD` option and then select CSV as the format.

Once you have the file located in a convenient location on your laptop, reading the file as a Pandas DataFrame object is as simple as using the `.read_csv()` function in Pandas. The function takes as it's main argument, a file path of the CSV you are trying to read.

```python
path_to_file = '/Users/cbailey/Downloads/2015_Street_Tree_Census_-_Tree_Data.csv'
df = pd.read_csv(path_to_file)
```

Having a look at the individual rows and values of your data, is very important when working with large or external datasets. It's useful to understanding what is contained within a dataset. It's also good practice for catching errors, particularly the most egregious ones – like knowing that a column that is supposed to be numeric actually contains text – and is vital to do before any modeling or analysis. Pandas provides numerous functions to make this process easy:

- [`.head()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.head.html)
- [`.tail()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.tail.html#pandas.DataFrame.tail)
- [`.info()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html)
- [`.describe()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html)

The `head` and `tail` functions return the first or last *n* rows of a DataFrame, and is useful for quickly looking at the values in your object. The functions are a [method](https://www.askpython.com/python/built-in-methods/dot-notation) of the DataFrame object, as such can be used with dot notation when calling the DataFrame of interest:

```python
df.head()
```

Running the above cell in your notebook should display a table similar to the one below, where each row is an individual tree, and each column is the various attributes tied to the tree, such as species, diameter, health, etc.

![missing-image](images/tree_data.png#img-full)


The `info` function returns information about a particular DataFrame such as the number of missing values by column, the data type and memory usage, which can be useful when working with extremely large datasets.

```python
df.info()
```

The `describe` function returns summary statistics for a given DataFrame or Series, displaying things like the mean, median, standard deviation, max values, etc for each column. It also returns information for non-numeric data like categories that would include things like counts, number of unique values, etc. It also uses dot notation like all the above methods to use it.

```python
df['stump_diam'].describe()
```

```
count    683788.000000
mean          0.432463
std           3.290241
min           0.000000
25%           0.000000
50%           0.000000
75%           0.000000
max         140.000000
Name: stump_diam, dtype: float64
```

---
<br/>
<br/>

**Series** can be thought of as column objects or a much smarter and faster version of lists. There are many ways to create a Series objects, but one of the simplest is to provide a list of values around the `Series()` object constructor:

```python
pd.Series([1, 2, 4, 8])
```

Series consist of an array / list of values, alongside an associated list of labels, called an index. You can provide a column name and index values when creating a Series:

```python
data = pd.Series([1, 2, 3, 8], name='column-1', index=['a', 'b', 'c', 'd'])
```

Providing a column name and or index is useful for accessing a subset of values in large datasets – which we will cover in more depth in the next section.

---
<br/>
<br/>

### Indexing and Selecting Data

![missing-image](images/subset_selection.png#img-full)

Often times in Pandas we do not want to work with every data point at a time, rather, we want to select a subset of data which is referred to as indexing or selecting data. We can choose to work with a single row or column, or perhaps select a range of columns or rows.

In Pandas we use square brackets `[]` to select a subset of a DataFrame or Series object. For example, we can select only data from the health column in the Tree Census DataFrame by name. There are two ways to do this:

```python
# Option 1: select the column using the column name
df['health']

# Option 2: use dot notation and the column name
df.health
```

We can similarly use square brackets `[]` to select a set of rows from the DataFrame, like we do with Python lists:

```python
# To select rows 5 to 10
df[5:10]

# To select all rows up to 100
df[:100]
```

We can also more explicitly select rows based on their index label or position using the `loc` and `iloc` methods. `loc` is primarily used when the DataFrame axis is labeled, while `iloc` is used to select rows by their numbered position. For example, to select only the first row in a DataFrame:

```python
df.iloc[0]
```

One of the most powerful concepts in Pandas is selecting data on some condition. Taking our Tree Census DataFrame as an example, if we wanted to select only the rows that contained trees in good health we could do:

```python
mask = df['health'] == 'Good'
df[mask]
```

Here, the mask variable contains the condition we are interested in satisfying: "which trees are in good health", and then we use square brackets again to select all the rows in the dataframe where this condition is met. We can do a similar thing for numeric data types like selecting all rows where the tree diameter is above 20:

```python
mask = df['tree_dbh'] > 20
df[mask]
```

---

<br/>
<br/>

### Vectorization

An important concept in Pandas operations is vectorization – which is a programming paradigm that allows operations to be applied to an entire list of values without doing loops in Python. For example, if you wanted to multiply a list of values by a single number in Python you would have to loop through every value and either replace the original number or store the results in a new list:

```python
values = [1, 2, 4, 8]
new_values = []
n = 2

for i in values:
  result = i * n
  new_values.append(result)
```

The above code creates a new list of values `[2, 4, 8, 16]` and would be quick to run on a small amount of data, but when dealing with thousands or even millions of values, would start to be fairly cumbersome. With vectorization, Pandas allows us to do the above operation much quicker and in one line of code:

```python
column = pd.Series([1, 2, 4, 8])
n = 2
new_column = column * n
```

Above every value within the `column` variable is multiplied by 2. Vectorization also allows us to do other aggregate computations quickly, like finding the max, min or average value of a column:

```python
new_column.max()

# or

new_column.mean()
```

It is also handy when doing matrix–matrix and vector–matrix multiplication.

---


<br>

## Additional Resources

- [Python for Data Analysis](https://www.oreilly.com/library/view/python-for-data/9781449323592/) Is a great nuts and bolts overview of the Pandas library written by it's original author, Wes McKinney.

## Challenge

Using the 2015 Tree Census dataset, count the number of trees throughout the city by health classification (e.g. how many trees in good, or poor health). Hint: use a condition to select the subset of trees in each condition, and then note the size or shape of the dataframe returned.
