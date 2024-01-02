---
moduleid: 
title: Graphing Tabular Data
published: True
slug: graphing-tabular-data
authors:
 - "Zachary White"
---
# Graphing Tabular Data

The first information format we'll be bringing in to Grasshopper is data organized in a table of rows and columns (in other words, a spreadsheet).

## Downloading a Dataset

 You can of course collect your own data, but for this tutorial we'll use a public dataset from New York City's Open Data portal. Let's start with 

A common format for tabular data in computational contexts is the CSV (Comma Separated Values) file, which is like a simplified, non-propietary Excel file. You can create and edit them in Excel

Note that since commas are being used to separate columns, it's important that there aren't any commas in the data itself.

## Importing the Data

Interpreting the file will be easier using a "Read CSV" component, which is part of the LunchBox plugin. If you don't have it already, [you can download LunchBox here](https://www.food4rhino.com/en/app/lunchbox). Later on we'll also be using a plugin called [Human](https://www.food4rhino.com/en/app/human), so install that one too while you're at it.

 Create a new Rhino file and open Grasshopper. Add `File Path`, `Read File`, and `Read CSV` components to the canvas, and connect them like so:

 ![Read CSV File](images/1-1%20read%20csv.png)

 Right click the `Path` module, choose "Select One Existing File," and navigate to the dataset we downloaded earlier.

 The "Headers" output will tell you what information is stored in each column, and you can isolate columns with the `Tree Branch` component. Using panels to preview the outputs should look something like this:

  ![Isolate Columns](images/1-2%20isolate%20columns.png)

  You can see that plugging 0 into `Tree Branch` gives a list of dates, corresponding to index 0 from the list of headers ("dates_of_interest"). Tree Branch 1 (for "CASE_COUNT") returns a list of integers, the number of cases reported each day. The index of each item in those lists are from the same row in the original table, meaning they correlate with each other: on date 0 (02/29/2020) there was 1 case, on date 1 (03/01/2020) zero cases, and so on.

  ## Graphing the Data

  We aren't interested in partuclar dates at the moment, so let's focus on the case counts, and draw a line graph of the number of cases over time.
  
  For the *x* axis, number of days, we just need evenly spaced values, as many as there are data points. For this we can use a `Series` component, plugging the length of the data set into the "Count" input. That series can then plug into the "X coordinate" input of a `Construct Point` node.

![X Axis](images/1-3%20x%20axis.png)

For the *y* values we just plug in the list of case counts, connect them with a `Polyline`, and we'll have our line graph. We do need to scale the values to fit nicely on a the screen though, so we'll pass them through a `Multiply` node with a slider before connecting them to `Construct Point`. I've also hidden everything but the line by selecting the nodes I want to hide, right-clicking on the canvas, and selecting "Preview Off."

![initial graph](images/1-4%20cases%20graph.png)

You can see the graph is very jagged, with a regular 7-day cycle of dips and spikes. This adds a lot of noise to the graph without telling us anything about the disease: it's just an artefact of the data collection methodology (it turns out that cases occuring over the weekend are often not reported until the following week). What would be more informative is a **rolling 7-day average** of case counts. With a little math we could do this ourselves, but fortunately it's already column 5 in the dataset ("CASE_COUNT_7DAY_AVG").

Using the same method as before, we can graph this second series on top of the first one, but the result won't be very legible. We could `bake` the lines and style them in Rhino, or export the vectors to Illustrator, but let's keep things nimble and interactive by doing this part in Grasshopper too.

## Styling the Graph

![both lines graphed](images/1-5%20cases%20and%20averages.png)

You can change the display color of geometry using vanilla Grasshopper, but if we want to change the weights of the lines as well we'll need the **Human** plugin we installed earlier.

Using Human's `Custom Preview Line Weights` node we can give the graph of averages more visual weight than the daily counts: I've gone with a reddish 3-pixel line and changed the Rhino background to black. For visual clarity I've also replaced the line graph of the daily counts with a darker bar graph, drawing lines from each data point down to the *x* axis. To ensure that the line tracking the averages appears above the daily counts, I've added values to the Z inputs on both `Construct Point` components.

Lastly I've added one more line, in orange, to track the 7-day average death toll (column 8 in the dataset). To make it easier to compare to the case counts it has its own scaling factor. Looking at both graphs overlaid illustrates a time lag between cases and mortality rates, as well as the changing relationship between the two (presumably an effect of improved treatment methods and the rollout of vaccines).

![styled graph gh canvas](images/1-6%20styled%20graph%20gh.png)

![styled graph result](images//1-7%20styled%20graph.png)