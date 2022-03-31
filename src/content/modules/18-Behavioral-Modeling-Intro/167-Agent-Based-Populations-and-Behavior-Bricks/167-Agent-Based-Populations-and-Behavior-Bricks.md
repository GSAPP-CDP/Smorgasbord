---
moduleid: 166
title: Agent Based Modeling and Behavior Bricks
published: True
slug: agent-absed-modeling-and-behavior-bricks
---

Behavioral Modeling:
===========================================

# Agent Based Modeling and Behavior Bricks
## Module Summary

In this tutorial we will use Behavior Bricks (a plugin for character animation) in Unity to create 2 simple agents: an interactive Player (moved around using mouse clicks), and an Agent that wanders around, and pursues the player when it sees them. We’ll cover the following core concepts:

1. Setting Up Behavior Bricks
2. Creating A Behavior
3. Editing Behavior Parameters
4. Composing Behaviors
5. Conditions & Perceptions


## Conceptual Introduction
Behavior Bricks is a character animation plugin for Unity the gaming engine.
What is quite useful about Behavior Bricks and character animation apps like it, is that it allows us to program behavior of an agent with high level programming. Behavior Bricks uses a node based Visual Programming Language (akin to Grasshopper) to program things like character movement, following, or other actions based on other triggers. This will be particularly useful for modeling behaviors in relation to one another in an agent based model.


<img width="899" alt="bb-43" src="https://user-images.githubusercontent.com/14256456/155209726-ca31e78c-d363-42a1-b445-f6a45f635d8d.png">


## Tutorial
### 1 — Setting Up Behavior Bricks
- Start a new project 3D
- Get [Behavior Bricks](http://bb.padaonegames.com/doku.php?id=start) from the Unity Asset store.
- Go to **Window** → **Asset Store**
- Click **Search** → and search for **“Behavior Bricks”**


![processing-diagram](images/bb-1.png#img-full)
![processing-diagram](images/bb-2.png#img-full)
![processing-diagram](images/bb-3.png#img-full)


- Select the pink **Import** → this brings up a list of all of the assets in Behavior Bricks. 
- Select **Import** → this will load Behavior Bricks into your current project

![processing-diagram](images/bb-4.png#img-full)
![processing-diagram](images/bb-5.png#img-full)
![processing-diagram](images/bb-6.png#img-full)

- To get out of the **Asset Store** click the **Scene tab**. You’ll now see **Behavior Bricks** in your project under the **Assets Folder**.

![processing-diagram](images/bb-7.gif#img-full)

- Create a plane **GameObject** →**3D** → **Plane**. 
- Right Click it and Rename it to `Floor`.

![processing-diagram](images/bb-8.gif#img-full)

- **Set** the position to `(0, 0, 0)`, and the scale to `(5, 1, 5)` so it covers a bigger area. 
- **Check** the `Static` checkbox near the Game Object name in the Inspector.

![processing-diagram](images/bb-9.gif#img-full)

- Move the **main camera** to `(0, 20, -30)`, and set the rotation to `(45, 0, 0)` in order to fit the plane into the view.

![processing-diagram](images/bb-11.gif#img-full)

- Create a sphere for the player. 
- Rename it to **Player**, and place it in **(0, 0.5, 0)** so it will be over the floor.

![processing-diagram](images/bb-12.gif#img-full)

- Create a cube for the agent. 
- Rename it to `Agent`, and place it in `(20, 0.5, 20)`. It will be quite far away from the player, near the plane limits.

![processing-diagram](images/bb-13.gif#img-full)

- Create three new materials, `Green`, `Blue` and `Red` and use them for the **floor**, **player** and **agent** respectively. 
- To create a new material go to **Assets** → **Create** → **Material**. 
- Right click to rename the material `Green`. 
- Use the eyedropper to select a color. Then drag and drop the material to assign it to a game object. 
- To quickly duplicate a material **select it** and use **ctrl+d** (Windows) **cmd+d** (Mac). This is a good time to save.

![processing-diagram](images/bb-14.gif#img-full)

- Create the **navigation mesh** that will be used by both the agent and the player for pathfinding. 
- Select the floor, go to **Window** → **AI** → **Navigation**, 
- go to the Bake Tab and press the **Bake** button.

![processing-diagram](images/bb-15.gif#img-full)

### 2 — Creating A Behavior
- We’ll create a wander behavior for our Agent. 
- Go to the Behavior Bricks menu **Window** → **Behavior Bricks** →**Editor**. That will open the Behavior Bricks Editor.

![processing-diagram](images/bb-16.gif#img-full)

- The first step is to create a new behavior tree by clicking the `Create new behavior` button in the upper part of the `Collection` tab and naming it “Wander”.

![processing-diagram](images/bb-17.gif#img-full)

- Once the new behavior asset has been saved it will appear in the `Behaviors` list and will be opened as a new tab in the behavior graphical editor, showing an initially empty canvas.

![processing-diagram](images/bb-18.gif#img-full)

### 3 — Editing Behavior Parameters
- Make the agent move to a position (-20, 0.5, 20)
- In the canvas for the `Wander` behavior **right-click** to add a new node and choose the action **MoveToPosition** from the drop-down menu. You can type **move** in the search box to quickly find the action.

![processing-diagram](images/bb-19.png#img-full)


- Click the new `MoveToPosition' node → **select** the `Node` tab in the Behavior Bricks inspector.
- This tab shows the properties of the selected node in the canvas. In this case you will find the input parameters, that constitute the information the action needs to know how to proceed.
- Change the dropdown from `CONSTANT` to `BLACKBOARD` and **change** the target name to `wanderTarget`.
- All changes are automatically saved in your project so, once done, you can close the Behavior Bricks editor.

![processing-diagram](images/bb-20.gif#img-full)

- Connect the Behavior to the “Agent” Game Object
- **Select** the `Agent` → **click** `Add Component` from the inspector tab → **select** the `Behavior Bricks - Behavior Executor`.

- From the asset folders, look for the `Wander` behavior, **drag and drop** it in the Behavior Executor `Behavior` variable where it says `None (Internal Brick Asset)`. This links the wander behavior to the selected game object and executes the Behavior Bricks script during the runtime.

![processing-diagram](images/bb-21.gif#img-full)
![processing-diagram](images/bb-22.gif#img-full)

- Under the `Behavior Params` change the values to `(-20, .5, 20)`.

![processing-diagram](images/bb-23.gif#img-full)


- Launch your project and you will see the `Agent` moving to the left.
Be aware of the Unity warning “The Enemy game object does not have a Nav Mesh Agent component to navigate. One with default values has been added”. This is due to a missing component in the `Enemy`. Specifically, `MoveToPosition` action uses the scene nav mesh, which requires a nav mesh agent component. Unity automatically adds it on runtime when missing, and warns about that. You can avoid the warning adding that component beforehand yourself.


![processing-diagram](images/bb-24.gif#img-full)

### 4 — Composing Behaviors
- Lets make the behavior more interesting for our Agent by making the `MoveToPosition` go to a `Random` position.
- Open `Behavior Bricks Editor` again **Window** →**Behavior Bricks** →**Editor** and make sure you’re in the `Wander` tab.
- **Right click** to add a new node to the canvas for the `GetRandomInArea` action.
- Create a new blackboard input parameter and call it `wanderArea`.
- Select the previous `wanderTarget` as the blackboard parameter where the action will write the selected position.

![processing-diagram](images/bb-25.png#img-full)
![processing-diagram](images/bb-26.gif#img-full)

- In the `Blackboard` tab **change** the `wanderTarget` from `IN` to `LOCAL`.

![processing-diagram](images/bb-24.gif#img-full)

- The action marked with an `R`(`MoveToPosition`) is the root of the behavior tree and will be executed in the first place. In fact, `GetRandomInArea` will not be executed at all. In order to create a behavior with two actions, we need to compose them.

![processing-diagram](images/bb-25.png#img-full)

- **Right click** on the canvas an add a composite `Sequence Node`. A Sequence is a composite node that executes its children in order.
- **Click** the handle from the bottom of the `Sequence Node` and connect it to `MoveToPosition` and `GetRandomArea`, clicking at the top of each node to make the connection.
Our behavior is now a valid tree!
The respective numbers `1` and `2` at the top of these nodes represent the order of execution. If you move the nodes around the numbers, and thus the execution order will change.


![processing-diagram](images/bb-26.gif#img-full)

### Making A Repeat Behavior
- The sequence executes its children once. We want the Agent to continually wander around, so when it reaches the random position, another one should be selected and the Agent should go there.
- Insert a `Repeat Decorator` node into the canvas. This internal node executes its child behavior again and again.
- Create a connection from the `Repeat` node to the `Sequence`. Observe how the `R` mark readjusts itself.

![processing-diagram](images/bb-27.gif#img-full)

- Close the editor. Remember that behaviors are automatically saved.
- Select the `Agent` game object and observe the behavior executor parameters. You’ll notice `wanderArea` is still unestablished so the GetRandomInArea does not know the area where the position should be chosen from. Specifically, `GetRandomInArea` requires a game object with a box or `sphere collider`.

![processing-diagram](images/bb-28.png#img-full)

- Select the `Floor` game object, and add it a Box collider. Set `(10, 0, 10)` as its size.
- Select the `Agent` game object so you can see its elements in the inspector, and drag and drop the `Floor` into the `wanderArea` parameter.

![processing-diagram](images/bb-29.gif#img-full)

- Play the scene. Observe the wander behavior of the enemy. It will continually move around to random positions.
- The final version of this `Wander` behavior is available as `Done Wander` in the Behaviors Collection.

![processing-diagram](images/bb-30.gif#img-full)

### 5 — Conditions & Perceptions
We want the player to move around using the mouse. This requires three steps:
- Detect the mouse click. This provides us with a coordinate in screen space (2D).
- Convert the click position into a 3D coordinate using a raycast to detect the object under the mouse.
- Ask the player avatar to move to that position.

We’ll use the built-in `CheckMouseButton` condition that test if the user has just pressed one of the mouse buttons and ends with success in that case.

- Open the editor window and create a behavior with the name `ClickAndGo`.

![processing-diagram](images/bb-31.gif#img-full)

- Add a `CheckMouseButton` node.

![processing-diagram](images/bb-34.gif#img-full)


- Add a `FromMouseToWorld` action. This action convert the current mouse position from screen coordinates to world coordinates. It has four parameters:
   - `camera`: camera used for the translation. Add a new blackboard field and keep the default name, `camera`.
   - `mask`: layer mask used for filtering the raycasting. Add a new blackboard field and keep the default name.
   - `selectedGameObject`: an output parameter where the action will write back the game object under the mouse, if any. We are not interested on it in this behavior, so we will keep it unassigned.
   - `selectedPosition`: output parameter with the 3D position of the mouse relative to the chosen camera. Add a new blackboard field and keep the default name.

![processing-diagram](images/webhook1-12.gif#img-full)

- Add a `MoveToPosition`. Change its target parameter to the `selectedPosition` field in the blackboard.

- In the Blackboard tab change the `selectedPosition` parameter type from `INOUT` to `LOCAL` because it is not relevant for the game object.

![processing-diagram](images/bb-35.gif#img-full)

- Add a `Sequence` and make those three nodes its children.
- Add a `Repeat` node so the sequence loops again and again and the user can move around to different positions.

![processing-diagram](images/bb-36.gif#img-full)

- Close the editor and add a Behavior executor component in the `Player` game object. Attach to it the `ClickAndGo` behavior.

![processing-diagram](images/bb-37.gif#img-full)

- Configure the `camera` parameter with the `Main Camera`, and set the `mask` to `Everything`, so the screen-to-world transformation is done using the camera view, and the raycasting considers all objects in the scene.
