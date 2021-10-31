---
moduleid: 5-3
title: Building Custom Analysis Tools
published: True
slug: building-custom-analysis-tools
---




# Building Custom Analysis Tools

![description](images/4-7-4_Animate.gif)


## Module Summary

This module expands on the methods for building custom analysis tools in Grasshopper introduced in the `Deriving Spatial Data` module in the `Intro to Grasshopper` sequence by working with Grasshopper plugins to develop a daylight analysis tool. If you haven't done the Deriving Spatial Data module make sure to review it before diving into this one.

## Why is this important?

Refer to Deriving Spatial Data module.

## Tutorial

This tutorial has two sections:

1. How to install Grasshopper plugins.
2. How to build a daylight analysis tool.

### 1. How to install Grasshopper plugins

One of the biggest resources for Grasshopper is a very large community of people building  plugins for Grasshopper that extend its functionality. The are over 700 plugins available for Grasshopper on [Food 4 Rhino](https://www.food4rhino.com/en/browse?searchText=&sort_by=its_field_downloads&items_per_page=10), from physics engines to evolutionary solvers to environmental simulation. If you are trying to do something in Grasshopper and it is not possible with native components there is likely a plugin that has the needed functionality.

![description](images/5-3-1_FFR.PNG)

While we are going to use the Ladybug plugin for this module, it has an a-typical installation process so lets install one with the typical process to get an understanding of the process. (If you don't yet have a food 4 Rhino account, make one now.)

Let's install [Human](https://www.food4rhino.com/en/app/human), a plugin with a range of really useful components from rhino display customization to geometry generation.

![description](images/5-3-1_Human.PNG)

Scroll down on the page till you get to the Downloads section. Food 4 Rhino does not always list plugin versions from newest to oldest so make sure to download the newest one, which may not be at the top. This will download a `.gha` file.

![description](images/5-3-1_Unblock.PNG)

 Windows automatically blocks certain features of files downloaded from the internet, which can cause those definitions to not function. To prevent this right click on  human.gha file and select properties. In the lower right you should see `Unblock`. Click the box next to it and hit apply.

 ```
Tip
If the grasshopper plugin that you download is a zip file, unblock it before unzipping. This will apply
the unblocking to all the files in the zip folder preventing you from having to unblock them one by one.
 ```

![description](images/5-3-1_Library.gif)

Now you need to copy the plugin over to the folder that Grasshopper pulls plugins from. In grasshopper go to `File` from the top drop down menu, go to `Special Folders` and select `Components Folder`. Copy the human.gha file into the folder that opens. You will need to restart Rhino, but once you do you will now have `Human` as tab in your Grasshopper components ribbon.

Finally, lets install Ladybug. [Download it from Food 4 Rhino](https://www.food4rhino.com/en/app/human), unzip it and follow the [instructions for installation here](https://github.com/ladybug-tools/lbt-grasshopper/wiki). What is Ladybug? From the developer: ["Ladybug performs detailed analysis of climate data to produce customized, interactive visualizations for environmentally-informed design."](https://www.ladybug.tools/ladybug.html) WHile we are only going to use it to get sun paths from weather files it does much, much more then that. Check out [their resources page](https://www.ladybug.tools/resource.html#ladybug) for tutorials on other features.

### 2. How to build a daylight analysis tool.
