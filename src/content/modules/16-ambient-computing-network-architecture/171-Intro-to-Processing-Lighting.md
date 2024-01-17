---
moduleid: 171
title: "Intro to Processing"
published: True
slug: intro-to-processing
authors:
 - "Violet Whitney"
---

Intro to Processing 
===========================================
## Module Summary
In this module you will get an intro to the Processing environment, build a simple sketch and learn how to find, understand, and use Processing Documenation in your own sketches.

## What is Processing and why use it?
Processing is a flexible software sketchbook and a language for learning how to code within the context of the visual arts. Its an especially great environment for ambient computing because it will allow you to prototype projection mapping that responds to interactive inputs like (a web cam, markers, or a multitude of triggers from the web). Many artists choose to work with Processing because of its visual interface and its simplicity. Processing can be a great environment to prototype user interfaces, tie together IOT devices, and work with interactive audio.


![processing-ex](images/processing-ex-5.gif#img-full)   
*example of Processing artist work*   
![processing-ex](images/processing-ex-4.gif#img-full)   
*example of Processing artist work*   
![processing-ex](images/processing-ex2.gif#img-full)   
*example of Processing artist work*   
![processing-ex](images/processing-ex1.gif#img-full)   
*example of Processing artist work*   


## Tutorial

1. **Download Processing.**  
Place [Processing](https://processing.org/download) in the Applications folder on your computer (or Program Files for Windows). When you double click Processing, it should install and launch the application with a new empty sketch. A sketch is where you will write your code. We’ll be writing code in Java inside of Processing.

2. **Basics**  
Processing includes 
   * a text editor - where you write your code (called a "sketch" in Processing)
   * a compiler - translates code written in a high-level language into a set of machine-language instructions that can be understood by a digital computer's CPU 
   * a display window - where visuals created by your sketch are displayed

![processing-diagram](images/processing-diagram-2.gif#img-full)
*breakdown of Processing IDE (integrated development environment) and Canvas*



You will have two basic parts within a Processing "sketch", the **“setup”** and the **“draw”** loop. The setup loop runs once when launching your script, whereas the draw loop runs repeatedly. This allows you to save computing power by sticking parts of the code that only need to run at the start in the setup loop. The draw loop will continually update so it can change over time, or get realtime information such as the location of your mouse or update a camera feed.

```
void setup() {
  size(1280, 960);
}
  
void draw() {
  background(0);
  ellipse(mouseX,mouseY,500,510);
}
```

![light-image](images/processinig-setup-vs-draw.png#img-full)  
*Processing setup vs draw loop*

3. **Documentation Intro**  
The basis of learning to code is really about learning how to find and use information (usually online). Rarely does anyone know off hand the exact syntax and operations to write all of their code from scratch. Rather, creative technologists and even seasoned software engineers regularly use the documentation pages for a programming language or a development environment to understand how a particular programming language functions, its operations, and so they can borrow from what's already written.
You can find Processing's documentation here:
[Processing Documentation](https://processing.org/reference/)

4. **Using Documentation**    
If we look around within Processing's documentation, we'll see all kinds of operations and parameters we can use in our code. So much possibility! Poke around and click into some of the functions you see. Lets look into `background()`. You'll see if we click into [background](https://processing.org/reference/background_.html) we'll get information on how to use this function, what parameters it expects, and some examples. It looks like it takes a single number `background(51);` for a value between black and white, or 3 numbers `(background(152,190,100);` for RGB values.

![light-image](images/17-160-0-Processing-Background-Color.png#img-full)
*3 Processing canvases with RBG values of the background changed*

**CHALLENGE**  
Can you change the background to yellow?


Here are some other fun functions to play with in your sketch.
```
fill()
noFill()
stroke()
brightness()
color()
hue()
saturation()
```

**CHALLENGE**  
Can you change the fill and stroke of the ellipse?

5. **Understanding the Draw Loop**  
Remember the draw loop runs continuously so you can build interactive functionality. Lets take advantage of this to see other ways we can get our ellipse on the screen to move. You can think about your sketch as one long algebra formula where substitutions can be made to the code. Most locations where you see `()` accept parameters that are specific to the function. Remember the "R,G,B" number values we added as parameters to our `background()` function.
To make the ellipse move we can edit its `x` and `y` parameters. [Let's look up what parameters the ellipse accepts](https://processing.org/reference/ellipse_.html). Looks like its syntax is `ellipse(x-coord, y-coord, width, height)`	where each of those parameters is a number (a float to be more specific).

`x` moves each `second`             |  `width` and `height` grow each `second`         |  `width` and `height` grow each `millis`
:-------------------------:|:-------------------------:|:-------------------------:
![](images/17-160-0-Processing-incremental.gif)  |  ![](images/17-160-0-Processing-step.gif)  |  ![](images/17-160-0-Processing-slow.gif)


**CHALLENGE**  
With the help of the exercises above, please create your own script.
Consider changing the:
- [colors](https://processing.org/reference/#color), 
- shape ([ellipse](https://processing.org/reference/ellipse_.html), [square](https://processing.org/reference/square_.html), etc)
- time ([second](https://processing.org/reference/second_.html), [month](https://processing.org/reference/month_.html), [minute](https://processing.org/reference/minute_.html), [millis](https://processing.org/reference/millis_.html), [hour](https://processing.org/reference/hour_.html), [day](https://processing.org/reference/day_.html)) 
- ADVANCED - Consider using a new function not referenced in this tutorial from the Processing Documentation. For example use your mouse ([mousePressed](https://processing.org/reference/mousePressed.html)) to control the above elements of your script. Or consider adding [text](https://processing.org/reference/text_.html).

Document your lighting effects through videos and gifs. Extra bonus points for testing some light projection with a projector! Can you play with aspects of the room to get your projection to align with the space?

* Some other useful tips
   * If you are looking for more examples — you can find some great things to try under `File` > `Examples`. This brings up a lot of various examples which you can play around with and learn how different bits of code are functioning.
   ![examples](images/processing-ex-1.png#img-full)   
   *Processing examples menu location*

**TIPS & TRICKS** 
   ```
   //these two slashes create a comment in your code
   ```
  `print()` allows you to see the values of a parameter in the console. For example, if you add this `print(second());` in the draw loop, you will see a continual update in the console of your second parameter. Give it a try! 
  
## Example Student Projects
The following are ambient computing projects from students working with Processing in a course called [Measuring the Great Indoors](https://medium.com/measuring-the-great-indoors) co-taught by Gaby Brainard and Violet Whitney. They give a sampling of the kinds of possibilities when working with Processing.  

While smart home products often orient around individual users, Wenya Liu was interested in the governance and voting of groups. How do you decide if a light is turned on or off? Who gets to decide? They used moods of people to change the lighting. When everyone’s having fun at a party the light is white, but when one person gets angry or sad the light goes red.  
  ![wenya student project](images/Wenya-Liu.gif#img-full)   
  *Wenya Liu, Mood Lighting, 2018*
  
Yanan Zhou was interested in creating a light reflection that emphasizes the time of day while working in a stationary place.  
  ![Yanan Zhou student project](images/Yanan-Zhou.gif#img-full)   
  *Yanan Zhou, Day Times, 2020*
  
 Daniel Chang, Yanan Zhou, Enrique Bejarano created a projected “wallpaper” that updates whenever anyone leaves or enters a webcam frame, serving as a visual reminder and connector to the constant activities happening during largely isolated activities that occured during the COVID pandemic in 2020.
  [Synchronized Wallpaper](https://www.youtube.com/watch?v=Zn2bYJPMXRw)  
  ![student project](images/synchronized-wallpaper.png#img-full)
  *Daniel Chang, Yanan Zhou, Enrique Bejarano, Synchronized Wallpaper-Network Diagram, 2020*
  
