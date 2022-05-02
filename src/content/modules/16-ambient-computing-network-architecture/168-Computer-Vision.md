---
moduleid: 175
title: Computer Vision
published: True
slug: computer-vision
authors:
 - "Violet Whitney"
---
# Computer Vision
## Module Summary
In this module you will learn how to work with computer vision in processing: 
- importing a computer vision library
- general understanding of how computer vision works
- color tracking
- face tracking

## Conceptual Introduction, or: Why is this interesting / important?

### Computer Vision
Computer vision is an interdisciplinary field that deals with how computers can be made for gaining high-level understanding from digital images or videos. From the perspective of engineering, it seeks to automate tasks that the human visual system can do.
It is particularly useful to track movement behavior and objects (cars, dogs) and people. In the image below we can see how computer vision is used for pedestrian trackin to understand foot traffic in relation to retail shops.
![cv-0](images/cv-0.gif#img-left)    
*computer vision used for tracking customer "foot fall" or amount of pedestrian steps in front of and going into stores*   

Understanding motion in physical space has a long history, and it impacts the way spaces are programmed and designed today.
In the 1950s Frank and Lilian Gilbreth pioneered scientific management looking at how processes in factories and even in the home in kitchens could be optimized for speed. Each tasks was documented in a grided environment with cameras and timers. By tracking movement over time the couple was able to study and make recommendations for how movement and motion could be “improved” to create less wasted time and energy in a factory.

![cv-1](images/cv-1.jpeg#img-left)   
*Frank and Lilian, Gilbreth Motion Studies*   
![cv-2](images/cv-2.gif#img-left)    
*Frank and Lilian, Gilbreth Motion Studies*   

### AB Testing in Physical Space
In the same way online environments are AB Tested. Physical spaces have also been tested to be optimized. The film “The Founder” documents have furniture and layout of a restaurant was optimized to improve efficiency in a McDonalds.

![cv-3](images/cv-3.jpeg#img-left)    
*Scene from "The Founder", optimizing ergonomics and movements of a McDonalds store*    

Today tactical urbanists AB test spaces deploying lightweight furniture in physical spaces:
![cv-5](images/cv-5.jpeg#img-left)    
*tactical urbanism employing prototyping in the built environment*   

## Tutorial

### Referencing Your Webcam
1. To get started you will need the computer vision library to capture video feed from your camera: `Sketch` > `Library` > `Import Library` > `Video Library`
  - *Capture* — captures live feed from a camera source or webcam
  - *Video* — takes in a video source
  - *Capture* and *Video* have the same functionality as a *PImage*

2. If you wanted to detect the movement of an object, how would you track it? You need to understand the change in the image. You could loop over every pixel in the frame storing its pixel values from RGB and comparing how much in changed from the last frame.
 ![cv-6](images/cv-6.png#img-left)    
 *computer vision tracking RGB values of individual pixels*    
 
### Face Tracking
 ![cv-7](images/cv-7.gif#img-left)    
  *computer vision camera detecting a face*    
1. To get started you will need these libraries: 
  - Go to `Sketch`→`Import Library` → `Add Library` →and search for the following libraries: *Video* and *OpenCV for Processing*
 ![cv-8](images/cv-8.png#img-left)   
 *Processing step 1*   
 
2. Next you will need to download the [jARToolkit](https://drive.google.com/file/d/1gswr4KWUrkbHAcEUYhlIRpBt2_SNxeB_/view) library directly.
  - Unzip the folder.
  - Search for your `Processing` folder on your computer, you will have a sub-folder names `libraries`.
  - Move the unzipped files to your `libraries` folder.
  - Save, close and restart Processing.
  
  Your final code should look like this:
  
  ```java
  import gab.opencv.*;
import processing.video.*;
import java.awt.*;
Capture video;
OpenCV opencv;
void setup() {
  size(1280, 960);
  video = new Capture(this, 640, 480);
  opencv = new OpenCV(this, 640, 480);
  opencv.loadCascade(OpenCV.CASCADE_FRONTALFACE);  
  video.start();
}
void draw() {
  scale(2);
  opencv.loadImage(video);
  background(0);
 
  noFill();
  stroke(0, 255, 0);
  strokeWeight(3);
  Rectangle[] faces = opencv.detect();
  
  for (int i = 0; i < faces.length; i++) {
    rect(faces[i].x, faces[i].y, faces[i].width, faces[i].height);
    PImage crop = video.get(faces[i].x, faces[i].y, faces[i].width, faces[i].height);
    image(crop,faces[i].x, faces[i].y, faces[i].width, faces[i].height);
    //image(crop,50, 50, 200, 200);
    //println(faces[i].x);
  }
}
void captureEvent(Capture c) {
  c.read();
}
```
### Challenge
How might you create a system of your own?
Example: Consider an icebreaker system for strangers at a party
- Check whether faces are in view
  - place a camera where you want to detect whether there are stranger faces in the location where you want strangers to meet

- Create a message
  - use [sound](https://medium.com/measuring-the-great-indoors/sounds-speech-in-processing-df1e908940c) in Processing to play a message
  - use an `if` statement to play your message anytime you detect more than one face that will cue your strangers to meet with a fun icebreaker

### Example Student Project 
 ![cv-7](images/cv-11.gif#img-left)    
 *Zeid Ghawi, 2019, changing a light based on their location in a room*   
 
 marker tracking layer          |  Processing Canvas      |  Processing IDE  
:-------------------------:|:-------------------------:|:-------------------------:
!![cv-7](images/cv-12.gif#img-left)  | ![](images/cv-14.gif#img-left)   | ![](images/cv-13.gif#img-left)

 ![cv-10](images/cv-10.png#img-left)   
 *Zeid Ghawi, 2019, room diagram of project above*   
 

