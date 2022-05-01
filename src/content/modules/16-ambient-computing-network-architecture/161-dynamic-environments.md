---
moduleid: 161
title: Ambient Environments
published: True
slug: ambient-environments
authors:
 - "Violet Whitney"
---

# Ambient Environments
## Module Summary
In this module you will learn some basic methods for describing and diagramming ambient environments. 
Additionally you will learn about the following concepts as they apply to ambient environments:
- affordance
- states
- networks

## Diagramming for Ambient Environments
Explaining, designing and engineering products that interact between the physical and digital world can be counter-intuitive. Doing such requires showing interactions that are inherently difficult to see. How do you demonstrate an invisible bluetooth connection triggered by location? How can you capture illusive concepts like time or a sequence of steps  in a single diagram? 

The following are a collection of common diagram types which have helped me explain and design physical-digital interactions. Each diagram type helps explain unique dimensions within the complexity of todays digitally and physically interconnected world.

**Diagram Type** |  What it does |  Example
:-------------------------:|:-------------------------:|:-------------------------:
**Assembly** |  shows how a system’s comprised parts are assembled. This separation of each component part facilitates this understanding and can include additional specifications on dimensions and item ids for each component. Assembly drawings also sometimes include instructions and sequencing as seen in Ikea drawings. |  ![](images/dynamic-environments-9.gif)
**Rube Goldberg** | show sequence of events in a complicated often impractical contraptions that creates a simple action.|   ![](images/dynamic-environments-10.gif)    
**Patent** | illustrates a patent invention, and its components. Many patent drawings are also assembly drawings. Patent drawings are heavily notated to describe component pieces, cross referenced in legends and reports. | ![](images/dynamic-environments-5.gif)
**Tech Stack**  |  shows how software products and programming languages are inter-related to create a web or mobile application. | ![](images/dynamic-environments-6.gif)  
**Flow Diagram** | shows sequence of movements or actions of people or things involved in a complex system. | ![](images/dynamic-environments-3.gif)
**Decision Tree** | organizes decisions into branches and their possible consequences. |  ![](images/dynamic-environments-4.gif)  
**User Journey** | explains how an individual user of a particular product or service experiences a series of interactions (touch points) along a journey in aim of a particular outcome from their use of the product or service.|![](images/dynamic-environments-2.gif) 
**User Flow** | show paths in a user interface which a typical user will follow using a website or app. |   ![](images/dynamic-environments-1.gif)  
**Ergonomics** | shows how a product is optimized for the human body, i.e. how its characteristics, such as proportions, weight, responds to the human hearing, sight, temperature preferences, etc. | ![](images/dynamic-environments-7.gif) 
**Organizational** | shows the structure of an organization/institution/nation and the relative relationships of its people, parts or positions. |  ![](images/dynamic-environments-8.gif)  

### Challenge
Sketch a quick diagram (5 minutes) of a room of your own borrowing some of the diagramming techniques from above. Can you capture time? Digital interactions like wifi or bluetooth connections to physical aspects in a space? 

## The New Affordance of Physical Places: Ambient Environments
### Affordances In Physical Space
Cities, places, and physical objects have affordances, certain capabilites of what they can do or how it can be used. The curvature of a highway onramp is designed and works well for a vehicle's turning radius at high speeds. However, this large radius is far too large for a pedestrian who while walking can make sharp turns. So the affordance, or ability, of space may be intentionally limited to specific types of activities based on its form: the large radius of a car onramp vs the tight radius of a sidewalk intersection. An Amazon warehouse is intended for the agility of robots but this space is not intended for human bodies. Spaces in these warehouses are demarcated into human vs robot zones so that human workers are safe and robots can move unobstructed.

![temp](images/dynamic-environments-19.png)
*from left to right: curvature of highways, Amazon Warehouse ground markings indication of robot and human zones*

Rooms have affordances which privilege certain speakers. A lecture hall allows one to speak to many. A courtroom’s height gives authority to the judge and jury while those on trial sit lower. A listening circle attempts to create flatter conversation hierarchies.

![temp](images/dynamic-environments-13.png) 
*affordance of different room types*

The counter at a bar acts as an exchange mechanism between bar patrons and and bartenders. The side in which the person occupies delineates how they should behave. An escalator allows people to move in a direction at a particular speed. Knockers on doors alert people if someone is at the door, but only if they’re in proximity to the door. Simple painted lines on the road will delineate where pedestrians vs cars should move to avoid one another. Trains allow passengers but only if they pass between doorways during the short windows while trains are in stations.

![temp](images/dynamic-environments-11.gif)  
*many spaces throughout the built environment have unique affordances*

At smaller scales, physical objects and digital buttons have affordances. A tea pot can be poured whereas a button on a user interface can be clicked. The button cannot be poured, and the teapot is not designed to be clicked on or off. Knobs, dials, joysticks can vary widely in their affordance. Some are intended to provide gradual change while others for binary states: on or off.

![temp](images/dynamic-environments-18.png)
*from left to right: teapot-pouring control, button-binary control, dials-gradual control*

### Physical + Digital = New Affordance
The combination of both physical and digital systems create new affordances together. In the interaction of hardware and software the sum is often greater than the parts.

![temp](images/dynamic-environments-17.png) 
*network diagram (each connection with its own affordance)*

**States** like the "on/off" above is a particularly useful concept for ambient environments and a term commonly used in software. In computer science, a stateful software system is tracks events or user interactions to define the current "state" of the system. For example: a website might track events such as a user has added items in a shopping cart and has also clicked "checkout". Tracking both of these events allows the system to have states: an empty shopping cart cannot checkout, but a shopping cart with items can.

In the physical world an environment can also be thought to have states. In Jim Johnson’s Mixing Humans and Nonhumans Together: The Sociology of a Door-Closer, the author points out how the simple invention of a door allows for the state of walls to be both opened and closed allowing for dynamic states:

### "Walls are a nice invention, but if there were no holes in them, there would be no way to get in or out; they would be mausoleums or tombs. The problem is that if you make holes in the walls, anything and anyone can get in and out (bears, visitors, dust, rats, noise). So architects invented this hybrid: a hole-wall, often called a door, which, although common enough, has always struck me as a miracle technology."

Beyond a doornob, now consider how a coin operated turn-style tracks whether a coin has been recieved or not to allow or prevent passage. This simple device gives an indication of the more layered affordances and states of our web connected environments.

![temp](images/dynamic-environments-16.png) 
*from left to right: a door, a coin operated turnstyle and diagram showing its affordance*

Today our physical environments are augmented with digital functionality, thus creating new and complex behaviors. This augmentation alters both the **“states”** and **“affordances”** of these new environments. As designers of environments that are inherently dynamic its critical to understand these altered states and affordances as ultimately the behavior of these environments script human behavior, beyond their deceptively simple physical appearances.

Physical spaces can also operate as **"networks"**, much like networks operate on the internet. The size and width of roads allow for speeds of movement like the capacity of a online server. The spatial **adjacencies** of rooms allow for certain interactions to occur or not. Depending on the layout of a home, two roomates may literally cross paths with eachother daily or never at all. 

Digital networks and adjacencies also impact what interactions can occur or not. 

**Diagram Type** |  Network Scale: Who has permissions | Location 
:-------------------------:|:-------------------------:|:-------------------------:
**Google's Website** | millions of people with web devices | anywhere w/ internet access 
**TV Broadcast** | millions of people with tv's | anywhere broadcast reaches
**University's Wifi Network** | students, teachers, alumni with web devices | University campus
**Smart Home Door** | a few roommates | entry way of house
**Smart Home Lights** | a few roommates | anywhere w/ internet access
**Video Call** | a few meeting invitees | anywhere w/ internet access

![temp](images/dynamic-environments-15.png) 
*from left to right: Louis Kahn diagram of movement in Philadelphia streetgrid, Robin Evans: Figures, Doors and Passages network diagram of a house with and without a hallway, network diagram of a various internet structures*

In Robin Evan’s “Figures, Doors, Passages” the invention of the hallway changed the network of the home, allowing people to “jump” between rooms without passing through others. This dramatically changed the way humans share domestic experiences in daily life. More concerning, this invention was intended to have slaves and servants move about a house unnoticed.

![temp](images/dynamic-environments-14.png)
*Robin Evans: Figures, Doors and Passages network diagram of a house with and without a hallway*

Today phone calls, video calls allow us to jump not just between rooms but across the globe.

### Challenge
Consider a system in a room in your home: perhaps the passageways, or people you are able to talk to. What are that system's "affordances" and "states"? What does its network look like? Take 5 minutes to jot them down. Is there a system you represented in the first challenge when diagramming a room? What "affordances" and "states" exist there?

