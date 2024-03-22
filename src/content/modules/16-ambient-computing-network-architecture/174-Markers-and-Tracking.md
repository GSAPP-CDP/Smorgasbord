---
moduleid: 174 
title: Markers and Tracking
published: True
slug: markers-and-tracking
authors:
 - "Violet Whitney"
---

Ambient Computing:
===========================================

# Markers and Tracking
## Module Summary
In this module you will learn how to work with fiducial markers in Processing which will allow you to tie inputs (shapes in a UI, sound levels, turning smart home products on or off) to the position of a marker. This means you can easily track the location of objects with markers on them: chairs, cups, even people. You can also place markers on static elements in an environment: a door, a wall, a chair and detect when they are obscured by moving elements to understand whether a moving object is in a zone.

## Conceptual Introduction, or: Why is this interesting / important?
Because markers can be attached to any object: a chair, a desk, a wall, a floor, a person, this allows for more spatial triggers. So rather than engaging with phone to trigger an action in Processing or IFTTT we can use our environment as our input. Just imagine that your whole physical world are now buttons, levers, and knobs.
Can you move the position of your couch to change the volume of a speaker? Set down a book to trigger an email summary of your notes to a bookclub? Trigger a phone call with your mom when you walk into a kitchen?

Markers allow us to investigate the spatial, tangible, and impromptu potential of web connectivity. The aim is to heighten our connection to the physical world and each other by designing digital interactions beyond the screen. With social experiences and spatial interfaces, we can design interactions that engage the five senses and all three dimensions.


### Power in Furniture
The simple position of furniture in a room can dictate who is in control in a room, what activities can take place and sets a tone for what can happen. A large portion of our lives takes place through the simple elements of a table and some chairs organized into some arrangement.
How can we use a **dynamic system** such as Processing, IFTTT, webhooks, to alter our behavior based on the furniture? We can measure what is occupied. Do something if all chairs are taken, and we’re at capacity. Do something if the chairs are in a certain position or area within the room. Could there be such a thing as a “speakers chair” that is amplified by a light for a certain amount of time to emphasize who is supposed to be talking? Could dynamic signage tell you how to use furniture? Does creating sounds based on what is occupied change an environment.

Think about how much furniture's arrangement already dictates our behavior. 

rooms for processing a suspect give power to interviewers and police, but disempower the suspect        |  bathroom building codes bake in assumptions about how and who should use them        
:-------------------------:|:-------------------------:
![markers-6](images/marker-6-2.png#img-full)  |  ![markers-5](images/markers-5.gif#img-full) 

How do you behave differently if standing behind or in front of a counter at a corner store? How do you behave differently if you are in a room with a closed or open door.


a lone presenter          |  audience with a talking stick       
:-------------------------:|:-------------------------:
![markers-3](images/markers-3.jpeg#img-full)  |  ![markers-4](images/markers-4.jpeg#img-full)  


The point here is that our furniture and rooms have immense impact on our behavior, and when their **"state"** is changed, a door is open or closed, a chair is moved, so is our behavior. Thus, we can leverage this idea of environments having **states** to design dynamic experiences that respond to that state.


## Tutorial

### Setup
**1. Hardware**
- **Laptop** — to run the code
- **Web Camera** — ideally separate from the laptop so that its easier to position the camera to find the markers
- **Projector** — to project realtime feedback into physical space
- **Fiducial Markers** — print out some of [these](http://reactivision.sourceforge.net/data/fiducials.pdf) Ideally they are quite large (one marker on an 8.5x11) so that a camera can pick up the marker across the room.
- Placement — Your webcam and projector should be pointing in the same direction, ideally from a similar location. Your markers should be out in a room but easily viewable by the webcam. Turn both the projector and the webcam on.
- **Webcam setup** — Sometimes Processing doesn’t recognize that another webcam is plugged in, and will default to your original webcam. To fix this we need to ensure
   - the camera is registered as on in another program before we launch Processing and TUIO.
      - Mac — search for “photo booth” from the finder, open it. In Photo Booth click Camera → select the camera you would like to use
      - PC — search for “camera” from the finder, choose you new camera. Further instructions here if needed. Close your Photo Booth or Camera app.
      
**2. Software**  
   - **Processing**  
      - You will need [Processing 2.0](https://processing.org/download) or later.  
   - **TUIO**  — is an open framework that defines a common protocol and API for tangible multitouch surfaces. You can learn more about TUIO [here](https://www.tuio.org/).
      - [Download TUIO here](https://drive.google.com/file/d/189WISuVLqTsM9A5eprC0qHGwemNUrEW8/view). **Unzip** and **move** it to Processing’s “libraries” folder.  
   - **ReacTIVision** - reacTIVision is an open source, cross-platform computer vision framework for the fast and robust tracking of fiducial markers attached onto physical objects.
      - [Download ReacTIVision here](http://reactivision.sourceforge.net/#files)   
        - You will need to download the appropriate version for your operating system (i.e. Windows 7 64bit or later, or MacOS X 10.8 or later).
        - You can check what operating system you have from a Mac by going to the `apple menu` → select `about` → in this menu you will see a version, for example **“Version 10.12.6”**. For windows type Computer in the search box, right-click on Computer, and then select `Properties`. Under Windows edition, you’ll see the version and edition of Windows that your device is running.
      - Once you’ve downloaded the right version of ReacTIVision, unzip the folder and move it into your applications folder.
      - Launch ReacTIVision. 
        - You may get a warning that its an application from the internet. 
        - Hit Open or Accept. 
        - You should see green numbers layered ontop of the fiducial markers.

        ![markers-1](images/markers-1.gif#img-full)    
        *reactivision marker tracking - camera view*   

**3. Getting Hardware and Software Talking**
- Now open **Processing** and navigate to your **libraries** folder where you placed TUIO. 
- Open TuioDemo.pde in Processing and hit play.  
  - You must have reacTIVision still running. 
  - You should see black squares with the marker number that follow what is happening in the view. In the gif below I move the whiteboard moving the “5” marker, then sit in the chair obfuscating the “0” and “3” marker.

  ![markers-2](images/markers-2.gif#img-full)   
  *reactivision marker tracking - markers only of camera view above*   

## Challenge
Can you create your own system with this hardware and software toolkit?
Example: How might you display a welcome message anytime someone sits in a chair. 
- Try projecting a message on the wall 
  - use your projector to point at where you want the message to show up.
  - display text using processing's `text()` function, [reference here](https://processing.org/reference/text_.html)
- Connect that message to any time a person sits in a chair
  - point your camera at the chair
  - place a marker on the chair
  - use an `if` `else` statement [reference here](https://processing.org/reference/else.html) to show the message if the marker is obscured

## Example Student Projects
<iframe src="https://player.vimeo.com/video/705149163?h=40c15d722c" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>   

[Cartoon Room — Urechi Oguguo, Taylor Urbshott](https://vimeo.com/705149163)   
<iframe src="https://player.vimeo.com/video/705149284?h=af91bdafd9" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>    

[Pushy Window — Qi Yang](https://vimeo.com/705149284)   

