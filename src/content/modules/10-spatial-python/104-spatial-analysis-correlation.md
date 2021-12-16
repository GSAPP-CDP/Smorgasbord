---
moduleid: 104
title: Spatial Analysis – Correlation
published: True
slug: spatial-analysis-correlation
---


# Spatial Analysis – Correlation

![missing-image](images/Patricio-Gonzalez-Vivo-3D-Data-Map-NYC.gif)
*Random City, Patricio Gonzalez*


## Module Summary


In this module we discuss analytic methods commonly used to interrogate spatial data, namely, spatial correlation. Spatial auto-correlation explores the relationship between properties in geographic space – seeing whether an objects placement can tell us something about another phenomena. For example, we might consider income or house prices in NYC and ask: Is there a relationship between the density of trees in a neighborhood and the income of it's residents? Can a properties distance to Manhattan tell us anything about it's price? Correlation helps us answer these questions quantitatively and visualize or describe them statistically.


---

<br/>
<br/>

For this module we will be using the [Pandas](https://pandas.pydata.org/), [GeoPandas](https://geopandas.org/en/stable/), [Matplotlib](https://matplotlib.org/), [Seaborn](https://seaborn.pydata.org/) and [Shapely](https://shapely.readthedocs.io/en/stable/manual.html) Python libraries. Ensure to `pip install` them on your machine, if you don't already have them, and import like so:

```python
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt
import seaborn as sns
from shapely.geometry import Point, Polygon
```

<br/>


### Correlation

![missing-image](images/spatial_correlation.png#img-full)
According to Waldo Tobler's First Law of Geography: "everything is related to everything else, but near things are more related than distant things." This simple but profound statement assumes that geographic distance can explain the processes behind why things are located where they are. Spatial (auto)correlation helps us quantify the relationship between objects in geographic space and their numeric values, based on proximity. A real world example of this is house prices. If you picked a random house in New York City from a listing website like Zillow and found that the prices of the house was $1.6M, there is a very high likelihood that the house next door (if similar in size and amenities) would be selling for a similar prices, versus a house 10 miles away would be selling for a lot more or less. Spatial correlation helps us understand:

- If things are clustered or dispersed over a geographic region.
- Measure spatial inequality be it in terms of income, access to social services, demographics, etc.
- Describing ecological and environmental conditions.

For this demonstration we will look at the relationship between Brooklyn houses prices in relation to their distance to Manhattan. We will be studying the clustering of higher price houses around the island of Manhattan, the hypothesis being that the closer a house is to Manhattan the higher the sales price. We will utilize multiple datasets provided by NYC Open Data:

- [Annual sales of properties sold in NYC](https://data.cityofnewyork.us/City-Government/NYC-Citywide-Annualized-Calendar-Sales-Update/w2pb-icbu)
- [NYC borough boundaries](https://data.cityofnewyork.us/City-Government/Borough-Boundaries/tqmj-j8zm)

Correlation can be visualized and explored in numerous ways, typically it is shown via a scatter plot which show the numeric value of two variables along an X and Y axis. But it can also be shown spatially on a map, which is intuitive but less precise, using the values of one value to color objects while distances between objects are seen relative to locations in geographic space. Let's see how we could first show the relationship between house prices and distance to Manhattan using points on a map.

The first step will be to load the sales data as a Pandas DataFrame:

```python
path = '/Users/cbailey/Downloads/NYC_Citywide_Annualized_Calendar_Sales_Update.csv'
houses = pd.read_csv(path)
```

Next we will create a function to convert the lat long columns in a Shapely Point object, allowing us to convert the DataFrame into a geographic GeoDataFrame:

```python
def lat_lng_to_point(data):
    return Point([data['Longitude'], data['Latitude']])

houses['geom'] = houses.apply(lat_lng_to_point, axis=1)
gdf = gpd.GeoDataFrame(houses, geometry='geom', crs='EPSG:4326')
```

Next we will load the NYC borough boundaries GeoJSON file as a GeoDataFrame:

```python
path = '/Users/cbailey/Downloads/Borough Boundaries.geojson'
nyc_geo = gpd.read_file(path)
```

We will use the the boundary of Brooklyn to filter the sales data, using the GeoPandas `.sjoin()` function:

```python
bk = nyc_geo.loc[nyc_geo['boro_name']=='Brooklyn']
bk_houses = gpd.sjoin(gdf, bk)
```

With every data analytics project, spatial or otherwise, there is always a process of data cleaning required to ensure your data is of relevance. The sales data includes sales of every property type the City of New York tracks, so the first step in cleaning will be to only observe sales of single family dwellings. And If we look at the distribution of sales prices, we can see that there are outliers in the dataset:

```python
# filter the data to only have single family homes
mask = bk_houses['BUILDING CLASS CATEGORY']=='01 ONE FAMILY DWELLINGS'
bk_houses = bk_houses.loc[mask]

bk_houses.hist(bins=20);
```

![missing-image](images/sales_price_dist.png#img-right)
We can see from the histogram that the sales data is highly left skewed with lots of homes being sold for a very low price (even zero), with just a handful of homes sold for $10M+. Now it is possible to sell a house for zero dollars, but it is likely that the transaction was a gift to a family member, a way to avoid the IRS, or some other reason that is irrelevant to our analysis. Therefore, we restrict the analysis to only consider houses sold between $1-$3 million.

```python
mask1 = (bk_houses['SALE PRICE'] > 1e6) & (bk_houses['SALE PRICE'] < 3e6)
bk_houses = bk_houses.loc[mask]
```

Now we are ready to plot the data on a map to explore any inherent relationships:

```python
# plot the boundaries of Manhattan & Brooklyn as a base
ax = nyc_geo.loc[nyc_geo['boro_name'].isin(['Manhattan','Brooklyn'])].boundary.plot(
    figsize=(18,16), linewidth=0.75, color='black')

# draw rings around the centroid of Manhattan (optional)
nyc_geo.loc[nyc_geo['boro_name']=='Manhattan'].boundary.\
    centroid.buffer(0.1).boundary.plot(ax=ax, linestyle='--', color='grey',
                                       linewidth=0.75)
nyc_geo.loc[nyc_geo['boro_name']=='Manhattan'].boundary.\
    centroid.buffer(0.15).boundary.plot(ax=ax, linestyle='--', color='grey',
                                        linewidth=0.75)
nyc_geo.loc[nyc_geo['boro_name']=='Manhattan'].boundary.\
    centroid.buffer(0.2).boundary.plot(ax=ax, linestyle='--', color='grey',
                                       linewidth=0.75)
# plot individual houses using sales price as color
bk_houses[(bk_houses['SALE PRICE'] > 1e6) &
          (bk_houses['SALE PRICE'] < 3e6)].plot(
    ax=ax, column='SALE PRICE', legend=True, cmap='Spectral', alpha=0.5,
    legend_kwds={'shrink': 0.6})
ax.set_axis_off();
```
![missing-image](images/sale_price_map.png#img-full)


Next we need to measure the distance between every house in Brooklyn to the Manhattan shoreline. To do this we need to find the [closest point](https://en.wikipedia.org/wiki/Closest_pair_of_points_problem) on the Manhattan boundary/shoreline to a given house. Shapely has a `.nearest_points()` function that makes this process easier. Below we create a function call `nearest` that takes a point and a collection of geometries as input and returns the distance between the first point and the closest point on the geometries. We will use the `unary_union` method in Geopandas on the Manhattan geometry to get the union of it's boundaries:

```python
# get just the geometry of Manhattan
mn = nyc_geo.loc[nyc_geo['boro_name']=='Manhattan']

# nearest function to return the closest distance
def nearest(point, pts):
    return nearest_points(
        point, pts)[1].distance(
        point)

# unionize the Manhattan geometry
mn_pt = mn.geometry.unary_union

# create a new column with the distances for every house in Brooklyn
bk_houses['dist_manhattan'] = bk_houses['geom'].apply(lambda x: nearest(x, mn_pt))
```

To measure the correlation between to variables in Python, we can use the [Scipy](https://en.wikipedia.org/wiki/SciPy) (scientific computing) library that comes built in with many instances of Python. The library has a statistical computing module called `stats` containing a `pearsonr` class that we will use to analyze the relationship between house prices and their distances to Manhattan. The pearsonr function returns the P value and correlation coefficient (values between -1 to +1), which tell us the strength of the relationship, 1 being a perfect positive correlation and -1 perfect negative correlation. However, correlation is usually visualized on a scatter plot to get an immediate visual understanding. We can also utilize the matplotlib library to do the scatter plot:


```python
pearsonr(bk_houses['SALE PRICE'], bk_houses['dist_manhattan'])
```

You should see approximate values of: `(-0.4610971045980508, 0.0)` The first number is the correlation coefficient which suggests a negative correlation, meaning the smaller the distance to Manhattan, the higher the house prices. A score of -0.46 implies that distance to Manhattan explains ~46% of the variation in Brooklyn houses, almost validating our initial assumption. While the second number is the P value, this is the likelihood that we'd see the same results after numerous attempts of the same piece of analysis, the lower the P value the more confident we can be in the results – a good thing.

Plotting this on a scatter will show:

```python
plt.scatter(bk_houses['dist_manhattan'], bk_houses['SALE PRICE']);
```

![missing-image](images/sale_price_scatter.png#img-right)
Looking at the scatter plot, we do not see any clear pattern in the data to suggest such a strong relationship between the two variables. This suggests that there are other confounding factors that are "contaminating" our analysis. For example, although we have filtered the data to only look at single family homes, there are countless factors that go into the sale price of a home, such as square footage, material finishes, year built, etc. With any study of correlation, it is best to control for these factors (or confounding variables) as much as possible. Below we will restrict our data to only consider homes sold in 2019, are within 1000-2000 sqft, and built before 1980. This way we are only analyzing distance as a factor.

The `GROSS SQUARE FEET` column has a text data type, so we need to confert it to a float by removing commas and negative signs, and then utilizing the `.astype()` function to convert to a float:

```python
sqft = bk_houses['GROSS SQUARE FEET'].str.replace(',|- ','').astype(float)
```

Next we will create a series of conditional masks to constrain the square footage, sale price, year built and ensure there are no commercial units within a house:

```python
mask1 = (sqft <= 2000) & (sqft >= 1000)
mask3 = (bk_houses['SALE PRICE'] > 1e6) & (bk_houses['SALE PRICE'] < 3e6)
mask5 = bk_houses['COMMERCIAL UNITS'] < 1.
mask6 = bk_houses['YEAR BUILT'] <= 1980
```

Finally, in order to ensure the sale date is within 2019, we need to convert the `SALE DATE` column to a datetime object. We will utlize the Pandas `.to_datetime()` function to do this:

```python
dates = pd.to_datetime(bk_houses['SALE DATE'])
mask4 = (dates< '2019-12-31') & (dates>'2019-01-01')
```

Now if we apply all of these to our GeoDataFrame we should see a much smaller sample of data:

```python
data = bk_houses[(mask1) & (mask2) & (mask3) & (mask4) & (mask5) & (mask6)]
print(data.shape)
```

You should see a sample of `(217, 37)`. Now we can rerun the the Pearson R correlation and plot a scatter with a regression line to see the true nature of the relationship between house prices and distances to Manhattan. This time we will add a title, make the dots transparent, and give them an edge color to make the visualization pop. We will once again use the Seaborn library which makes this type of visualization easy:

```python
print(pearsonr(data['SALE PRICE'], data['dist_manhattan']))

# output
(-0.33425418464725665, 4.6266592679351666e-07)
```

```python
# define x and y variables used for plotting
x = data['dist_manhattan']
y = data['SALE PRICE']

# set the background color and size
sns.set(rc={'figure.figsize':(14.7,11.27)})
sns.set_style("white")
# create the Seaborn regression plot
# we will use dictionaries to change the line styles of the plot
ax = sns.regplot(x, y, ci=None,
            scatter_kws={
                'color':'orange',
                'edgecolor':'black',
                'alpha':0.75},
           line_kws={
               'color':'red',
               'linestyle':'dashed',
               'linewidth':0.75
           });
# label the x and y axis
plt.xlabel('Distance to Manhattan')
plt.ylabel('Sale price $ (millions)')

# remove the top and right axis
ax.spines['right'].set_visible(False)
ax.spines['top'].set_visible(False)
```

![missing-image](images/sale_price_corr.png#img-full)
As you can see, controlling for square footage, year built, sale date, etc increased the strength of the correlation coefficient, revealing a slightly stronger relationship between house price and distance to Manhattan.



---


<br>

## Challenge

Using the closest nearest point function, see if you can calculate the nearest tree for each house in the sale price dataset.
