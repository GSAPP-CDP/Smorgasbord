---
moduleid: 105
title: Spatial Analysis – Clustering
published: True
slug: spatial-analysis-clustering
authors:
 - "Carlo Bailey"
---


# Spatial Analysis – Clustering

![missing-image](images/Patricio-Gonzalez-Vivo-3D-Data-Map-NYC.gif)
*Random City, Patricio Gonzalez*


## Module Summary


In this module we discuss analytic methods commonly used to interrogate spatial data, namely, point pattern analysis, spatial auto-correlation and clustering. These techniques are concerned with discovering regularities or underlying structure in spatial data and understanding how or why things are located where they are. Point pattern analysis concerns the spatial arrangement and distribution of things in geographic space. Spatial auto-correlation explores the relationship between properties in geographic space – seeing whether an objects placement can tell us something about another phenomena. While, clustering is concerned with grouping geographies (or more broadly objects), based on the similarities between them. For example, we might consider the location of trees in NYC and ask:

- Are trees equally dispersed throughout the city (point pattern analysis)?
- Is there a relationship between the density of trees in a neighborhood and the income of it's residents (correlation)?
- Can we characterize places by the types of trees within them (clustering)?

These techniques help us answer these questions quantitatively and help us towards visualizing them or describing them statistically.

We will extend some of the topics explored in the previous module on geospatial data, that of discretization, to develop new methods for characterizing spatial phenomena. Again, we will be using the GeoPandas and Shapely libraries to manipulate geometric and geographic data in Python.


---

<br/>
<br/>

### Clustering

- ways to think about distance and proximity
- similarities between neighborhoods
- discretizing trees into neighborhoods and species
- clustering

<br/>
<br/>

---




<br>

## Challenges
