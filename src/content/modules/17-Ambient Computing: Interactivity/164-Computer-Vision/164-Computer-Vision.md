---
moduleid: 0
title: Template as template
published: True
slug: template-template-template
---
# Sequence: Ambient Computing: Interactivity
## Sequence Summary:
This sequence of modules introduces concepts of ambient computing including inclding interactivity inside of Processing. You will learn how to use Processing and create an interactive sketch. You will learn how to connect Processing to Microservices using Webhooks; how to work with sound and speech with a microphone and speakers; how to work with Processing Libraries; and how to track the movement of objects and people via a webcam.
## Why?
ambient computing 
low code prototypeability
interactivity

Ambient computing - the breakdown of separation between the computer and your environment - including XR
this moment of remote - telepresence and ability to communicate seamlessly between locations
ability to not leave your environment means ability to flip the notion of personalized devizes. Rather than one-person, one-computer, we can think about whole groups sharing experiences. We can design whole environments (rooms, public plazas) to have the intelligence of our computers, rather than individualized computers having such intelligence.
Whats at stake? Importance of breaking down the unintended consequences of individualized computing, 
Concepts designers must think through - permissioning (governance of groups), ethics of privacy and tracking, what is consent in group spaces?


## Modules:
Intro to Processing
Webhooks
Sounds, Speech and Macros
Markers and Tracking
Computer Vision

Ambient Computing:
===========================================

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

Understanding motion in physical space has a long history, and it impacts the way spaces are programmed and designed today.
In the 1950s Frank and Lilian Gilbreth pioneered scientific management looking at how processes in factories and even in the home in kitchens could be optimized for speed. Each tasks was documented in a grided environment with cameras and timers. By tracking movement over time the couple was able to study and make recommendations for how movement and motion could be “improved” to create less wasted time and energy in a factory.

![cv-1](images/cv-1.jpeg#img-left)
![cv-2](images/cv-2.gif#img-left)

### AB Testing in Physical Space
In the same way online environments are AB Tested. Physical spaces have also been tested to be optimized. The film “The Founder” documents have furniture and layout of a restaurant was optimized to improve efficiency in a McDonalds.

![cv-3](images/cv-3.jpeg#img-left)
VIDEO

Today tactical urbanists AB test spaces deploying lightweight furniture in physical spaces:
![cv-4](images/cv-4.jpeg#img-left)
![cv-5](images/cv-5.jpeg#img-left)

## Tutorial

### Referencing Your Webcam
1. To get started you will need the computer vision library to capture video feed from your camera: `Sketch` > `Library` > `Import Library` > `Video Library`
  - *Capture* — captures live feed from a camera source or webcam
  - *Video* — takes in a video source
  - *Capture* and *Video* have the same functionality as a *PImage*

2. If you wanted to detect the movement of an object, how would you track it? You need to understand the change in the image. You could loop over every pixel in the frame storing its pixel values from RGB and comparing how much in changed from the last frame.
 ![cv-6](images/cv-6.jpeg#img-left)
 ![cv-7](images/cv-7.gif#img-left)
 
### Face Tracking
1. To get started you will need these libraries: Go to `Sketch`→`Import Library` → `Add Library` →and search for the following libraries: *Video* and *OpenCV for Processing*
 ![cv-8](images/cv-7.gif#img-left)
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
 ![cv-9](images/cv-9.jpeg#img-left)
 
