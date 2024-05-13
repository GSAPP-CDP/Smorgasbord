---
moduleid: 171
title: "P5.js Intro"
published: True
slug: intro-to-P5
authors:
 - "Violet Whitney"
---

Intro to P5 
===========================================
## Module Summary
In this module you will:
- Intro to the P5.js environment
- build a simple sketch
- learn how to find, understand, and use P5 documentation

## What is p5.js and why use it?
P5.js is a JavaScript library for creative code. It’s a flexible software sketchbook and a language for learning how to code visually and use it for the creative arts. Its an especially great environment for physical computing because it will allow you to prototype projection mapping that responds to interactive inputs like (a web cam, markers, or a multitude of triggers from the web). Many artists choose to work with P5 because of its visual interface and its simplicity. P5 can be a great environment to prototype interfaces, tie together IOT devices, and work with interactive audio.


 
![processing-ex](images/processing-ex-4.gif#img-full)   
*example of P5 and Processing artist work*   
![processing-ex](images/processing-ex2.gif#img-full)   
*example of P5 and Processing artist work*     
   


## Tutorial

1. **Setting Up P5.**
- Open the [p5.js web editor](https://editor.p5js.org/).
- No downloads needed. It’s all online!
- Login and create an account. (top right corner)
- This lets you save and revisit your sketches.

2. **P5 Architecture**
- **text editor** — where you write your code (called a “sketch” in Processing). Your code is written in JavaScript, just like on the web.
- **compiler** — translates code into machine-readable instructions
- **display window** — where visuals created by your sketch are displayed

![processing-diagram](images/processing-diagram-2.gif#img-full)
*breakdown of P5 IDE (integrated development environment) and Canvas*



You will have two basic parts within a P5 "sketch", the **“setup”** and the **“draw”** loop. The setup loop runs once when launching your script, whereas the draw loop runs repeatedly. This allows you to save computing power by sticking parts of the code that only need to run at the start in the setup loop. The draw loop will continually update so it can change over time, or get realtime information such as the location of your mouse or update a camera feed.

```
function setup() {
  createCanvas(1280, 960); // Create a canvas
}

function draw() {
  background(0); // Set black background
  ellipse(mouseX, mouseY, 500, 510); // Draw ellipse at mouse
}
```

![light-image](images/processinig-setup-vs-draw.png#img-full)  
*P5 setup vs draw loop*

3. **Documentation Intro**  
The basis of learning to code is really about learning how to find and use information (usually online). Rarely does anyone know off hand the exact syntax and operations to write all of their code from scratch. Rather, creative technologists and even seasoned software engineers regularly use the documentation pages for a programming language or a development environment to understand how a particular programming language functions, its operations, and so they can borrow from what's already written.
You can find P5's documentation here:
[P5 Documentation](https://p5js.org/reference/)

4. **Using Documentation**    
If we look around within P5's documentation, we'll see all kinds of operations and parameters we can use in our code. So much possibility! Poke around and click into some of the functions you see. Lets look into `background()`. You'll see if we click into [background](https://p5js.org/reference/#/p5/background) we'll get information on how to use this function, what parameters it expects, and some examples. It looks like it takes a single number `background(51);` for a value between black and white, or 3 numbers `(background(152,190,100);` for RGB values.

![light-image](images/17-160-0-Processing-Background-Color.png#img-full)
*3 P5 canvases with RBG values of the background changed*

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
To make the ellipse move we can edit its `x` and `y` parameters. [Let's look up what parameters the ellipse accepts](https://p5js.org/reference/#/p5/ellipse). Looks like its syntax is `ellipse(x-coord, y-coord, width, height)`	where each of those parameters is a number (a float to be more specific).

`x` moves each `second`             |  `width` and `height` grow each `second`         |  `width` and `height` grow each `millis`
:-------------------------:|:-------------------------:|:-------------------------:
![](images/17-160-0-Processing-incremental.gif)  |  ![](images/17-160-0-Processing-step.gif)  |  ![](images/17-160-0-Processing-slow.gif)


**CHALLENGE**  
With the help of the exercises above, please create your own script.
Consider changing the:
- colors
- shape (ellipse, square, etc)
- time (second, month, minute, millis, hour, day)
- ADVANCED — Consider using a new function not referenced in this tutorial from the P5 Reference. For example use your mouse (mousePressed) to control the above elements of your script. Or consider adding text.

Document your lighting effects through videos and gifs. 


**TIPS & TRICKS** 
- Example Sketches
  - If you are looking for more examples — you can find some great things to try under File > Examples. This brings up a lot of various examples which you can play around with and learn how different bits of code are functioning.
- Commenting Code
  - You can add comments to your code which don’t run and are stricly to help the readability of your code like this //these two slashes create a comment in your code.
- Print
  - print() allows you to see the values of a parameter in the console. For example, if you add this print(second()); in the draw loop, you will see a continual update in the console of your second parameter. Give it a try!
- Use Giphy Capture
  - For screen capturing gifs, [Giphy Capture](https://giphy.com/apps/giphycapture) is great for macs. For more ways of creating gifs with windows and mac [go here](https://medium.com/measuring-the-great-indoors/how-to-make-gifs-fb0e33590ba2).
  
## Example Student Projects
The following are ambient computing projects from students working with Processing in a course called [Measuring the Great Indoors](https://medium.com/measuring-the-great-indoors) co-taught by Gaby Brainard and Violet Whitney. They give a sampling of the kinds of possibilities when working with P5.  

While smart home products often orient around individual users, Wenya Liu was interested in the governance and voting of groups. How do you decide if a light is turned on or off? Who gets to decide? They used moods of people to change the lighting. When everyone’s having fun at a party the light is white, but when one person gets angry or sad the light goes red.  
  ![wenya student project](images/Wenya-Liu.gif#img-full)   
  *Wenya Liu, Mood Lighting, 2018*
  
Yanan Zhou was interested in creating a light reflection that emphasizes the time of day while working in a stationary place.  
  ![Yanan Zhou student project](images/Yanan-Zhou.gif#img-full)   
  *Yanan Zhou, Day Times, 2020*
  
  
