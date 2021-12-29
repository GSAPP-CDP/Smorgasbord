---
moduleid: 163
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
In this module you will learn how to work with fiducial markers in Processing which will allow you to tie inputs (shapes in a UI, sound levels, turning smart home products on or off) to the position of a marker. 

## Conceptual Introduction, or: Why is this interesting / important?
Markers can be attached to any object: a chair, a desk, a wall, a floor, a person thus allowing for more spatial triggers.

### Power in Furniture
The simple position of furniture in a room can dictate who is in control in a room, what activities can take place and sets a tone for what can happen. A large portion of our lives takes place through the simple elements of a table and some chairs organized into some arrangement.
How can we use a **dynamic system** to alter our behavior based on the furniture? We can measure what is occupied. Do something if all chairs are taken, and we’re at capacity. Do something if the chairs are in a certain position or area within the room. Could there be such a thing as a “speakers chair” that is amplified by a light for a certain amount of time to emphasize who is supposed to be talking? Could dynamic signage tell you how to use furniture? Does creating sounds based on what is occupied change an environment.

![markers-3](images/markers-3.jpeg#img-full)
![markers-4](images/markers-4.jpeg#img-full)
![markers-6](images/markers-6.jpeg#img-full)
![markers-5](images/markers-5.gif#img-full)


## Tutorial

### Setup
**Hardware**
- **Laptop** — to run the code
- **Web Camera** — ideally separate from the laptop so that its easier to position the camera to find the markers
- **Projector** — to project realtime feedback into physical space
- **Fiducial Markers** — print out some of [these](http://reactivision.sourceforge.net/data/fiducials.pdf) Ideally they are quite large (one marker on an 8.5x11) so that a camera can pick up the marker across the room.
- Placement — Your webcam and projector should be pointing in the same direction, ideally from a similar location. Your markers should be out in a room but easily viewable by the webcam. Turn both the projector and the webcam on.
- **Webcam setup** — Sometimes Processing doesn’t recognize that another webcam is plugged in, and will default to your original webcam. To fix this we need to ensure
   - the camera is registered as on in another program before we launch Processing and TUIO.
      - Mac — search for “photo booth” from the finder, open it. In Photo Booth click Camera → select the camera you would like to use
      - PC — search for “camera” from the finder, choose you new camera. Further instructions here if needed. Close your Photo Booth or Camera app.
      
**Software**
- You will need [Processing 2.0](https://processing.org/download) or later.
- [Download TUIO here](https://drive.google.com/file/d/189WISuVLqTsM9A5eprC0qHGwemNUrEW8/view). **Unzip** and **move** it to Processing’s “libraries” folder.
- [Download ReacTIVision here].(http://reactivision.sourceforge.net/#files) 
   - You will need to download the appropriate version for your operating system (i.e. Windows 7 64bit or later, or MacOS X 10.8 or later).
   - You can check what operating system you have from a Mac by going to the `apple menu` → select `about` → in this menu you will see a version, for example **“Version 10.12.6”**. For windows type Computer in the search box, right-click on Computer, and then select `Properties`. Under Windows edition, you’ll see the version and edition of Windows that your device is running.
   - Once you’ve downloaded the right version of ReacTIVision, unzip the folder and move it into your applications folder.
- Launch ReacTIVision. 
   - You may get a warning that its an application from the internet. 
   - Hit Open or Accept. 
   - You should see green numbers layered ontop of the fiducial markers.

![markers-1](images/markers-1.gif#img-full)

- Now open Processing and navigate to your libraries folder where you placed TUIO. Open TuioDemo.pde in Processing and hit play. (You must have reacTIVision still running. You should see black squares with the marker number that follow what is happening in the view. In the gif below I move the whiteboard moving the “5” marker, then sit in the chair obfuscating the “0” and “3” marker.

![markers-2](images/markers-2.gif#img-full)
