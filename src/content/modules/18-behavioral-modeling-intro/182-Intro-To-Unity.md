---
moduleid: 182
title: "Intro to Unity"
published: True
slug: intro-to-unity
authors:
 - "Violet Whitney"
---

# Intro to Unity
## Module Summary

In this tutorial you will get:
- an intro to the Unity gaming engine
- set up a new project
- get acquainted with the Unity interface



## What is Unity?
Unity is a gaming engine. It has useful 3d graphics for visualizing the built environment and the interactions within it. Because it is a gaming engine, there are many simple ways to program “character behavior” and interactions in the built environment.
Here are some fantastic  [example unity games](https://unity.com/madewith) to get inspired by.
You can also find many more [Unity tutorials here](https://learn.unity.com/).  

## Tutorial

### 1. Download Unity
- **Download Unity** - You can download a free personal version [here](https://store.unity.com/#plans-individual). If you are on a Columbia GSAPP computer, Unity should already be installed. It is more ideal to download the version for windows as it will integrate with behavior bricks. Follow the screen prompts to “Download the installer for Windows” (click continue and accept the license agreement). 
### 2. Create a Unity Account 
![mapbox](images/167-unity-login.gif#img-full)   
*Unity steps 1-2*    

- Once the installation is complete, launch Unity. You’ll be prompted to a Unity sign in. If you don’t have one, create a Unity account (free) under “create one”.
- Follow the sign in prompts adding your user information and license details.
### 3. Create your first Unity Project
- Once you’ve logged in you will be prompted to create a new project. Select “New Project”
- Next you will fill out thee details of your new project.
   - Fill in a project name of your choosing. 
   - Template should be “3D”. This just means your simulation will have 3 dimensions (x,y,z) vs 2 dimensions. 
   - Select a location on your computer where you will save your project. You will need to be connected to the internet to access Unity, however your project is stored locally on your machine. 
   - For now you can ignore the “asset packages”. 
   - Keep Unity Analytics Off and click “Create project”.
### 4. The Unity Interface 
  ![mapbox](images/167-unity-ui.png#img-full)   
*Unity Interface*    
  
- **Scene View**
   - This is where you will model your simulation. This is akin to any 3d modeling view in an app such as Rhino or 3ds Max. 
- **Game View**
   - This is akin to the scene view but is from the perspective of the player in your game. This will follow the camera view of your player. Additionally you can test aspect ratios depending on various devices you anticipate your simulation to run on.
- **Hierarchy Window**
   - The hierarchy window is similar to any electronic file system that would show a list of files inside of a project folder. In the ecase of the Unity Hierarchy window instead of folders of documents, jpegs, the files here are GameObjects. GameObjects are objects you create in your game such as: a character, a building, a tree, a forest, a scene (a camera view for your player). As opposed to 3d objects in Rhino, GameObjects in Unity can contain much more complex properties beyond their geometry. For example a sphere in Unity might also contain functionality to roll and react to gravity, or to glow when its close to other objects. Additionally GameObjects can contain multiple GameObjects. So you may have a GameObject named City which holds many GameObjects that are individual buildings.
Thee search bar within your hierarchy window can facilitate navigating the GameObjects you’ve created as your project grows.
- **Project Window**
   - This shows all of the Assets used in your game. Assets are items that can be used in your simulation: a 3d model, an audio file, an image, a character. Some assets come from files created outside of Unity and others can be created within Unity (such as a set of GameObjects for a character). Think of these as again as a file folder to everything your project needs to reference from elsewhere similar to an InDesign Package or an After Effects composition.
   - **The Unity Asset Store** - What’s particularly great about Unity is that there is a large active developer community where developers share Unity assets in the Unity Asset store. This makes it easier to create simulations because you can build with a simulation using pre-made characters, or import a premade 3d model of a neighborhood.
   - You can access the Unity Asset store through the [website](https://assetstore.unity.com/) or go to `“Window”` > `“Asset Store”`. This opens a new tab in your Editor. You can learn more about [navigating the asset store here](https://unity3d.com/quick-guide-to-unity-asset-store#:~:text=A%20Unity%20asset%20is%20an,of%20file%20that%20Unity%20supports.).
- **Inspector Window**
   - The inspector window shows the properties of a selected GameObject and is a menu where these properties an be edited. This is similar to a properties window you might see in Rhino or 3dsMax.
- **Toolbar**
   - Allows you to create and edit GameObjects. For example lets create a sphere. Go to the**GameObject** dropdown menu→**3D Object**→**Sphere**
   - Pan (hand tool) - allows you to pan around the scene
     - Right-click and drag - rotates the camera
     - Ctrl + Alt + right-click and move the mouse up and down (for Mac: Cmd + Option  + right-click) - zooms the camera
   - Move - moves a selected GameObject
   - Rotate - rotates a selected GameObject
   - Scale - scales a selected GameObject
 - **Play Buttons**
   - If you are familiar with other programming environments for example Processing or XCode you will be familiar with play and stop buttons to run code. Similarly here the play button allows you to run your simulation so you can understand how your simulation will behave when actively being played.

## Creating Your First Project
- In this segment you will get familiar with the Unity learning content to set up your first game and get familiar with all of the basic structure necessary for a game.
- Follow along with the "Roll-A-Ball"Unity Tutorials:
   - [Setting up the Game](https://learn.unity.com/tutorial/setting-up-the-game?uv=2019.4&projectId=5f158f1bedbc2a0020e51f0d#5f0fbb98edbc2a0020763e90)
   - [Moving thee Player](https://learn.unity.com/tutorial/moving-the-player?uv=2019.4&projectId=5f158f1bedbc2a0020e51f0d#)
   - [Moving the Camera](https://learn.unity.com/tutorial/moving-the-camera?uv=2019.4&projectId=5f158f1bedbc2a0020e51f0d#)
   - [Setting up the Play Area](https://learn.unity.com/tutorial/setting-up-the-play-area?uv=2019.4&projectId=5f158f1bedbc2a0020e51f0d)
   - [Creating Collectables](https://learn.unity.com/tutorial/creating-collectibles?uv=2019.4&projectId=5f158f1bedbc2a0020e51f0d)
   - [Detecting Collisions with Collectibles](https://learn.unity.com/tutorial/detecting-collisions-with-collectibles?uv=2019.4&projectId=5f158f1bedbc2a0020e51f0d)
   - [Displaying Score and Text](https://learn.unity.com/tutorial/displaying-score-and-text?uv=2019.4&projectId=5f158f1bedbc2a0020e51f0d#)
   - [Building the Game](https://learn.unity.com/tutorial/building-the-game?uv=2019.4&projectId=5f158f1bedbc2a0020e51f0d#)
   
## Example Student Project
[Uber Simulation Model - Guangwei Ren](https://medium.com/data-mining-the-city/uber-simulation-model-f3492aee7263)



