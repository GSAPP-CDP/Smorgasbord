---
moduleid: 155
title: Making Data from Satellites
published: True
slug: satellites
---

# Making Data from Satellites

## Multispectral satellite imagery 

This module will introduce you to multispectral satellite imagery, and to the process of visualizing phenomena through 'false color composites'. As an introduction we will create false color composites using Landsat satellite imagery of Puerto Rico captured just before and after [Hurricane Maria](https://en.wikipedia.org/wiki/Hurricane_Maria) (on September 17 2017 and October 3 2017).

After completing this exercise you will:
* have familiarity with basic characteristics of multispectral satellite imagery
* learned how to acquire Landsat satellite imagery through the U.S. Geological Survey
* created a false color composite from multispectral Landsat dataset

## Some Background on Working with Landsat Satellite Imagery

**Multispectral** satellite imagery refers to a type of data that records specific wavelength ranges in the electromagnetic spectrum. In the case of the Landsat program, the Landsat Satellite has sensors that are able to detect light waves beyond the [visible light spectrum](https://en.wikipedia.org/wiki/Visible_spectrum) (both near infrared as well as ultra violet frequencies). Specific frequency ranges are each recorded in a distinct **band**.

A single Landsat 'image' is actually composed of multiple bands. Each band is an individual **raster** dataset where the value of each pixel corresponds to the wavelength of reflected light captured by the satellite. These datasets are stored as individual `.tif` files which appear as monochromatic images when we load them in QGIS individually.

For example the image below shows band 5 from a Landsat 8 satellite image captured of the western portion of Puerto Rico on October 3, 2017:
![satellite12a]

This image shows wavelengths along the electromagnetic spectrum as well as the ranges that are captured by each Landsat band.  
![spectrum]

The field of remote sensing science is dedicated, in part, to understanding the different 'spectral signatures' of features on the earth's surface. In other words, what frequencies of light in the electromagnetic spectrum do various types of vegetation reflect? Do certain types of man-made surfaces reflect more ultra violet light? Does healthy vegetation reflect greater or less light in the near infrared range than vegetation in drought conditions?

From the answers to these questions researchers study topics like landscape change, [ecological vulnerability](https://landsat.visibleearth.nasa.gov/view.php?id=88873), and large scale [urban development](https://www.wired.com/2012/07/landsat-city-change/).

One of the ways that remote sensing scientists study these 'spectral signatures' is through creating color composite images using multiple of the monochromatic bands from multispectral imagery. This is a method by which each band is assigned a color (red, green, or blue) and its values are mapped onto an RGB color scale. We can make color composites that approximate a 'natural color' image of the earth's surface. Or we can combine different frequency ranges from the electro magnetic spectrum into **false color composites** to reveal different phenomena on the ground.
Below shows natural color and 'near infrared' false color composite images:
![compare]

[This introduction](https://appliedsciences.nasa.gov/join-mission/training/english/arset-fundamentals-remote-sensing) to remote sensing from NASA provides a good entry point to further information on many of these concepts.

Students in this course might be interested in using Landsat satellite imagery as a base map for other analysis, or as an illustration of change over time in a particular area. 

The Landsat satellite circles the globe on a 16 day cycle. [This page](https://landsat.usgs.gov/landsat_acq) from the USGS is helpful for identifying the days of coverage for a particular area. From it we can see that the western portion of Puerto Rico is falls between two paths of the landsat's orbit: the western portion of the island is captured on Day 1 of the cycle, and the easter portion is captured on the 10th day of the cycle.

For a history of the Landsat Satellite program please see NASA's website [here](https://landsat.gsfc.nasa.gov/about/history/)

This exercise will walk through how to create false color composites using multiple landsat bands IN QGIS and also how to download Landsat data from USGS. 

### Downloading Landsat satellite images

Landsat satellite data is freely available and can be downloaded via a number of different websites. We will be using the USGS website: [EarthExplorer](https://earthexplorer.usgs.gov/)

These are instructions for how to download Landsat satellite imagery via USGS for future reference, and for use in the assignment. These instructions are provided to assist you in obtaining your own satellite imagery for the assignment. 

But first complete this tutorial to get familiar with the steps involved -- for the tutorial landsat scenes have been provided to you, so scroll down to the next section **Creating False Color Composites**.  

1. Select `Register` and then follow steps to **Register for an EarthExplorer account**
2. Use the map to zoom in to your area of interest 
3. In the `Coordinates` box select the `Use Map` button. Coordinates around the area you are viewing will populate into this menu.
![coordinates]
4. Select the date range you are interested 
5. Click through to `Data Sets`
6. In the `Data Sets` menu open the nested section for `Landsat` and then for `Landsat Collection 1 Level-1`
7. Check the box next to `Landsat 8 OLI/TIRS c1 Level-1`
![datasets]
8. Select `Additional Criteria` we will not make any selections here in this exercise, but note for future reference that you can use this to search only for images with less than a certain percentage of cloud cover.
9. Select `Results`. You should see a number of images for specified dates and paths. Here you can view the footprint of each image. As well as select images for download.

10. Find the images you are interested in downloading.
  
11. Click on the download icon (looks like a hard drive and a green arrow) for the first image.
12. In the Download Options menu that will open, select `Level -1 GeoTIFF Data Product`. This is the data set that will include all of the Landsat 8 multispectral bands discussed previously.

![download]

13. a compressed file (a file with one of these extensions `.zip` or `.tar.gz`) will download, unzip it and save in the working directory you are using for your project. (If you need help on how to unzip a file see wikihow [here](https://www.wikihow.com/Unzip-a-File)).

## Creating False Color Composites

We will use a tool called the "Semi-Automatic Classification Plugin" (SCP) to assist us with creating composite images from the bands of the Landsat images we just downloaded. This plugin has been developed by Luca Congedo and is released under the "Creative Commons Attribution-ShareAlike 4.0 International License." It is an example of the kind of open source tools being developed by the QGIS community.

Full documentation as well as related resources for this set of tools can be found [here](https://fromgistors.blogspot.com/p/semi-automatic-classification-plugin.html).

The SCP plugin provides a number of tools related to satellite image processing and analysis.

### Install the Semi-Automatic Classification Plugin

Navigate to the `Plugins>Manage and Install Plugins` from your menu bar.

Search for and install the `Semi-Automatic Classification Plugin`

When the plugin has finished installing make sure the check box next to the plugin's name is checked and select `Close`.
![install]

A new toolbar and dock should have been added to your QGIS window. The are highlighted below in magenta. If these did not open for you, right click anywhere inside one of the grey toolbars surrounding the map canvas and select `SCP Dock` in the panels section, and `SCP Tools` and `SCP toolbar` in the toolbars section.  

![dock]

### Load Landsat data and create a "Band Set" 

Download the `landsat_sample` folder from [here](data/landsat_sample.zip). This contains a clipped version of two landsat band sets showing the North West side of Puerto Rico before and after Hurricane Maria. They have been clipped to speed up processing times.

Save the folder within the `data`>`original` directory you have for this sequence.  

In QGIS launch a new project and then select `Layer`>`add layer`>`Add raster layer`. Navigate to the `Shared_data`>`raster`>`landsat_corrected` folder in the source menu. Then choose the folder containing the September 17 Landsat image bundle `LC08_L1TP_005047_20170917_20170929_01_T1`. Select bands 1-7 in the folder (all of the files with a .tif ending) And click Open. Then click Add. Then Close the `Add raster layer` menu. You should now have 7 landsat bands in your layers panel.  

Open the Semi Automatic Classification Plugin menu by clicking the icon circled in yellow above.  

Load the landsat bands you have added to your project by clicking the `refresh list` button circled in magenta below. Then select all of the bands listed in the Single band list and click the `add bands to Band list` button circled below in yellow. The Semi Automatic Classification Plugin should now look like the image below, with the seven landsat bands we will use added to Band set 1.  

![Preprocessing]

Make sure to select `Landsat 8 OLI [bands 1,2,3,4,5,6,7]` as the Wavelength quick settings and make sure that the wavelength unit matches what is listed above.  

This automatically loads in information about the wavelengths of electromagnetic spectrum captured by each landsat band.  

Close the SCP menu. 

Then locate the `RGB` option in the SCP Working toolbar.  
![RGB]

This tool tells the program which band it should map to the red, green, or blue band of a standard RBG image. Setting band 4 and Red, band 3, as Green, and band 2 as Red will show a `natural color` image whose colors are similar to what we are familiar with. This combination is similar to what we see with the naked eye because it uses the bands that capture electromagnetic wavelengths in the visible light spectrum. In other words for the Landsat 8 Satellite bands 4, 3, and 2 capture the wavelengths on the electromagetic spectrum that produce what our eyes see as red, green, and blue light  (see [this explanation](https://www.usgs.gov/faqs/what-are-best-landsat-spectral-bands-use-my-research?qt-news_science_products=0#qt-news_science_products) of the wavelengths of electromagetic radiaion detected by each landsat band). 

Note: to make the image appear more saturated zoom in to a bright-ish area of the image and then click the `Local cumulative cut stretch` button (circled in black above)

Further information about band combinations and the kinds of phenomena they make visible can be found [in this overview guide from the USGS about the different features of each band](https://www.usgs.gov/faqs/what-are-best-landsat-spectral-bands-use-my-research?qt-news_science_products=0#qt-news_science_products) and [this guide](https://www.usgs.gov/faqs/what-are-band-designations-landsat-satellites?qt-news_science_products=0#qt-news_science_products) to the different bands in each generation of Landsat. This guide provides an overview of [different common band combinations](https://gisgeography.com/landsat-8-bands-combinations/)Take a look through these resources and test out combinations that are interesting to you.

A color composite using `4-3-2` for a 'natural color' image:  

![natural]


Or to view a 'near infrared' image set the RGB band values to `5-4-3`. This type of 'false color composite' image is similar to infrared aerial photography and highlights vegetation in shades of red. Try these and others.

![infrared]


The combination of bands `6-4-2` is particularly well suited for looking at agriculture -- vegetation appears as shades of green and urban areas or bare soil appear as brown/magenta.

![agriculture]


### Export false color composites 
To export a false color composite as a GeoTiff image (that freezes the given false color composite you've chosen) right click on the `virtual band set` in the layers menu. Select `save as` and choose `rendered image` as your output mode, and select a location and file name to save the image. This false color composite is now saved, you no longer have access to the raw data of each of the Landsat bands that originally comprised it but you can work with it as a base map or for other uses or bring it into a different program.

If you'd like you can repeat the steps above on the second Landsat image bundle we downloaded to compare false color composites before and after Hurricane Maria to see the visible flooding.

### Take it further: supervised classification

Beyond false color composites researchers use the spectral signatures for different features of the earths surface to classify land use and land cover and a variety of other phenomena. The [USGS for example](https://www.usgs.gov/core-science-systems/science-analytics-and-synthesis/gap/science/land-cover) produces and maintains data on land use and land cover which it creates using Landsat and other remotely sensed data.  

You can create your specific land use classifications using something called supervised classification. This is beyond the required scope of this assignment but if you are interested in going further please follow the instructions for using the SCP for creating your own land use classification contained in this external tutorial produced by the Applied Remote Sensing Training Program at NASA[here](https://appliedsciences.nasa.gov/join-mission/training/english/arset-land-cover-classification-satellite-imagery)

## Assignment  

Create a map using Landsat Satellite imagery that shows land use change over time. Download two (or more!) images captured by the Landsat 8 satellite of the same location on different dates, import them into QGIS and symbolize with a false color composite that helps to highlight a change in the landscape that is visible in your chosen location.

#### Requirements 

- Your final work must be a designed map composition (gifs are okay here too) 
- Your designed map composition must include:
  - title
  - legend
  - scale bar
  - north arrow (your map doesn't need to have north pointing vertically...)
  - citations for all data sources (please use Chicago style or an equivalent)
  - projection used


---
Module by Dare Brawley, fall 2021.  
tutorial credit information, to be added in standard format

[satellite12a]: images/155/satellite12.png
[spectrum]: images/155/Landsat8_SpectralBands.jpg
[compare]: images/155/satellite13.png
[coordinates]: images/155/satellite001.png
[datasets]: images/155/satellite002.png
[install]: images/155/Satellite01.png
[dock]: images/155/satellite02.png
[Preprocessing]: images/155/satellite04.png
[Bandlist]: images/155/satellite06.png


[RGB]: images/155/satellite05.png
[natural]: images/155/satellite09.png
[agriculture]: images/155/satellite14.png
[infrared]: images/155/satellite10.png
[download]: images/155/satellite003.png