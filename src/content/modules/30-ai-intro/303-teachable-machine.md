---
moduleid: 303
title: Machine Learning with Teachable Machine
authors:
- William Martin
published: true
---

<style>
img { border: 1px solid lightgray; }
</style>

## Teachable Machine

An accessible online demonstration of ML for vision models can be found at a Google project
called "Teachable Machine," found here: <https://teachablemachine.withgoogle.com/>.

Click on "Getting Started."

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-01.gif)

As of this writing (2024 May), there are three kinds of "projects" offered by Teachable Machine: 
Image, Audio, and Pose. Each shows an interactive, rudimentary process of training a model 
to identify patterns in imagery and sound.

![Teachable Machine by Google has three project types: Image, Audio, and Pose](https://gsapp-ms-cdp.s3.amazonaws.com/ai/teachable-machine-project-types.png)

Each involves providing data that you either gather and upload or that you capture with a 
webcam or microphone, then training a model in the browser (with just a click), and 
deploying the model in the same session to see how well it performs.

## Exercise 1: Image Project

Let's start with an "Image Project," one that enables us to train an "image classifier."
You'll first be providing sets of images, then train a model to distinguish among them, 
then run inference on this model to test whether the model can distinguish an object
of a particular "class" from another.

### Getting Started

Click on "Image Project" and select "Standard image model."

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-02.gif)

An empty project UI opens with slots for two classes and their associated images.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/teachable-machine-image-project.png)

### Pick Two or More Classes

A "class" in this case refers to a theme that relates a series of images. For
the purposes of this exercise, a class can refer to images of related objects, essentially
objects that share some categorical similarity and are also similar in appearance. For example:

- sports balls (a baseball, a basketball, a volleyball, a tennis ball, etc.)
- cups (a teacup, a coffee mug, etc.)
- cars (an SUV, a VW Bug, a sedan, a pickup truck, etc.)

For this model, a "class" can also refer to variations on the state of whatever you can
capture in the camera. For example:

- a person, a person wearing a hat, a person raising their hand, a person raising both hands, etc.
- an open-palmed hand, thumbs up, peace sign, a Vulcan salute, etc.

Pick two or more "classes" of images you could produce images of with a webcam. These can be very
simple. As a start, the simpler the better.

Name each class by clicking on the pencil icon in each class box.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-03.gif)

If you want to add more classes, just click "Add a class."

### Add Images for Each Class via Webcam

We'll now need to create representative images for each class; these will serve as the 
training data.

The most convenient way to provide a series of images is via a webcam. This allows us to 
capture a scenario demonstrating a particular instance of a class and also to vary the image 
slightly so we don't overfit on a particular view of a class instance.

Variation is important. As we'll likely see, some of the training may show some evidence of 
overfitting, such as classifying a coffee cup correctly only if it's red, or only if the handle 
is showing.

Normally, a vision model would take hundreds, thousands, or even millions of images for modern 
training, but we'll be providing only a few dozen for each class.

Okay, so to do this, for each class, click on "Webcam." The class box will pop open and your 
webcam should turn on. Your browser will likely ask for permission to access your webcam.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-04.gif)

By holding down the "Hold to Record" button for a 2-3 seconds, you can record many images 
in sequence. When doing this, remember to vary the position and rotation of the object you're 
showing, in order to provide enough variety so the model can generalize a bit, again, to work 
against overfitting.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-05.gif)

For each class, use a variety of objects or instances as well. If you're trying to distinguish 
coffee cups from soda cans, you might have three or four of each. If you're trying to 
distinguish between people with and without hats, ask a friend to help and have several hats 
on hand.

The more examples you provide, the more likely your model will be able to handle instances of 
your classes that it hasn't seen before. That's an important goal of machine learning, not only 
to classify objects, but to classify new instances of the same class that it hasn't been 
explicitly trained on. For example, if you have red, green, and blue coffee cups, you certainly 
would like the model to identify yellow ones as well, even though you might not have a yellow 
one to train it on.

Note that this model only works for static images. We may be recording multiple images with 
a camera, but the model does not have any inherent sense of motion. (But video models do.)

Go ahead and add images for all the classes you've picked.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-06.gif)

#### Training Images via Upload

Note that you can indeed upload a series of images for each class as well. This tends to be 
more tedious, as you typically need a series of images that are similarly sized and composed. 
(ML models typically standardize the sizes of the images on which they are trained, 
like 512px x 512px.)

### Train the Model!

After you have images added to each class, it's time to train the model. This one's easy. 
Just click "Train model."

Wait for a bit. This could take a few minutes.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-07.gif)

### Test the Model

Once the model has finished training, the UI will go into a predictive mode. It's using the 
model you just trained to run "inference," that is, attempting to predict what class a new 
image falls into.

Using your webcam, you'll be able to show it new images and see the model attempt to classify it. 
Try some objects that it hasn't seen yet, like a different person with a different hat.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-08.gif)

The values you see in the bar chart below the webcam are confidence levels, percentages that show 
how confident that the model has inferred the class of the object in the webcam's view.

As you test, try rotating the object, changing its orientation, changing its position in the 
webcam window, etc. Note how the computed confidence level changes. Are there cases when the 
model doesn't quite get it right?

### Screenshots

Take some screenshots of the UI showing the classes you've trained and a couple of examples of 
where the model successfully and unsuccessfully classifies some new images.

### On Confidence Levels

Confidence levels are a typical output of these kinds of models. They are expressed as percentages
here, but in code, these outputs are floating point numbers between 0 and 1 for each class. 
So if you have three classes, you'll get three confidence outputs, just as in the Teachable Machine 
interface. Many more sophisticated ML models, like image segmentation, also have outputs expressed 
as confidence levels, so it's important to understand how to interpret them. 

For this classification task, the confidence levels sum to 100%. However, in other tasks, this 
might not always be the case. There may be many outputs, like masks output from an image 
segmentation model, and each mask (one for each car, one for each building, one per person, etc.) 
might have a confidence level again from 0 to 1, which do not sum to 100%. We'll see more of 
this later.

### Chihuahua or Blueberry Muffin?

A classic example of the difficulties with ML vision models was the chihuahua vs blueberry 
muffin problem. To a simplistic vision model, these images could be easily confused, even though 
humans are quite well attuned to distinguishing between them.

![Sixteen photos of chihuahuas and blueberry muffins](https://gsapp-ms-cdp.s3.amazonaws.com/ai/chihuahua-muffin.jpeg)

This points to the fundamental problem of building vision models. We often need more sophisticated
algorithms to handle greater detail and sophisticated scenarios. And while these examples show
cases in which images show a single object, what about image that show hundreds of objects?

You can find many articles on the Chihuahua-Muffin Problem, such as [here](https://www.freecodecamp.org/news/chihuahua-or-muffin-my-search-for-the-best-computer-vision-api-cbda4d6b425d/), 
[here](https://github.com/rcgc/chihuahua-muffin), and 
[here](https://kevinlanning.github.io/DataSciLibArts/machine-learning-chihuahuas-vs-muffins-and-other-distinctions-and-ideas.html#understanding-versus-prediction).


## Exercise 2: Pose Project

This task experiments with the "Pose Project."

Pose detection could be useful to uncover how people are using a room or outdoor space. 
For example, do people tend to sit and linger, or are they always standing up? Do they 
appear to be taking selfies?

Click on the "Teachable Machine" logo in the upper left and pick "New Project." This 
should take you back to the new project screen. Select "Pose Project."

The Pose Projects work similarly to the Image Project, except they perform a different
AI "task." The model first generates a set of "landmarks" for various parts of a person,
which are points attached to predefined places on a human anatomy, like shoulders, 
elbows, knees, etc. Then the model can classify various configurations of those landmarks,
called "poses."

### Pick Two or More Classes

Like before, name the classes of poses you'd like to classify, like sitting, standing, 
selfie pose, etc.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-10.gif)

### Add Images for Each Class via Webcam

Allow webcam permissions if need be.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-11.gif)

Here, some sitting poses.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-12.gif)

And here, some selfie poses.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-13.gif)

### Train and Test the Model

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/tm-14.gif)

### Screenshots

Take some screenshots of the UI showing the classes you've trained and a couple of examples 
in which the model successfully and unsuccessfully classifies poses.

