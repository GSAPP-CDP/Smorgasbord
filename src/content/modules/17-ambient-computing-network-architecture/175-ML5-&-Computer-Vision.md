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
In this module you will learn how to work with computer vision in P5: 
- setting up a webcam for video capture
- general understanding of how computer vision works
- using the ml5 library (includes computer vision)
- implementing face detection

## Why Computer Vision?

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
### 1 - Setup Your Environment
- To use P5.js and ML5.js, include the following scripts in your HTML file:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ml5/0.4.3/ml5.min.js"></script>

```
These urls allow P5.js to access the ml5 library.

### 2 - Accessing the Webcam
First, we need to set up the webcam to capture video input:

```javascript
let video;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO); 
    video.size(width, height); 
    video.hide(); 
}

function draw() {
    image(video, 0, 0, width, height); 
}

```

### 3 - Introducing ML5.js
 ![cv-6](images/cv-6.png#img-left)    
 *computer vision tracking RGB values of individual pixels*   
 
ML5.js is a library that makes machine learning accessible to beginners and experts. It works with the P5.js library and simplifies tasks like image classification, neural networks, and face detection. ML5 includes pretrained ML models that can be run in the browser allowing you to create interactive web projects that leverage ML.
To effectively use ML5.js, you should familiarize yourself with its documentation. You can find the ML5.js [documentation here](https://learn.ml5js.org/#/).
In the left hand side you will see the outline for the library's documentation. You'll see it includes pose and body detection but also ML models that do image classification. As you browse these various sections you can see references for how to use each respective capability.
 

### 4 - Implementing Face Detection
 ![cv-7](images/cv-7.gif#img-left)    
  *computer vision camera detecting a face*   
Now that you have your webcam set up and an introduction to ML5.js, let's add face detection to your project.
Update sketch.js:
```javascript
let video;
let faceApi;
let detections = [];

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();

    // Initialize the ML5 Face API
    const options = { withLandmarks: true, withDescriptors: false };
    faceApi = ml5.faceApi(video, options, modelReady);
}

function modelReady() {
    console.log("Face API Ready!");
    faceApi.detect(gotFaces); // Start face detection
}

function gotFaces(error, results) {
    if (error) {
        console.error(error);
        return;
    }
    detections = results; // Store the detected faces
    faceApi.detect(gotFaces); // Keep detecting faces
}

function draw() {
    image(video, 0, 0, width, height);
    if (detections.length > 0) {
        drawFaces(detections); // Draw a box around each detected face
    }
}

function drawFaces(detections) {
    for (let d of detections) {
        const { x, y, width, height } = d.alignedRect._box;
        noFill();
        stroke(0, 255, 0);
        strokeWeight(2);
        rect(x, y, width, height);
    }
}

```

 
### Challenge
How might you create a system of your own?
Example: Consider an icebreaker system for strangers at a party
- Check whether faces are in view
- place a camera where you want to detect whether there are stranger faces in the location where you want strangers to meet

### Example Student Project 
 ![cv-7](images/cv-11.gif#img-left)    
 *Zeid Ghawi, 2019, changing a light based on their location in a room*   
 
 marker tracking layer          |  Processing Canvas      |  Processing IDE  
:-------------------------:|:-------------------------:|:-------------------------:
!![cv-7](images/cv-12.gif#img-left)  | ![](images/cv-14.gif#img-left)   | ![](images/cv-13.gif#img-left)

 ![cv-10](images/cv-10.png#img-left)   
 *Zeid Ghawi, 2019, room diagram of project above*   
 

