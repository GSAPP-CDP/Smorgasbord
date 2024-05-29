---
moduleid: 157
title: Making Data from Street View
published: True
slug: street-view
authors:
 - "Adam Vosburgh"
---

## Street View Static Maps API

This is a brief guide to using the Street View Static Maps API (Application Programming Interface). In here we will use an example python script to download images through the [Google Street View Static Maps API](https://developers.google.com/maps/documentation/streetview/overview).

This script is a modified version of the one used for [Making Data from Aerial Imagery](https://smorgasbord.cdp.arch.columbia.edu/modules/15-intro-qgis/156-aerial-imagery). Using this script, you can make work with street view imagery similar to Josh Begley's [Officer Involved](https://theintercept.co/officer-involved/).

Just like Tutorial 7, this tutorial is *not* an introduction to APIs, *nor* is it an introduction to Python. The tutorial walks you through how to batch download imagery using a CSV file of latitude and lognitude coordinates, and specify some parameters relevant to the way that Google collects are makes this data available. While the product is raster images, these are not geospatial rasters - they are not georeferenced, and do not ahve embedded geographic information.

At a high level the process is much the same as the previous tutorial: the python script processes your CSV file into an API query - essentially a URL. 

The outputs are image files (.png) that are not georeferenced and thus are best suited to use outside of a GIS software -- combined into grids, assembled for an animation or GIF 

## Instructions

### Prerequisites
Follow instructions for how to create a Google API key for the Static Maps API [here](https://developers.google.com/maps/documentation/streetview/get-api-key). You must enable billing for your API key in order to run the script, you will not incur any charges for the scale of project outlined in this tutorial. Every Google SKU account is granted $200 per month in credits towards API usage, this translates to being able to download 100,000 images from Google's Static Maps API for free each month. For more information on pricing see [this page](https://developers.google.com/maps/documentation/maps-static/usage-and-billing).

Important to mention here is to keep your API key a secret - if someone else obtains it, they could run up a massive bill. What this means in effect, is you should never post questions to online forums like stack exchange using your API key, and if you ever store code like this in a github reposity, you should hide your API key. There are endless ways to do this, but here is [one](https://stackoverflow.com/questions/44342276/how-to-push-code-to-github-hiding-the-api-keys). You do not need to worry about this for this tutorial, as we are not sharing this code anywhere.

### Step 0: Google colab

**Whereas the previous tutorial introduced methods to do this both on colab and on your local computer, for brevity's sake I will just do the former here. If you prefer not to use google services or to be able to run this without an internet connection, please cite [the previous tutorial](https://smorgasbord.cdp.arch.columbia.edu/modules/15-intro-qgis/156-aerial-imagery)**

Launch [Google Colab](https://colab.research.google.com/). This is a cloud-based programming environment that allows for the execution of Python code in the browser.

### Step 1 - formatting a csv file with latitude and longitude coordinates

The script below expects a CSV file in a specific format, with three columns, no headers/column names, column 1 contains a unique id for each point, column 2 contains latitude coordinates, column 3 contains longitude coordinates. A sample of five points are shown below.

```
304388,40.80217804,-73.94811558
523465,40.80582444,-73.96823242
178559,40.80821953,-73.95643891999998
523459,40.8055583,-73.96837025
523532,40.80871886,-73.96616471
```

These five points are borrowed from the 2015 Street Tree Census that we used in Tutorial 1. This specifically is a subset of that dataset, showing just the five largest trees of that sample that I filtered using the python library pandas (which is also used in this tutorial). The three columns in this dataset are `tree_id`, `latitude`, and `longitude`. [Here](https://github.com/GSAPP-CDP/Smorgasbord/blob/main/src/content/modules/15-intro-qgis/data/2015_street_tree_census.zip) is the full csv from tutorial 1, if you are curious about what the snippet of python looked like to get that five thickest trees, I will include that below.

Save that snippet above as `StreetView_test_points.csv`, or grab points of latitude/longitude of your own choosing (and in this case likely make the first column an index of 0,1,2 etc). You can do either by either pasting the text above into a text editor (making sure it is in plain text mode) and save it as `StreetView_test_points.csv`. Or you can use some spreadsheet software (google sheets, or excel) and create a table with three columns containing the values above and save it as a `.csv` file. When you reuse this script on you own you will likely be using latitude and longitude coordinates gathered from elsewhere -- you may export them from QGIS, or from EpiCollect, or manually input them into a spreadsheet. Before uploading them here be sure to format them exactly as shown above (usually by removing the headers). 

### Step 2 - Setting up Colab and uploading the csv file 

Open a new Google Colab notebook. This is the environment you will use to run the Python script which will query the Google Static Maps API.  

First you will import necessary modules and use the colab data uploader to add your csv file to the notebook. To accomplish this run the following code in the first cell of your notebook (copy and paste the code then click the play button next to the cell to run):

```python
from google.colab import files
import io
import pandas as pd

# upload data
uploaded = files.upload()
for fn in uploaded.keys():
  print('User uploaded file "{name}" with length {length} bytes'.format(
      name=fn, length=len(uploaded[fn])))
```
Use the `Choose Files` button that appears to navigate to the 'StreetView_test_points.csv' file that you have just created. 

### Step 2.5 - Editing Street Tree dataset

** You do not need to do this step, this is only here if you are curious to how I filtered the example dataset **

As written above, my sample of five points is the five largest trees in the [sample of the 2015 Street Tree Survey](https://drive.google.com/open?id=1ZpLafJbA2xRxJ55J8B4DsAveZBNSzUUD&usp=drive_fs) that we used in Tutorial 1. If you are modifying this with a different dataset, make sure to upload that dataset csv in the previous step (instead of StreetView_test_points) first. After you do that, uploading the result file again to use in the next stages.

```python
df_StreetTrees = pd.read_csv("/content/2015_Street_Tree_Census_subset_um.csv")

# Filter for the 5 largest values in 'tree_dbh'
df_StreetTreesFilter = df_StreetTrees.nlargest(5, 'tree_dbh')

# Specify columns to keep in the dataset to download
columns_to_keep = ['tree_id', 'latitude', "longitude"]

# Keep only the specified columns
df_download = df_StreetTreesFilter[columns_to_keep]

df_download.to_csv("/content/StreetView_test_points.csv", header=False, index=False)
```

This will enable us to visualize the largest street trees in our sample. However, a downside here is that we do not know where we should point the street view camera to accurately capture the specific tree. There are ways to figure that out, but be aware of the limitations inherent in this API.

### Step 3 - Define and run Python function to query API

Unlike the Static Maps API, the Street View API does not necessarily produce imagery form an exact point. What it does is it looks for a captured panorama image *near* the location that you provide it. From there, it has additional parameters that let you define what part of the panoramic image you want to download. Below is a summary of those. While these parameters are not required to run the API, I have written the function with them, in order to make it easier for you to edit them to values of your liking: 

* `heading` - if not provided defaults directionality of photo. 0 or 360 equal North, 90 East
* `fov` - Field of View in Degrees. Default is 90
* `pitch` - Up or down angle of camera relative to vehicle. Default is 0, 90 is straight up, -90 straight down.
* `radius` - Sets a radius from provided coordinate point to search for imagery. In meters. Default is 50.

In the next cell of your notebook copy the following script, and run it. It defines a function to download street view images based on input parameters, that it then transforms into an API Query, which is essentially a URL.:

**copy this exactly and run it, do not chance anything !**

```python
# required modules
import requests
import csv
from io import open as iopen

# functions needed
def locationreader(uploaded_filename):
  df = pd.read_csv(io.BytesIO(uploaded[uploaded_filename]), names=['id','lat','lng'])
  list_df = df.values.tolist()
  return(list_df)

# defining a function, it takes four parameters:
# the path to a csv file containing lat/lon coordinates
# your API key
# the zoom level you would your images to be downloaded as
# the size, in pixels of your images, the maximum is 640
# unless you have signed up for a premium account

def street_view_colab(uploaded_filename,APIkey,heading,fov,pitch,radius,size):
    API_KEY = APIkey
    Heading = heading
    Fov = fov
    Pitch = pitch
    Radius = radius
    base = "https://maps.googleapis.com/maps/api/streetview?size="
    # this section reads the csv file
    locations = locationreader(uploaded_filename)

    # here we format a url to pass to the API for each row in the csv file
    for location in locations:
        id, lat, lng = location
        latlng = "location={},{}".format(lat, lng)
        fovValue = "fov={}".format(Fov)
        headingValue = "heading={}".format(Heading)
        pitchValue = "pitch={}".format(Pitch)
        radiusValue = "radius={}".format(Radius)
        keys = "key={}".format(API_KEY)
        url = "{}{}x{}&{}&{}&{}&{}&{}&{}".format(base,size,size,latlng,fovValue,headingValue,pitchValue,radiusValue,keys)
        # defining the name for the image files that will be downloaded
        filename = "{}.png".format(id)
        print(url)
        res = requests.get(url)
        if res.status_code == requests.codes.ok:
            with iopen(filename, 'wb') as file:
                file.write(res.content)
            files.download(filename)
            print(filename)
        #here we tell the function to show us an error message if it is unable to download an image
        else:
            print(res.status_code)
            print(url)
            return False
```

### Step 4 - Run the function to download your images

Once you have defined the function above, call the function to download images. Replace the parameters in quotations with the name of the csv file you uploaded and your API key (both need to be enclosed in " "). 

```python
street_view_colab("StreetView_test_points.csv","yourAPIkey",0,90,0,50,640)
```
**make sure you use the snippet above and not the code from step 3.**

The last five numbers, define the `heading`, field of view (`fov`), `pitch`, and `radius` that the funciton will query the API in. What is essentially happening here is we simply providing the parameters that will go into a URL that makes up an API query. For a breakdown of what is what, see the image below.

![URL diagram][URL diagram]

You should see the names of the images print in your notebook and images for the latitude and longitude coordinates specified in your csv file will begin to download to the downloads folder of your computer.

If you did not change anything in the above script, you will notice that the images you download all point directly north. Querying static images from an API that queries panoramas means that you have to think about where the camera is in relation to the objects or phenomena that you want to capture.

## Challenge

Use the Google Street View Static API to download street view images for 20 - 100 significant locations of your choosing.

Design a layout to present the images on one or more slides (or GIFs)

---
Module by Adam Vosburgh, spring 2024.

[URL diagram]:images/157/street_view_url.png