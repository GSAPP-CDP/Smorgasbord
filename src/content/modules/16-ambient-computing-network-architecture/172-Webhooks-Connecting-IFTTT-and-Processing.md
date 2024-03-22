---
moduleid: 172
title: Webhooks - Connecting IFTTT and Processing
published: True
slug: webhooks-connecting-ifttt-and-processing
authors:
 - "Violet Whitney"
---

# Webhooks: Connecting IFTTT and Processing
## Module Summary   
In this module you will learn about webhooks and how to connect Processing to IFTTT recipes.

[Webhooks](https://ifttt.com/maker_webhooks) allows you to make or receive a **web request** with IFTTT. A **web request** aka an **http request** allows software developers to request information from a website, such as data from an IFTTT sensor, or a street view image from Google. This means that we can get applications not yet supported by IFTTT, such as Processing, to talk to IFTTT. We will use Processing to create an HTTP request that will alert our webhook triggering an action in IFTTT. There will be three basic parts to linking IFTTT and Processing:

![processing-diagram](images/Webhooks-Connecting-IFTTT-and-Processing-diagram1.png#img-full)   
*webhook diagram*   

- **Processing (HTTP request)** — here we can program our own unique triggers such as: a button, light level, sound, number of faces in a camera; to trigger our webhook. The important part is that we have all the necessary information in Processing (the **API key** for webhooks, and the right **“event name”** from webhooks. We'll talk about these terms in the tutorial.
- **Webhook (Trigger)**— when Processing triggers an HTTP request with our event name, webhooks will relay this trigger to the appropriate action based on the recipe we've created
- **IFTTT (Action)** — This can be any action from IFTTT as it normally works in IFTTT recipes.


## Why should I care about webhooks? 
**On a technical level**, what is particularly important about learning how to work with webhooks is that it teaches us how to talk to all kinds of websites. By learning the basic structure of a webhook, we will learn what is typically required when talking with a website.

![processing-diagram](images/webhooks-11.gif#img-full)   
*network diagram*   

**On a design level**, we're learning how to connect various "worlds" that don't usually talk to each other: Processing, IOT sensors, microservices. Designers that have a knack for connecting different "worlds" such as this will have much greater fluidity when prototyping ideas and a greater ability to innovate because they won't be bound by one "world's" capabilities. For example to prototype a Grasshopper plugin can only get you so far, but if you now learn how to connect Grasshopper with you phone, the two worlds have much greater cabalities together. 

**On a societal level**, this has cascading consequences for what designers can build, and thus will impact the spaces and technology they create. A designer who can connect the world of the web, with sensor technologies, with physical spaces, will have the ability to connect worlds that have never been united. Thus, these designers, will change the type of real world that we live in. One where interactions on the web don't require you spending your day in front of a computer screen, or clicking buttons on a tiny phone. One where web based interactions can be more contextually aware of where and when information is most relevant: i.e. getting pinged by a work email may not be relevant if you are at home with your family for Thanksgiving dinner.

**Ultimately** webhooks allow us to expand a spatial UX toolkit. We can think about user experiences in physical spaces and connect the world of the web with the physical world.

![processing-diagram](images/webhook1-12.gif#img-full)   
*example spatial User Interface*   


## Tutorial
### (Disclaimer) Before Getting Started You Will Need 
To fully illustrate the functionality of IFTTT and ambient computing this tutorial will walk through setting up a webhook between Processing (desktop software), IFTTT (cloud service), and a smart home plug called Kasa (physical hardware). This means to follow this tutorial directly you will want to purchase a Kasa plug. They are relatively inexpensive and great for many ambient computing projects because you can hook up pretty much any electronic to a smart plug to have it turn "on" or "off" based on a trigger from IFTTT or Processing. You can purchase a [KASA smart plug here](https://www.amazon.com/TP-LINK-HS103P2-Required-Google-Assistant/dp/B07B8W2KHZ/ref=sr_1_2?dchild=1&keywords=kasa%2Bsmart%2Bplug&qid=1599151864&sr=8-2&th=1) for around $20 USD for 2.

If you don't have these plugs you can also follow along and connect IFTTT to another service that is not a physical device, such as a Google Drive, email service, or SMS texting service. I find these less physically present and thus less thrilling than seeing something like a fan or a light turn on but it should give you an idea of how these networked connections work.

**Additional Ambient Device Resources Just For Fun**  
If you are interested in other ambient devices here some I've had some luck with (these are not covered in the tutorial and not required):
- [Phillips Hue](https://www.amazon.com/Philips-Hue-Bluetooth-compatible-Assistant/dp/B07QWB3J8W/ref=sr_1_2?dchild=1&keywords=philips+hue+smart+light&qid=1599153824&sr=8-2) or other smart light ($50)
- [Wireless Tags](https://store.wirelesstag.net/collections/all) many various sensors that are relatively ineexpensive: door sensors, motion sensors, light sensors, light quality sensors, etc. All sensors will additionally require the Ethernet Tag Manager ($65+)
- [Amazon Echo](https://www.amazon.com/Echo-Dot/dp/B07FZ8S74R/ref=sr_1_2?crid=TXV06GNTUN3X&keywords=echo+dot&qid=1649647455&s=amazon-devices&sprefix=echo+dot%2Camazon-devices%2C75&sr=1-2) or other smart speaker ($30)

### Creating A IFTTT Recipe with Webhooks
1. sign in to [IFTTT](https://ifttt.com/home)
2. Go to `Create` → to create a new application
3. click on the **“this”** to choose our trigger. Search for **“webhooks”**. Select `webhooks`.

![processing-diagram](images/webhooks-1.gif#img-full)   
*IFTTT steps 1-3*   

4. Now click on the **“Receive a web request”** .
5. Create an **“Event Name”** for the trigger. I will just call mine **“turn_on”**. If you are creating a new event trigger, you should name this something unique. Then click `Create trigger`.

![blahblah](images/webhooks-2.gif#img-full)   
*IFTTT steps 4-5*   

6. Now we need to create our **“that”** event, click on the `that` button. Select any notification as you normally would. In our instance I will turn on an outlet from `Kasa TP-Link`.  
7.Now select the Kasa TP-Link device that you plan to turn on.

![blahblah](images/webhooks-3.7.gif#img-full)   
*IFTTT steps 6-7*   

### Creating An API Key
8. Now we need to get the HTTP request link to add to our processing sketch. Go to your profile image in the top right and select `My services` and select `webhooks`.
9. Now from the webhooks page **click** the `settings`.

![blahblah](images/webhooks-6.gif#img-full)   
*IFTTT steps 8-9*   

10. Here you can find a URL with your **“unique key”**. Click `Documentation` then copy the key (very long text and number key).
![blahblah](images/webhooks-7.gif#img-full)   
*IFTTT step 10*   

Congrats! You have just created a unique key for IFTTT (common to software development when working with APIs).


### Connecting Processing to your Webhook API
11. Open up Processing! Lets start by using `keyPressed()` in Processing to turn on a light bulb.
12. First we need to add a library which allows Processing to make HTTP requests. In Processing import the http request library. Go to `Sketch`→`Import Library` → `Add Library` → Search for **“http request”**. Select it and click `install`. Sometimes you will need to relaunch Processing after you install this library. If this works, skip to step 2.

![blahblah](images/webhooks-8.gif#img-full)   
*IFTTT steps 11-12*   

If you’re still having issues with this library try downloading it directly:
- You can download the library file directly from [here](https://drive.google.com/file/d/1GasdTrMZEwzPjEXPEwKMxjzdcV9WAIxE/view?usp=drive_open).
Unzip the folder.
- Search for your `Processing` folder on your computer, you will have a sub-folder names `libraries`.
- Move the unzipped files to this `libraries` folder.
Close and restart Processing.

13. Now lets set up the basic structure of our code using a `keyPressed()` to change the background color of our sketch. If the `UP` key is pressed we will make the background white and if the `DOWN` key is pressed we will turn the background black:
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
*IFTTT step 13*   

14. Next copy and paste the code below at the top of your code(before `void setup`). This lets us use the http request library and creates new variables for our **webhooks API** and our webhook **event names**. Our API Key will give webhooks the authentication for our specific profile. Without this key there is no way to know which webhooks profile we are trying to use. In our case we are using our class’s profile name. We will also use our event name so webhooks knows which event is being triggered. 
15. Once you’ve pasted in the code below, please **update it with your API key and event names**.

  ```java
  import http.requests.*;
  //update the below API key
  String apiKey = "_____";
  //update the event name to match the event name in Webhooks
  String eventName1 = "turn_on";
  String eventName2 = "turn_off";
  ```
  
![blahblah](images/webhooks-10.gif#img-full)   
*IFTTT steps 14-15*   
 
 16. Next we will use `GetRequest` from the HTTP request library to make an HTTP request to webhooks. Inside of your `if` statement, and before you change the background color, copy the following:
  ```java
  GetRequest get = new GetRequest("https://maker.ifttt.com/trigger/" + eventName1 + "/with/key/" + apiKey);
        get.send();
  ```
  You’ll notice this is a “string” that is concatenated to create a URL.
  
  
 17. Next we will create a second `GetRequest` to in our `else if` statement to create a second event:

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

### Challenge
**Can you create your own Processing<>IFTTT Recipe?**
1. Try changing the trigger in Processing to something other than `keyPressed`. Could it be when the mouse is in an area of the canvas, or maybe at a certain time?
2. Try changing the webhook action in IFTTT. It doesn't need to connect to Kasa, it could connect to a camera, an email, a sound, or something else.

### Example Student Project
<iframe src="https://player.vimeo.com/video/705149732?h=8aa0bdfb99" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>   
[Lighthouse — Yilun Sun, Wanting Sun, Qing Hou](https://vimeo.com/705149732)

### Resources
[What are web requests?](https://www.codecademy.com/articles/http-requests)

