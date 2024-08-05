---
moduleid: 242
title: How to Approach Parametric Building Modeling
published: True
slug: how-to-approach-parametic-building-modeling
authors:
 - "Joe Brennan"
---

# Intro

This section will cover some fundamental use cases of parametric building modeling. It is important to be able to delineate between when to leverage paramatric modeling and when not to. I can confidently say that I use Grasshopper for some aspect of every project I work on. However, I don't use it for everything - the gradient of how much varies from project to project.

For example, on a very boxy, straightforward design model, you may use Grasshopper for automating some repetitive tasks like modeling railings (this is one of my favorte basic use cases). You may also use it to translate some geometry into Revit as a starting point for documentation. However, it might take more time to build out the computational logic to do this then it would to just remodel objects from scratch. Conversely, for a complex, curvy shape, you may be using Grasshopper to dictate the entire project.

We will look at the following uses cases where computational modeling is beneficial and advantageous:
- Repetition and Automation
- Analysis
- Rationalization
- Mass Customization

These are just a few examples, and as the course progresses, we will apply these techniques to actual building design. But for now, we'll look at a series of simple definitions that showcase these functionalities.

## Understanding Definitions as a Series of Functions

Not so fast! Before we jump into use cases, I want to discuss the concept of functions with you. Thinking about your script as a series of functions is incredibly powerful for a few reasons:
 - First, it allows you to logically map out how you want your definition to work.
 - Second, it forces you to keep your definition organized, which will help you build more complex definitions without getting lost. [Take a look at Luc's definition here at the bottom of the page.](https://smorgasbord.cdp.arch.columbia.edu/modules/4-grasshopper-intro/47-documentation-best-practices) The "after" example has a clear flow, and the groups are strategically designed as functional processes.
 - Third, once you get a feel for how to build functions, you can actually start packaging and re-using those within other definitions! Thank about how much time that will save.


 How big should a function be? That's up to you to decide- and as you progress in your computational journey, you'll get a better feel for it. Also, a function can (and often does) consist of a series of smaller functions. Let's revisit that box script from earlier, and examine it as a series of functions:

 <img src="images/simple_box_annotated.jpg" width="1000">

 It is the same defintion as before, except a bit better organized. And if we really examine what it is doing, we can break it down into a series of smaller functions (drawing points, extruding curves, and extruding planes) that fit within a larger function (basically a box generator). It's not super fancy, but we now have a function that generates a box based on a series of starting coordinates, which is in this case 0,0,1.

So if we are going to think about our forthcoming use cases, which will be a definition that subdivides a surface and creates panel openings based on sky exposure, we can map it out the following way:

![description](images/pseudo_code.jpg)

I often call this process "pseudo code," which I didn't invent, but it is basically mapping out the logic for how to achieve my objective prior to actually scripting. In our case, our overall objective is to create a series of custom panels on a surface that respond to some external factor, a view to the sky. In order to do that, we need to create a series of functions that get us from point A to point B. And in that process, we may or may not create some smaller nested within larger functions along the way.

>**Joe's Tip #3**
>
>Sketch out your code before you begin, and try to think about how the code relates to the geometry. Below is a sketch from a real project at our office in which we were trying to figure out the best way to sort a series of points on a complex surface.
>
><img src="images/pseudo_code_sketch.jpg" width="500">
>
>As with everything in architecture, it's never a linear process, and I often find myself going back and forth between "pseudo coding" and actually scripting.

I promise I'll get into the definition soon but there's three more important disclaimers.

*First disclaimer* - I usually don't like doing tutorials that aren't associated with a specific project or real world condition. I believe it's hard to translate abstract demonstrations into real projects, however please think of the rest of this page as an intro to the concept of functions. After this section all future tutorials will be associated with a real world design objective. I will also be more rigorous with dimensions and alignments in future tutorials as these are important aspects of computational building design.

*Second disclaimer* - What I do here may or may not be directly applicable to your project. These are just examples of what can be done with computational thinking. Don't feel like you need to shoehorn this process into your project. In fact, I would prefer you explore other methods of design for your project.

*Third disclaimer* - There is a lot of background info within the tutorial here - that is because these techniques are foundational to computational building realization. Please work to understand the background info which will facilitate future tutorials. I won't go into as much detail about the "why" in future sections if I've already covered it here.

OK! Let's get into a use case for automation. **Please script along with me for the upcoming tutorials.**

## Use Case 1: Repetition and Automation
One incredibly common use case in computational design is subdividing a surface. As we know, large surfaces must be divided up into smaller elements for construction. If the original surface is flat, the subdivisions will most likely consist of flat surfaces as well. If the orginal surface is curved, it is very common to rationalize those down to flat surfaces when possible (which is the least expensive), or develop a clear, describable curvature for each panel (which is more expensive). However, that is not always possible, so most projects with complex geometry usually consist of flat panels where possible, singlely curved surfaces where possible, and doubley curved panels only when necessary.

For our example, we first need to **create a surface,** so we can subdivide the surface into rectangles.
- Start a new Rhino file. We will be working in feet so make sure that is your defauly unit.
- Create a surface that is roughly 100' wide by 200' tall. Put it on a layer called HOST SURFACE, which should be a sublayer of GRASSHOPPER INPUTS. It can be edited or replaced later (that's kind of the point) but for now give it some curvature in the x, y, and z axis.
- Ensure your surface is both A) oriented in the proper direction with the front face of the surface representing the exterior and B) is a surface, and not a trimmed surface or polysurface.

Mine looks like this:

<img src="images/surface1.jpg" width="500">

>**Joe's Tip #4**
>
> One incredibly helpful view hack is creating a custom Backface setting. By default, your backface and frontface are the same color. This makes it hard to identify your surface direction, which is very important once you get into computational workflows. You can adjust this to be a single color for all backfaces by going to Options> View> Display Modes> then the display mode you want to assign it to. In my example below, I've use a bright magenta to define my backfaces, which makes it easy to tell the front, which is orange, from the back. It is also helpful in quickly identifying open polysurfaces.
>
><img src="images/backface1.jpg" width="500">

Ok, now that we've gotten our surface modeled, we need to **get it into Grasshopper and subdivide it.** Here's how we are going to do that:
- First, launch Grasshopper within Rhino
- Next, drop a `Surface (srf)` geometry container component onto the canvas and set it as the surface you modeled. Rename this component to be `Srf:HOST SURFACE`. It's always good to label your containers so you know what they are holding. I also keep the initial abbreviation so I know the type of element it is looking for. 
- Connect your `Srf:HOST SURFACE` component into a `Dimensions (Dim)` component. This provides you with an approximate dimension of the surface in the U and V coordinates. We'll use this so we can set the target dimension of our subdivisions, not the count. For example, we probably want to say a panel is 5' x 12', not that there are 30 panels in the U direction and 48 in the V direction. Most likely you have a target module size your are working towards.
- Now that we have the approximate surface dimensions, we'll need to do a little math to figure out how many panels with a width of 5 and height of 12 will fit on the surface. Take both the U and V the outputs of the `Dimensions (Dim)` component and plug each into it's own seperate `Division (A/B)` component, into the A input. Then, plug two `Number Slider ()` components into the B value of the `Divison (A/B)` components. Set the `Number Slider ()` components to a range of about 0 to 20, and you probably need 0 or 1 decimal places. Make the values of the sliders about 5 and 10. The outputs from the division will most likely be values with several decimal places but that's ok.
- Next, we need to divide up the surface. We'll use two components which almost always work in tandem to do this. The first is `Isotrim (SubSrf)` and the second is `Divide Domain^2 (Divide)`. To make the `Divide Domain^2 (Divide)` component work, you will need to feed it a surface, a U value, and a V value. So plug your `Srf:HOST SURFACE` component into the I input, plug your divided U value into the U input, and plug your divided V value into the V input. Your `Divide Domain^2 (Divide)` will automatically round the numerical inputs to the nearest whole number. Finally, plug the output of this, the S value, into the D input of your `Isotrim (SubSrf)`, and take your `Srf:HOST SURFACE` and plug this into the S `Isotrim (SubSrf)`. You should see the surface subdivisions pop up right after this. 

Congratulations! You've created your first Grasshopper function. Essentially, this is a series of components that takes three inputs - a host surface, a panel height, and a panel width. It has one output, which is a list of subdivided surfaces. Here is a clean version of what it should look like for reference:

![description](images/subdivide_function.jpg)

I have some extra components in there, namely some duplicate `Srf:HOST SURFACE` elements, the `Num: PANEL HEIGHT` and `Num: PANEL WIDTH` inputs, and the `Srf:SUBDIVIDED SURFACES` output. This may seem tedious and redundant, but it helps keep your definitions organized and it is clear what the functions is taking in and what it is putting out. It is good to get in the habit of doing this, and as you'll see, a clean definition will help you manage complexity later on.

<img src="images/subdivide_gif.gif" width="1000">

You should have something that looks like the GIF above - the panels should update as you adjust the height and width. If you don't, please double check everything. If you're still having trouble, [you can download the grasshopper definition here.](definitions/surface_subdivision.gh)

## Use Case 2: Analysis: Determine Deviation from Planar

Alright, let's start figuring out how we are going to actually build this thing. The good news is that since you have a clean and organized definition (right?) you have a clear **output,** your `Srf:SUBDIVIDED SURFACES`, that will now be the input for your next function.

What we now need to do is determine how far off each of our surfaces is from from being flat, aka planar. There are many ways to run this geometric analysis, and in fact there are probably entire dissertations dedicated to analyzing geometry for constructability. We are going to make our lives very easy and rely on a tool called [Lunchbox](https://apps.provingground.io/lunchbox/) which is a must have for any Grasshopper users.
- Luckily, you can now install Lunchbox using the "Package Manager" command in Rhino. [There's more detailed instructions here.](https://apps.provingground.io/install-lunchbox-for-grasshopper/)
- There are a few plug-ins out there that add basic functionality and simplify common Grasshopper processes - Lunchbox is one of them. We will be using it frequently throughout the course. For now, we will be focusing on the Utlities section, but take a minute to familarize yourself with some of the other components that Lunchbox has to offer.

<img src="images/lunchbox_bar.jpg" width="1000">

- Within the Utlities section, there is a component called `Flatness Check (Flat)`. Place one of these on the canvas, and plug your `Srf:SUBDIVIDED SURFACES` output from your previous definition into the "Panels" input on the `Flatness Check (Flat)`.
- You will have three outputs from the `Flatness Check (Flat)` component - F, P, and D. All of these contain incredibly helpful data. The F is a flattened projection of your surfaces. To take a step back, the original subdivided surfaces coming out of the `Isotrim (SubSrf)` component are divisions of the orginal untrimmed surface - so imagine cutting up a surface with equally subdivided lines, and whatever is left over is what you get. It's basically a series of pieces of the original curved geometry - so, these surfaces in and of themselves could be curved. This may or may not be ok, depending on the final desired material of the surface or budget constraints. For the purposes of this exercise, let's assume we don't want to have any curved panels - this is where the flatness projection comes into play.
-The P output from the `Flatness Check (Flat)` component is the Projection Plane - which is a flat plane that is based on the average coordinates of the surface. This is convoluted, but to put it simply, this plane represents Lunchbox's best interpretation of what a flattend version of the curved surface should look like. 
-The D output is the Amount of flatness deviation - so bascially how far is the furthest point from the surface to the Projection Plane. Again, this is a simplified way of measuring curvature, and in the real world you will need to work with engineers and fabricators to determine the allowable tolerances. For now, we are going to build a parametric definition that will help us seperate panels based on a Amount of flatness deviation threshold.
- Let's go back to the the F output from the `Flatness Check (Flat)` component. Plug in a `Surface (Srf)` component here and hide the other surface visualizations in Grasshopper so you don't have overlapping info. Your definition and output should look something like this:

<img src="images/analysis_function_1.jpg" width="1000">

- In the Rhino viewport, you'll notice there is now a gap between adjacent panels - this gap will be more or less pronounced depending on a few factors, like curvature of the underlying surface and the density of the subdivisions. If you crank up your subdivisions, you will see less of a gap, but then you'll have more panels, more mullions, more connections, etc. As you dive deeper into your surface rationalization journey, you'll realize it becomes a balancing act between maintaining design intent, managing cost, and working within material constraints.
- Now, that break in the surface MAY be acceptable, depending on the detail of the connection, but we're going to set up a way to test that and adjust depending on an adjustable tolerance. But for now, let's wrap up this section and do a bit of Data Visualization regarding our surface. 
- I'm going to walk you through a basic method of visualizing data in Grasshopper - this method can be use for a wide variety of analysis so you will be using it frequently. 
- Grab the output D value from the `Flatness Check (Flat)` component and store it in a `Number (Num)` containter - rename this so it's clear what it is storing. You should be familar with this process based on what we've done to this point.
- Now, grab a `Custom Preview (Preview)` component, and plug your **ORIGINAL** subdivided surfaces, not your flattened ones, into the G input on it. They should all turn a pinkish color in the viewport - we'll fix that soon.
- Next, grab `Gradient` component. It will have three inputs and one output. The inputs are L0, which represents the value that defines the lower bounds of your color range, L1 which defines the upper value, and t, which is the list of values you then want to associate with a color within the gradient. Basically, imagine this as a set of points along the gradient, and where ever the t value lands, it associates that color to that number. This "t" value is very common through other Grasshopper workflows as well. 
-Right click on the `Gradient` component, go to Presets and select the gradient that goes from red to yellow to blue. See below. You can select other presets or even create your own, but this is a good one that shows bad (red), ok (yellow), and good (blue) ranges:

<img src="images/gradient_example.jpg" width="500">

- In order to define our inputs to our `Gradient`, we need to get our lowest value, our highest value, and our set of t values. We already have the t values - this is the D output from the `Flatness Check (Flat)` component. To get the other two, we need to find the lowest and highest value in our list of numbers. Luckily, there is a component for this, called `Bounds (Bnd)`. Drop one of these into the canvas and plug your deviation values into it.
- This gives us a domain, so we need to break this up into a start and an end. Plug the output from the `Bounds (Bnd)` component into a `Deconstruct Domain (DeDomain)` component. This will give you the start and end of this domain.
- Ok let's wrap this up - plug the S output from the `Deconstruct Domain (DeDomain)` into the L1 of the `Gradient` and the E output into the L0. These wires are crisscrossed - I'll explain why in a second. If you haven't yet, plug the deviation values into the t input on the `Gradient`. Finally, plug the output on the right hand side of the `Gradient`, which doesn't have a letter, into the M input on your `Custom Preview (Preview)` component. Your surface should change colors - and the surface and definition should look something like this!

<img src="images/planarity_output_1.jpg" width="1000">

If your definition doesn't look like mine, [you can download the grasshopper definition here.](definitions/subdivision_planarity_analysis.gh).

Also, if you adjust the surface, you should see the analysis update:

<img src="images/planarity_dynamic.gif" width="500">

**A few things to recap and note before we move on to the next section:**
- The reason the `Custom Preview (Preview)` is working is because the lists match up - List Management will make or break your ability to work in Grasshopper. You can learn more here, but esssentially you have set number of surfaces, in my case 364, and a set number of colors, also 364, that are in the exact same order. You can associate different data with each other as long as you maintain the same structure. Lists will not reorder themselves unless you tell them to, but always work to associate the same amount of geometry counts with the same amount of colors or values, in the same order, when working your data visualizations or your results will be inaccurate. 
- The reason I crossed my wires out of the `Deconstruct Domain (DeDomain)` is because I wanted my higher values to be red, and my lower values to be blue. In data visualzation, it's important to think about how someone's inheriant bias will dictate thier intrepretation of what they are seeing. Red typically means **stop** or **bad** so therefore we want the most extreme values to be shown this way. If we didn't switch them, blue would be the most extreme and red would be flat. 

Congratulations! You've now build another function that analyzes a panel and assigns a color value based on deviation from flatness.

>**Joe's Tip #5**
>
> Data Visualization is incredibly important for a computational designer! Not only does it look cool, but you are often trying to understand or explain complex ideas.
>
> You will need to understand the complexity yourself - for example, I would not have known that the lower right hand corner of my surface had the most extreme curvature until I visualized it, then it was immediately obvious.
>
>You will often need to show your analysis to other members of team, you consultants, and your clients. Imagine needing to explain to a client that the cost of the facade will be higher in some areas, or that the design will need to change because of material constraints. Without good visuals to back that up, it would be harder to explain on a complex design.

## Use Case 3: Rationalization: Seperate Out Panels that Are Too Curved

The next common use case for computational building design is rationalizing geometry that is not achievable. It may involve flattening, triangulation, or unifying radii or varous curves. We'll explore a few of these later in the course, but for now we'll focus on first seperating out the extreme panels, and then triangulating those panels. 

Let's start with seperating out those pesky overly-curved panels. For this, we're going to rely on another tried and true Grasshopper component, `Dispatch`.
- Drop a `Dispatch` component on to your canvas and take a look at it. You'll see two inputs - L and P, and two outputs - A and B. For basic dispatching, you are going to feed the L a list of what you want to sort, which can really be any element that Grasshopper work with. The P will take a True/False pattern. Remember our conversation about lists from earlier? Here is another instance where you want your lists to match up - if you have 500 elements, you'll want 500 True/False values.
- So now let's get this dispatch working. Remember how I told you it is important to label your critcal outputs? Well, your `Srf:SUBDIVIDED SURFACES` is one of those critical outputs. We're going to use it yet again. Plug it into the L on your `Dispatch` component.
- Now we need to create a pattern to dispatch with. There are many ways to do this in Grasshopper, and you'll continue to learn more ways throughout the course. For now, we want to test of a a deviation value is larger then a threshold. Luckily, there's a component for that, and it's called `Larger Than (Larger)`. The A input it the list of numbers you want to test, and the B is the value to test against. Plug the D output of the `Flatness Check (Flat)` component into the A of the `Larger Than (Larger)`. We're doing this because we cant to evaluate the deviation from flat. Next, plug a slider in to the B. Let's use 0.150 as a starting point on the slider for the B value. 
- The top output of the `Larger Than (Larger)` component will give you a True result for every value that is above 0.150, and a False for every result below. Now, plug this pattern into the P on the `Dispatch` component. 
- By default, the `Dispatch` visibility is turned on, so you won't clearly see this working. Turn off the visibility of the `Dispatch` and plug one `Surface (Srf)` containers into each of the two outputs from the dispatch (A and B). If you click on either one of these, you should see only some of the panels on the surface selected. Also, as you adjust the slider, you should see the selection change. See below for a progress image of the defintion as well as the dynamic selection:

<img src="images/sorting_dynamic.gif" width="1000">

Now we have the ability to sort panels based on a threshold. There's a few adjustments I need to make to get to where we want to be. Let's talk through the logic first. **IF** a panel is too curved, I want to trangulate it. This is because the distances between the adjacent panels will get too large, and my mullion will not be able to accomdate the difference. **BUT** if a panel is not too curved, I want to flatten it and use that geometry. The result will be a series of flat panels, some four-sided, and some three-sided. They will not connect perfectly, but that's ok because our mullions will absorb that difference.
- Based on what we have, so far, I only need the A output from my `Dispatch`. I'm going to rename the `Surface (Srf)` coming out of the A to `Srf:CURVED FOR TRIANGULATION` and I'm going to delete the `Surface (Srf)` coming out of the B. Then, I am going to copy and paste this `Dispatch` to create another another one. However, I want to keep the P input on this one, but I'm going to swap out the L for the flattened panels coming out of my `Flatness Check (Flat)`component. It should look something like below:

<img src="images/rationalization_progress_1.jpg" width="1000">

>**Joe's Tip #6**
>
> The highlighted objects below are relays. They are incredibly helpful in keeping your definition organized. You can create them by double clicking on a curved wire.
>
><img src="images/relays.jpg" width="500">


### Side Quest 1:
I'm going to offer these relatively difficult (but optional) challenges throughout the course and not provide a solution - I want to see if you can take knowledge from the previous lessons and repurpose them. So, see if you can create a Data Visualization where all of the panels that are too curved based on our new threshold are FULLY red - they should not be a gradient. And any panel that is below the threshold SHOULD have a gradient to show how close they are to exceeding the threshold. If you're able to figure this out, screenshot it and drop it into our class Slack channel. 

**Let's continue on with our rationalization** - we now have two different lists of panels. The first is set of curved panels that are ready for triangulation - we'll keep working on these. The second set are panels that are flat and below our threshold - we're done with these for now. 
- I'm going to teach yet another foundational technique for computational building design, which is the ability to break geometry down into it's vertices and use these to construct new geometry. If you look at the sketch below, you'll see I can take a rectangle and define the vertices as A, B, C, and D. After that, it's as simple as playing connect the dots to create subgeometries. This method is good for a few reasons. First, it keeps future Grasshopper operations lights since I am working with points and lines, not intersections or solids. Second, I can use the points to host future operations and create more complex build ups on top of it, like hosting a more detailed triangular panel within our newly created one. Third, by being rigorous and organized, you can simplify the creating of subgeometries and faciliated future translation to Revit. 

<img src="images/panel_sketch.jpg" width="500">

- It's good to be consistent with standards. For the purposes of this class, our first point (A) will always be the lower lefthand corner of the panel, and the rest will go clockwise from there. 
- Now that we've established the logic, let's execute it in Grasshopper. Take your `Srf:CURVED FOR TRIANGULATION` component and plug it into a `Deconstruct Brep (DeBrep)` component. This is another very popular component, and provides three outputs: F which is all of the individual faces of the input in a list, E with is all of the individual edges, and V which is all of the individual vertices. We're going to use V. Plug a `Point (Pt)` container into this, rename it for clarity as I've described above, and turn off the visibility of the prior elements. 
- What is coming out of the V is a new type of data structure, called a Data Tree. This is another critical concept in Grasshopper. If you are not familar, please take some time to review [this section of the Smorgasbord](https://cdp.arch.columbia.edu/smorgasbord/modules/4-grasshopper-intro/45-working-with-data). I can't tell you how critical the understanding of Data Trees is, and the concept will continue to challenge you throughtout your computational journey. However, the more you can manage Data Trees, the more versatile you will be. For our purposes we now no longer have a single branch of objects, but rather multiple branches (one for each panel) that each contain a list of 4 points.
- To check to make sure the output of the V is in the right order, plug in a `Point Order (Order)` component. This will give you a set of different colored arrows showing how your points are organized.  

<img src="images/rationalization_progress_2.jpg" width="1000">

- My points are looking good - they start in the lower left-hand corner and run clockwise. The order of these points will be driven by the underlying logic of your orginal surface. If your points aren't ordered like mine, you might need to do some list manipulation. Check the first link directly above, as well as [this resource](https://modelab.gitbooks.io/grasshopper-primer/content/1-foundations/1-4/6_list-management.html) for more information on manipulating lists. 
- Now that are points are extracted and ordered properly, let's create our ABCD logic. We're going to use a `List Item (Item)` component to do this. Plug your new Data Tree of points into the L input on the `List Item (Item)`. The i output on this component gives you the first item in EACH list - so it's not just one value, but rather the first item for EACH panel - so it should be dozens or hundreds of points. The inportant thing to note, however, is that this will be the lower left hand corner point of each panel! By default, this gives you the first item in each list. But if you wanted to start with a different one, plug a value in to the i input to define the starting point. 
- Let's get the other three. This is easy - just zoom in to the `List Item (Item)` component until you see a plus button pop up - now add three more outputs to get a total of 4 points.

<img src="images/list_item_zoom.gif" width="500">

- We now see i, +1, +2, and +3. Put a `Point (Pt)` container on each, and rename these A, B, C, and D so you don't get lost later (trust me). 
- Ok remember our sketch? Let's do some connect the dots and wrap this up - use a `Merge` component, and plug in points A, B, D into inputs D1, D2, and D3, in that order. This basically creates a new series of lists that contain the three points we need for a triangle. Create a new `Merge` component, and plug in B, C, and D in order. Create a `Polyline (PLine)` and plug the first `Merge` into it. Repeat this process for the 2nd `Merge`. Finally, create a `Boolean Toggle (Toggle)` component, make sure it is set for True, and plug it in to the C inout on both `Polyline (PLine)`. This portion of your definition should look something like this:

<img src="images/rationalization_progress_3.jpg" >

If your definition doesn't look right, [download my version here](definitions/subdivision_dispatch_triangulation.gh).

Amazing - we now have a function that does a few things (which could individually also be consdered sub-functions):
- It will seperate out panels based on a deviation from flatness threhold
- It will create a flat 4 sided panel if it is below the threhold
- It will triangulate any panels that exceed our threshold

<img src="images/triangulation_demo.gif" width="1000">

## Use Case 4: Analysis: Analyze Against an External Factor

I'm going to demonstrate another analysis use case that is common practice. We covered analyzing your own geometry, but what if you wanted to analyze your surface against some external factor? For example, maybe you want to create shading based on exposure to harsh light. Or perhaps you want to add density to your facade in areas that you need privacy, and create openness in areas where you want to have views to the exterior. You will have some external factor that drives your geometry, you will need to determine your design's relationship to that external factor, and finally you will need to understand how that factor should influence your design. 

For example, let's say we want to create an atrium that has a clear view of the sky, but we want views out horizontally to be more private - so the more direct views of the sky the panel has, the more open we want it to be. Let's figure out how to do that by picking up where we left off with our last function. Take a look at the definition below to see how to prep yourself for the next steps.

<img src="images/sky_analysis_progress1.jpg">
<img src="images/sky_analysis_progress2.jpg" width="500">

I've pulled forward the critical outputs and clearly identified them. We MAY need some other info from previously in the definition, but in an ideal situation, we have a clearly defined set of outputs that lead us into our next function. Also, you can see how clean my definition is, with each blue rectangle defining a specific function. Take some time to get organized if you haven't yet.

Ok, let's do our sky analysis.

- To be able to determine exposure to the sky, I first need a vector that is normal to the surface of my panels. I'm going to use an `Evaluate Surface (EvalSrf)` component to do this. This component has two Inputs - the first is s, which requires an **untrimmed surface** (note it will accept a trimmed surface, but convert it into an untrimmed one). The second input is uv which is looking for a set of u,v coordinates. You can think of u,v as similar to x,y except x,y are **global coordinates** relative to your Rhino file and coordinate system, and u,v are **local coordinates** relative to the geometry you are evaluating.
- Getting back to the `Evaluate Surface (EvalSrf)` component - you'll see there are a bunch of outputs. Each of these is incredibly helpful and you'll probably use them all at some point during your computational journey. Right now they aren't giving any results, but that is because we haven't provided any surfaces or uv coordinates.
- To first get a set of surfaces, grab the first set of triangles and plug them in. to the s input on the `Evaluate Surface (EvalSrf)` component. 
- Now, we need a set of coordinates. To do this, we can use an `MD Slider` component. By default, this is set to O.5 ; 0.5 which for our purposes is great. Beacuse each panel is flat, we should have the same normal vector no matter where we evaluate it. Just leave it at this value for now but feel free to move it around to see how it affects your model. Beforme moving on, we want to **reparameterize** the surface input on the `Evaluate Surface (EvalSrf)` component. Right click on the S and make sure you turn on **reparameterize** . This ensures the surface is being evaluated relative to itself - so previously the 0.5 ; 0.5 would be an absolute coordinate - now it is relative. It actually doesn't really matter for this exercise, but I'd like you to get familiar with the concept of **reparameterization**.
- Are we missing a step here? Depends on how explicit you want to be. We are plugging a closed curve into the `Evaluate Surface (EvalSrf)` component. So how can it evaluate a surface if it's not recieving one? The good news is that some Grasshopper components assume what you are trying to do and perform the conversion for you. So, what this component is doing is evaluating the input (a closed curve) and if it is not what it expected, it will perform a conversion to what it is expecting (a surface). When you send data to a component, it is called **casting** and sometimes there are multiple data types that you can **cast** to a component. 
- Now that the `Evaluate Surface (EvalSrf)` is working, take a look to see what each of the outputs is providing. As I mentioned, there is a lot of great info coming out of this component, but for now we want to work with the N output, which is the surface normal at the uv coordinate. 
- To finalize this step, we need to do a few things. First, I always like to visualize my vectors to help me understand what is happening. To do this, we are going to use a `Line SDL (Line)` component. This is yet another incredibly helpful component. Plug the P and N from the `Evaluate Surface (EvalSrf)` component into the S and D of the `Line SDL (Line)` component, respectively. We are basically giving it a starting point and a direction based off our surface. We now need to give it a length - this can be a fixed number, so create a `Panel ()` component, set it to a value of 10, and plug it in to the L on the `Line SDL (Line)` component. Now, copy and past the `Evaluate Surface (EvalSrf)` and the `Line SDL (Line)` components two times, and and replace the two new S inputs with your second set of triangles and your flattened 4 sided panels. You can use the same `MD Slider` to fee all three. The last step is to **graft** the 4 sided surfaces using a `Graft Tree (Graft)` component so the data structure matches the triangles (each element in its own branch). Your definition and model should look like the following:

<img src="images/sky_analysis_progress3.jpg">

- Ok, now that we have the normal vector, we need a vector representing exposure to the sky so we can measure the angle between the two. This will be relatively easy. We're going to create a new `Line SDL (Line)` component and use the same S input (the point on the surface) and the same L input (10). However, we'll swap out the D input for the Z vector - which is easy. Just use a `Unit Z (Z)` component. Do this three times, and you should now have a line pointing directly up in addition to the one that points normal to each surface.
- Before me measure the angle bwtween the two vectors, we're going to create a plan to help measure the angle. This is probably not necessary here, but it is really good practice. We will often try to describe scripts as **bulletproof** which means they will have some additional measures built into them to prevent them from breaking in most (hopefully all) scenarios. I'm going to show you a few techniques on how to do this, and using the plane to help measure the angle is one of them. Once you get in the habit of doing this, it only take a few extra minutes and will ensure more accuracy downstream in your future scripts.
- There are may ways to create planes, but for this instance we will use the `Line + Line (LnLn)` component. This takes two inputs, A and B, both lines. Plug your vertical line into the A, and your normal line into the B, and it should create a plane that is parallel to each of them. 
- Finally, we will use an `Angle` component to measure the angle. Plug the vertical line into the A, the normal line into the B, and the plane we just created into the P. Put a `Panel ()` on the A output to see the results (note Grasshopper angles are always in Radians).

<img src="images/sky_analysis_progress4.jpg">

Your definition should look like this - if it doesn't you can [download mine from here](definitions/subdivision_skyview_analysis.gh).

We'll use the output angles from this function to drive the openings of our panels in the next (and final) sequence.

## Use Case 5: Mass Customization: Creating Unique Panels with an Underlying Computational Logic

Now we've laid a great foundation to finish out panelization. We have a clean defnition that is clearly broken down into discreet functions. We have clean curves to work with. And we have clearly defined angles to use for panel sizing. Now let's bring it all together.  

We've done a lot of work to this point, and you may find that these last few staps are actually the quickest, or most strightforward. That is the nature of computational modeling - there is a lot of up front work that goes into building your definition, but the result is something that is accurate, flexible, and able to model complexity that wouldn't be possible without it. 

To get yourself set up for the final portion, go ahead and create number containers for all of the angle outputs, and also duplicate the surface outputs and bring them forward. What we're going is extracting our critical data and geometry and isolating it elsewhere in the definition, so we don't get mixed up and can clearly create a new function. Make sure you're using the grafted 4 sided surfaces, or re-graft if needed. Don't be afraid of white space on your Grasshopper canvas - it is easier to read and gives you space to work. 

<img src="images/mass_customization_progress1.jpg">

We have our critical inputs isolated, let's set up our customization. 
- First, we currently have two data sets (panels and angles) what each have three groups within each (triangles 1, triangles 2, and 4 sided panels.) This means we are trasking 6 different inputs and have currently been operating on each one individually. Let's try to simplify this by merging the branches a bit. We are going to use an `Entwine` component to do this. Well, two actually. Create one, and right-click on it. Make sure the option to Flatten Inputs is OFF. Underneath the component it should not say "Graft". Plug the three angle number inputs into the three inputs on the `Entwine` component. Repeat this process for the three different panel types - make sure you uncheck the Flatten Inputs again. 
- Now we have two data trees to work with rather then six. Let's first create our panel offset distances using our angles. To do this, we are going to remap the values to be dimensions that we can work with. We have angles and need to convert them into foot-based offsets (or whatever unit your file is in - ideally feet though so our numbers make sense). Remapping is another foundational technique in Grasshopper. So, drop a `Remap Numbers (ReMap)` component on your canvas. This takes a set of values to remap (our angles), a source domain (the lowest and highest angle values), and a target domain (this will be adjustable based on our desired offsets).
- Simplify the values that re coming out the the `Entwine` component that hols your angles. You can do this by right-clicking on the R and turning on Simplify. This removes unnecessary branches from our data tree and will help us align our two trees later on. Then, take this simpilfed data and plug it in to the V on the `Remap Numbers (ReMap)`.
- Now we need to create a source domain - to do this, we need to flatten our angles that are coming out of our `Entwine`. This allows us to evaluate all of the angles as one 
list rather then in seperate branches. To do this, drop a `Flatten Tree (Flatten)` component onto the canvas and plug the same R output from the `Entwine` into it. 

>**Joe's Tip #7**
>
> I never, ever flatten or graft inputs/outputs within the component by right clicking. I am ok with simplifying and reparameterizing, since those are usually operations that you want to carry downstream and don't remove any data structure. With grafting or flattening, it makes it very hard to un-do that operation later on. Plus, you often want the option of using both the grafted and flattened data, and if you do this operation in the component you can't get both. 
>
> Also, never set values or formulas directly in a component - always use a panel or some other input. It is very hard to see and track down internalized values/formulas and can lead to confusion if other people are working in your definition. It seems like more work, but is a better standard and makes collaboration easier. 

- Now take out flattened values and plug them into a `Bounds (Bnd)` component - this gives us the lowest and highest value from our list of all angles. Plug the output from this component into the S on the `Remap Numbers (ReMap)` component.
- Let's next construct a custom domain - you can use the handy `Construct Domain (Dom)` component to do just that. Now create two sliders that range from 0 to 3 or so, with 2 decimal points of resolution. Plug one into the A input on the `Construct Domain (Dom)` and the other into the B. Note that your B will end up being a lower number since you want the relationship of the angle to be inverse to the opening size (larger difference, smaller opening). Now plug the output of this component into the T on the `Remap Numbers (ReMap)`. This portion of the definition should look like this:

<img src="images/mass_customization_progress2.jpg" width="1000">

- Now let's finish up the offset. Take your simplified and entwined panels and plut them into the S of a NEW `Evaluate Surface (EvalSrf)` component. This is a bit redundant, but similar to the angle component, the `Offset Curve (Offset)` component works better when you give it a plane. We'll use the F output from the `Evaluate Surface (EvalSrf)` for that. Also create a new `MD Slider` and plug it in to the `Evaluate Surface (EvalSrf)`. 
- Place a `Offset Curve (Offset)` component. Take the entwined, simplified surfaces and plug them into the C of the `Offset Curve (Offset)` component. Remeber how `Evaluate Surface (EvalSrf)` converted our curves to surfaces? Well, `Offset Curve (Offset)` will convert our surfaces to curves. 
- Next take the F from the new `Evaluate Surface (EvalSrf)` and plug it in to the P on the `Offset Curve (Offset)`. Finally, take the R output from the `Remap Numbers (ReMap)` component and plug it into a `Negative (Neg)` component. This is because we want our offsets to go inwards, not outwards. Plug the output of this `Negative (Neg)` into the D on the `Offset Curve (Offset)`. You should now have the curves offsetting inside your panels! Hide the visibility of other objects if it's hard to track.
- To finish this off, let's loft the curves to create a frame. Simplify the output of the `Offset Curve (Offset)` component and plug this into the first input of a newly created `Merge` component. Then, plug the output of the simplified `Entwine` component containing your panels into the second input of the `Merge` component. Plug the output of the `Merge` component into the C input of a newly created `Loft` component.
>**Joe's Tip #78**
>
> Also try to avoid plugging multiple output wires into a single input wire - it is hard to reconfigure, add, and remove later. Use a `Merge` component to do this instead.

### Side Quest 2
There's an opportunity to merge the data trees earlier and simplify the definition - can you see it? Hint: we may not need to to the evaluate surface/angle measurement function in three paths. Can you figure out how to merge them? If so, take a screenshot and post it in the class Slack. This approach is cleaner, but harder to manage from a data tree perspective. 

Your completed mass customization function should look like this. The final definition is at the bottom of the page if you need it:

<img src="images/mass_customization_progress3.jpg" width="1000">

## Conclusion

Ok! We're finally done with this section. Test your definition out - it should look and perform like the following screenshots. I've also cleaned up the definition a bit. Your definition should be able to adjust density of the panels, adapt to the underlying host surface, adjust the flatness threshold, and control the frame offsets. Note you may get some overlapping offsets - you will just need to go back and adjust the offset domain inputs to control this:

<img src="images/final_def.jpg">

<img src="images/final_demo.gif" width="1000">


**[Download my definition here](definitions/subdivision_final_def.gh) if you need it.**

On to the next section!