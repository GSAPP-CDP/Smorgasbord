---
moduleid: 162
title: Network Architecture
published: True
slug: network-architecture
authors:
 - "Violet Whitney"
---

# System Architecture: How Tech Talks
## Module Summary
In this module we'll learn about **"system architecture"** and how technology talks to other technology. 
To help understand system architecture we also cover:
1. cybernetic systems
2. how IFTTT works 
3. understand an IFTTT connected system as a cybernetic system
4. you will create your first IFTTT recipe: your own system architecture

![temp](images/20-network-architecture.gif) 
*how tech talks overview*

### 0. System Architecture
**"System architecture"** is a conceptual model that describes the structure and behavior of interacting components and subsystems such as interactions between software applications, network devices, hardware and mechanics. It describes how a system works together; how the components communicate and interact and thus how the system behaves overall. In a similar way: **"software architecture"** describes the high level structure of a software system and how software components interact with one another. A "software architect" is a critical role that defines and recommends the organizational structure of IT components to achieve the goal of the software. In your case you will play the role of a system architect thinking through what components are best for the goals of your system.

![temp](images/17-network-architecture.png) 
*example of sensors and actuators*

Because we are working with many components beyond just software, it is critical for us to understand how these many systems interact with one another. Through IFTTT recipes we will work with:
- hardware: 
   - sensors: microphones, motion sensors, cameras
   - actuators: lights, speakers, projections
- software: IFTTT recipes
- mechanical components: doors, a light switches


### 1. Cybernetic System
Cybernetics is a transdisciplinary approach for exploring regulatory systems—their structures, constraints, and possibilities. 
By understanding cybernetic systems, where measurements and actions are connected in a feedback loop, we can understand the built environment as dynamic, design it as such, as well as understand technology as an integral part of how our built environment behaves.

![temp](images/network-architecture-cybernetics.png) 
*diagram of a cybernetic system*

At its simplist level we can understand a cybernetic loop as the feedback loops of interacting systems. In the diagram above this is comprised of a physical "environment" that is impacted by "disturbances" or aspects that change that environment. This environment can be "measured" by a sensor. A comparator decides whether that measurement has reached some threshold in order to trigger an action that will thus impact the environment.

![temp](images/network-architecture-1.png) 
*detailed diagram of a cybernetic system*

### 2. How IFTTT Works
[IFTTT](https://ifttt.com/home) is a website and automation tool that lets you easily script programs that link together a wide variety of devices and services such as having a light in your home turn on any time you receive an email from a specific sender. These programs are called "recipes". It is a useful tool to help us create our own system architecture.


When visiting the website [IFTTT](https://ifttt.com/home) you will see many premade IFTTT recipes in the `Explore` segment. Additionally you can make your own recipes in `Create`. We'll create our own recipe later in this module.

![temp](images/network-architecture-19.png) 
*IFTTT website*

IFTTT is short for "If This Then That," a programming convention that defines in a nutshell how the service works. The **"if this"** part is known as the `trigger`, and **"then that"** is the `action`. 

- **Trigger** - A trigger is the data that, when changed, prompts a connected Applet to run on IFTTT. Some example triggers include Breaking news for sport, an email being received, weather changing, or a mootion sensor in your home registering motion. Triggers are akin to something being measured. They are close in relation to sensors.
- **Action** - An action is the work that IFTTT initiates as a result of an updated trigger. Actions are organized under services. Some example actions are “Create post”, “Post a new tweet”, "Turn on a light", "Play a song". Where triggers measure something, actions "do" something.

You can learrn more about the component parts of IFTTT through the [IFTTT Glossary](https://platform.ifttt.com/docs/glossary).

Below we see an example IFTTT recipe where a temperature sensor triggers the action of turning on a smart plug.

![temp](images/18-network-architecture.gif) 
*IFTTT programmed function through this sentence structure*

### 3. How IFTTT Maps to a Cybernetic Feedback Loop
In the example below a light sensor triggers a smart plug. We can see below how the IFTTT triggers and actions map to our original diagram of a cybernetic loop. The cybernetic system includes a sensor that measures the light, a 75 degree threshold at which the light triggers (a goal in our cybernetic framework) and an action to turn on the plug (an actuator that will change the environment in our cybernetic diagram).

![temp](images/network-architecture-2.png) 
*cybernetic diagram of a IFTTT recipe connecting a light sensor to a smart plug through IFTTT*

#### How IFTTT talks to services.
You will additionally notice in the diagram above the specific **services** of the light sensor: "Wireless Tag" and the smart plug: "TP-Link Kasa". This is a critical piece of modern day system architecture as services are rarely programmed to work seamlessly with other services - hence why we must use a third party software: IFTTT to program these to talk to one another.

When IFTTT talks to services, the service (TP-Link Kasa, or Wireless Tag) then talks to its hardware products. For example the Wireless Tag service talks to its tag manager and temperature sensors and TP-Link Kasa talks to its smart plugs. It is important to realize how information flows through yourr system architecture. A home sensor often communicates over a home wifi network and that home network then communicates with the website IFTTT. 

Below you see a diagram of how the service talks with the hardware.

![temp](images/network-architecture-3.jpeg) 
*cybernetic diagram of a IFTTT recipe connecting a light sensor to a smart plug through IFTTT: broken down by hardware, service and software components*


To recap:  
![temp](images/16-network-architecture.gif)  
*cybernetic diagram of a system diagrammed with increasing fidelity*

### 4. Create Your Own IFTTT Recipe
#### Brainstorm Some Recipes
To get some ideas flowing on creating your own IFTTT recipe a.k.a. your own cybernetic system, we will create a bunch of measures (triggers) and a bunch of acts (actions) on index cards. 
1. Create two stacks of 10 index cards (post-its or small pieces of paper will work too). Ideally each stack is a separate color.
2. In the first stack write down a single idea on each card for a trigger: a things you could measure. In the second stack write down an idea on each card for an action: things that trigger could enact. You may choose to draw sketches on your card in lieu of words.
3. Mix and match your "measure" and "act" cards to chain together new systems you may not have thought of. You may consider working with someone else and trading your cards to think of new ideas together, or you may shuffle your cards to match random cards together for new ideas.

![temp](images/network-architecture-4.gif) 
*example IFTTT recipe cards from the exercise above*

4. Next select a few of your Measure → Act systems then come up with names for the system. By naming the system it will facilitate understanding a goal of the system. While naming the system, we should also add in any needed detail of conditional aspects or thresholds that clarify the system. For example for email state → change pace light, I will change it to if more than 5 unread emails → increase light pulsing, then I will name it “Worker Waver”. Here are some examples below.

Title — `measure (trigger)` → `act (action)`
- Ego-Grower —instagram mention detected → water plant
- Flag-Planter — room occupied → post something on social media
- Digital Food— store closed → order groceries from Prime Now
- Money Squasher — pumpkin spice season → unlock piggy bank
- Jupiloop — Jupiter’s location closer→ project yesterday’s video
- Lunar Light — full moon → project image of moon
- The Lazy Way —ask about the weather → send me pizza
- FOMO talk — speech detected → play live feed of outside
- Off the Beaten Path — if off beat → move sound across room
- Throwing Shade — louder → move shadow
- Gender Balance Alert — gender variety in meeting low → send email
State Feedback Loop → image change (image dif) → play video
- Umbrella — raining → remind me with an event
- Laptop Aided Mtg Room — 2 chairs available → turn power on
- Cool Cave — dark → turn fan on
- Pyro — flame detected → turn airblow dryer on
- Light Leveler — bright → turn light off
- School Focal Zone — fall season → spot light on desk
- Party Bot — 3:00 pm Friday → send party invites
- Beep Buddy — friend is close to room → beep
- Flushee — new person inside my house → flush the toilet
- Mother May I — location close to downtown → call mom
- Worker Waver — more than 5 unread emails → increase light pulsing
- Calming Move — detect motion → turn lights down
- Cool Light — temperature increase → make color temperature cool
- Outdoor Prep — front door is open → zoom in on video outside
- People Counter — new face detected → make a log of the event

![temp](images/network-architecture-5.jpeg) 
*example IFTTT recipe cards from the exercise above*


#### Make a Recipe on IFTTT
1. Sign in to IFTTT or create a new account.
2. Select the `Create` button in the upper right hand corner.
3. Select the `Add` button in thee "If This" section.
4. Select a service from the list of services. You can also look for services you are familiar with. One of my favorite services to start with is "Weather Underground" which can allow you to make triggers based on the weather in specific cities.
5. Select a trigger `service`
6. Sign up for the service if you do not already have the service. Note you may choose to use a service you already have for convenience. Alternatively for security you may choose instead to create a new service account with a unique email to keep your primary accounts disconnected from IFTTT.
7. Next you will fill out the trigger field which will allow you to set the threshold for your trigger. Note the trigger fields are unique to each service you choose.

![temp](images/network-architecture-tutorial.gif) 
*IFTTT steps 1-7*

8. Next you will choose an action by selecting `Add` under "Then That".
9. Again select a service of your choosing Note again its easiest to start with a service you already have access to. I like to start with an "email" since this is relatively simple. 
10. Select the fields for your action, and select `Create action`. You will notice in the case of the "email" action in the example gif below theere are "ingredients" which can be further customized to adapt your email.
11. Select `Continue`.
12. Review that your recipe is correct and select `Finish`.
13. This is now stored as a saved recipe on `My Applets`

![temp](images/network-architecture-tutorial-2.gif) 
*IFTTT steps 8-13*



