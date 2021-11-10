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
TK
## Modules:
Intro to Processing  
Webhooks  
Sounds, Speech and Macros  
Markers  
Tracking Computer Vision



Ambient Computing:
===========================================

# Webhooks: Connecting IFTTT and Processing
## Module Summary

[Webhooks](https://ifttt.com/maker_webhooks) allows you to make or receive a web request with IFTTT. This means that we can get applications not already supported by IFTTT to talk to IFTTT. We will use Processing to create an HTTP request that will alert our webhook triggering an action in IFTTT. There will be three basic parts to linking IFTTT and Processing:

![processing-diagram](images/Webhooks-Connecting-IFTTT-and-Processing-diagram1.png#img-full)

- **Processing (HTTP request)** — here we can program our own unique triggers such as a button, light level, sound, number of faces in a camera can trigger our webhook. The important part is that we have all the necessary information in Processing (the API key for webhooks, and the right “event name” from webhooks.
- **Webhook (Trigger)**— when Processing triggers an HTTP request with our event name, webhooks will relay this trigger to the appropriate action based on the recipe we have created
- **IFTTT (Action)** — This can be any action from IFTTT as it normally works in IFTTT recipes.


## Conceptual Introduction
TK
APIs, ability to talk to things on the web
expanding the spatial UX toolkit - connecting software UI/programmability of Processing to IOT and microservice world 

## Tutorial
### Creating A IFTTT Recipe with Webhooks
1. sign in to [IFTTT](https://ifttt.com/home)
2. Go to `Create` → to create a new application
3. click on the **“this”** to choose our trigger. Search for **“webhooks”**. Select `webhooks`.

![processing-diagram](images/webhooks-1.gif#img-full)

4. Now click on the **“Receive a web request”** .
5. Create an **“Event Name”** for the trigger. I will just call mine **“turn_on”**. If you are creating a new event trigger, you should name this something unique. Then click `Create trigger`.

![blahblah](images/webhooks-2.gif#img-full)

6. Now we need to create our **“that”** event, click on the `that` button. Select any notification as you normally would. In our instance I will turn on an outlet from `Kasa TP-Link`.
7.Now select the Kasa TP-Link device that you plan to turn on.

![blahblah](images/webhooks-3.7.gif#img-full)

### Creating An API Key
8. Now we need to get the HTTP request link to add to our processing sketch. Go to your profile image in the top right and select `My services` and select `webhooks`.
9. Now from the webhooks page **click** the `settings`.

![blahblah](images/webhooks-6.gif#img-full)

10. Here you can find a URL with your **“unique key”**. Click `Documentation` then copy the key (very long text and number key).
![blahblah](images/webhooks-7.gif#img-full)

Congrats! You have just created a unique key for IFTTT (common to software development when working with APIs).


### Connecting Processing to your Webhook API
1. Open up Processing! Lets start by using `keyPressed()` in Processing to turn on a light bulb.
2. First we need to add a library which allows Processing to make HTTP requests. In Processing import the http request library. Go to `Sketch`→`Import Library` → `Add Library` → Search for **“http request”**. Select it and click `install`. Sometimes you will need to relaunch Processing after you install this library. If this works, skip to step 2.

![blahblah](images/webhooks-8.gif#img-full)

If you’re still having issues with this library try downloading it directly:
- You can download the library file directly from [here](https://drive.google.com/file/d/1GasdTrMZEwzPjEXPEwKMxjzdcV9WAIxE/view?usp=drive_open).
Unzip the folder.
- Search for your `Processing` folder on your computer, you will have a sub-folder names `libraries`.
- Move the unzipped files to this `libraries` folder.
Close and restart Processing.

3. Now lets set up the basic structure of our code using a `keyPressed()` to change the background color of our sketch. If the `UP` key is pressed we will make the background white and if the `DOWN` key is pressed we will turn the background black:
  ```java
  void setup() {
    size(200,150);
    background(0);
  }
  
  void draw() {
  }
  void keyPressed() {
      if (keyCode == UP) {
        background(255);

      } else if (keyCode == DOWN) {
        background(0);
      }
  }
  ```
![blahblah](images/webhooks-9.gif#img-full)

4. Next copy and paste the code below at the top of your code(before `void setup`). This lets us use the http request library and creates new variables for our **webhooks API** and our webhook **event names**. Our API Key will give webhooks the authentication for our specific profile. Without this key there is no way to know which webhooks profile we are trying to use. In our case we are using our class’s profile name. We will also use our event name so webhooks knows which event is being triggered. Once you’ve pasted in the code below, please update it with your API key and event names.

  ```java
  import http.requests.*;
  //update the below API key
  String apiKey = "_____";
  //update the event name to match the event name in Webhooks
  String eventName1 = "turn_on";
  String eventName2 = "turn_off";
  ```
  
![blahblah](images/webhooks-9.gif#img-full)
 
 5. Next we will use `GetRequest` from the HTTP request library to make an HTTP request to webhooks. Inside of your `if` statement, and before you change the background color, copy the following:
  ```java
  GetRequest get = new GetRequest("https://maker.ifttt.com/trigger/" + eventName1 + "/with/key/" + apiKey);
        get.send();
  ```
  You’ll notice this is a “string” that is concatenated to create a URL.
  
  
 6. Next we will create a second `GetRequest` to in our `else if` statement to create a second event:

  ```java
  GetRequest get = new GetRequest("https://maker.ifttt.com/trigger/" + eventName2 + "/with/key/" + apiKey);
        get.send();
  ```

Your full code should look like this:

```java
import http.requests.*;
//update the below API key
String apiKey = "_______";
//update the event name to match the event name in Webhooks
String eventName1 = "turn_on";
String eventName2 = "turn_off";
void setup() {
  size(200,150);
  background(0);
}

void draw() {  
}
void keyPressed() {
    if (keyCode == UP) {
      GetRequest get = new GetRequest("https://maker.ifttt.com/trigger/" + eventName1 + "/with/key/" + apiKey);
      get.send();
      background(255);
    } else if (keyCode == DOWN) {
      GetRequest get = new GetRequest("https://maker.ifttt.com/trigger/" + eventName2 + "/with/key/" + apiKey);
      get.send();
      background(0);
    }
}


```

## Challenge
### Can you create your own Processing<>IFTTT Recipe?
1. Try changing the trigger in Processing to something other than `keyPressed`. Could it be when the mouse is in an area of the canvas, or maybe at a certain time?
2. Try changing the webhook action in IFTTT. It doesn't need to connect to Kasa, it could connect to a camera, an email, a sound, or something else.
