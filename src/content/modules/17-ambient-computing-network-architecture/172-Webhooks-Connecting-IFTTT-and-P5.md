---
moduleid: 172
title: Webhooks - Connecting IFTTT and P5.js
published: True
slug: webhooks-connecting-ifttt-and-P5
authors:
 - "Violet Whitney"
---

# Webhooks: Connecting IFTTT and P5
## Module Summary   
In this module you will learn about webhooks and how to connect P5 to IFTTT recipes.

[Webhooks](https://ifttt.com/maker_webhooks) allows you to make or receive a **web request** with IFTTT. A **web request** aka an **http request** allows software developers to request information from a website, such as data from an IFTTT sensor, or a street view image from Google. This means that we can get applications not yet supported by IFTTT, such as P5.js, to talk to IFTTT. We will use P5.js to create an HTTP request that will alert our webhook triggering an action in IFTTT. There will be three basic parts to linking IFTTT and P5.js:

![P5-diagram](images/Webhooks-Connecting-IFTTT-and-Processing-diagram1.png#img-full)   
*webhook diagram: P5 (HTTP request) → Webhook (Trigger) → IFTTT (Action)*   

- **P5.js (HTTP request)** — here we can program our own unique triggers such as a button, light level, sound, number of faces in a camera can trigger our webhook. The important part is that we have all the necessary information in P5 (the API key for webhooks, and the right “event name” from webhooks.
- **Webhook (Trigger)**— when P5 triggers an HTTP request with our event name, webhooks will relay this trigger to the appropriate action based on the recipe we have created
- **IFTTT (Action)** — This can be any action from IFTTT as it normally works in IFTTT recipes.


## Why should I care about webhooks? 
**On a technical level**, what is particularly important about learning how to work with webhooks is that it teaches us how to talk to all kinds of websites. By learning the basic structure of a webhook, we will learn what is typically required when talking with a website.

![P5-diagram](images/webhooks-11.gif#img-full)   
*network diagram*   

**On a design level**, we're learning how to connect various "worlds" that don't usually talk to each other: P5, IOT sensors, microservices. Designers that have a knack for connecting different "worlds" such as this will have much greater fluidity when prototyping ideas and a greater ability to innovate because they won't be bound by one "world's" capabilities. For example to prototype a Grasshopper plugin can only get you so far, but if you now learn how to connect Grasshopper with you phone, the two worlds have much greater cabalities together. 

**On a societal level**, this has cascading consequences for what designers can build, and thus will impact the spaces and technology they create. A designer who can connect the world of the web, with sensor technologies, with physical spaces, will have the ability to connect worlds that have never been united. Thus, these designers, will change the type of real world that we live in. One where interactions on the web don't require you spending your day in front of a computer screen, or clicking buttons on a tiny phone. 
**Ultimately** webhooks allow us to expand a spatial UX toolkit. We can think about user experiences in physical spaces and connect the world of the web with the physical world.

![P5-diagram](images/webhook1-12.gif#img-full)   
*example spatial User Interface*   


## Tutorial
### (Disclaimer) Before Getting Started You Will Need 
To fully illustrate the functionality of IFTTT and ambient computing this tutorial will walk through setting up a webhook between P5 (desktop software), IFTTT (cloud service), and a smart home plug called Kasa (physical hardware). This means to follow this tutorial directly you will want to purchase a Kasa plug. They are relatively inexpensive and great for many ambient computing projects because you can hook up pretty much any electronic to a smart plug to have it turn "on" or "off" based on a trigger from IFTTT or P5.js. You can purchase a [KASA smart plug here](https://www.amazon.com/TP-LINK-HS103P2-Required-Google-Assistant/dp/B07B8W2KHZ/ref=sr_1_2?dchild=1&keywords=kasa%2Bsmart%2Bplug&qid=1599151864&sr=8-2&th=1) for around $20 USD for 2. 

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

![P5-diagram](images/webhooks-1.gif#img-full)   
*IFTTT steps 1-3*   

4. Now click on the **“Receive a web request”** .
5. Create an **“Event Name”** for the trigger. I will just call mine **“turn_on”**. If you are creating a new event trigger, you should name this something unique. Then click `Create trigger`.

![diagram](images/webhooks-2.gif#img-full)   
*IFTTT steps 4-5*   

6. Now we need to create our **“that”** event, click on the `that` button. Select any notification as you normally would. In our instance I will turn on an outlet from `Kasa TP-Link`.  
7.Now select the Kasa TP-Link device that you plan to turn on.

![diagram](images/webhooks-3.7.gif#img-full)   
*IFTTT steps 6-7*   

### Creating An API Key
8. Now we need to get the HTTP request link to add to our processing sketch. Go to your profile image in the top right and select `My services` and select `webhooks`.
9. Now from the webhooks page **click** the `settings`.

![diagram](images/webhooks-6.gif#img-full)   
*IFTTT steps 8-9*   

10. Here you can find a URL with your **“unique key”**. Click `Documentation` then copy the key (very long text and number key).
![diagram](images/webhooks-7.gif#img-full)   
*IFTTT step 10*   

Congrats! You have just created a unique key for IFTTT (common to software development when working with APIs). This IFTTT API key is a unique security key that will allow other services you create or permit, to talk to IFTTT and let IFTTT know which persons account (yours) to access.

Your all set up on the IFTTT-side, however there is nothing triggering your webhook! Nothing knows it exists yet to talk to it, so we’ll do that next in P5.

### Connecting P5 to your Webhook API
In this section we will use keyPressed() in P5 to turn on your plug through IFTTT and your webhook.

1 — **KeyPressed**
  - Lets set up the basic structure of our code using a keyPressed() to change the background color of our sketch. If the UP key is pressed we will make the background yellow and if the DOWN key is pressed we will turn the background black. This will help us know that keyPressed is working before connecting it to IFTTT:

  ```javascript
  function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // Nothing to draw in this example
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    background(255, 255, 0); 
  }


  else if (keyCode === DOWN_ARROW) {
    background(0);
  }
}
  ```
![black-white-prototype](images/webhooks-9.gif#img-full)   
*P5 keypress*   

2 — **API Call**
We’ll need to use an “API call” in P5.js to talk to the IFTTT API.

An API call is a request made by one software application to interact with or retrieve data from another software application through a defined interface. API calls are extremely common in software engineering.

SIDEBAR: Curious about API calls and their structure in P5.js? Check out [this video by Daniel Shiffman](https://www.youtube.com/watch?v=ecT42O6I_WI&ab_channel=TheCodingTrain) walking through how to use APIs in P5.

We will need to create a string for our API call. This string is a unique URL with the specific information we want from our webhook service, in our case: our event name we are accessing from IFTTT (the name we created for our Kasa plug event) and the API key. The url should ultimately look like this: https://maker.ifttt.com/trigger/eventName/with/key/apiKey substituting our eventName and apiKey with your own names of course. To do this we will concatenate strings of text together, like this:
```javascript
"https://maker.ifttt.com/trigger/" + eventName1 + "/with/key/" + apiKey
```

But we also need this url string to be inside a special get request function so that when its sent to the webhook, the url is structured in the format that the IFTTT webhook expects, like this:
```javascript
httpGet("https://maker.ifttt.com/trigger/" + eventName1 + "/with/key/" + apiKey);
```

Inside of your if(keyCode===UP_ARROW){add the above code inside this statement.

Next we will create a second GetRequest to in our if(keyCode===DOWN_ARROW){ statement to create a second event, for me I will use this to turn the plug off when the key is pressed down:
```javascript
httpGet("https://maker.ifttt.com/trigger/" + eventName2 + "/with/key/" + apiKey);
```

Your full code should look like this:
```javascript
let apiKey = "YOUR API KEY";
let eventName1 = "YOUR FIRST EVENT NAME";
let eventName2 = "YOUR SECOND EVENT NAME";

function setup() {
  createCanvas(200, 150);
  background(0);
}

function draw() {
  // Nothing to draw in this example
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    httpGet("https://maker.ifttt.com/trigger/" + eventName1 + "/with/key/" + apiKey);
    background(255);
  } else if (keyCode === DOWN_ARROW) {
    httpGet("https://maker.ifttt.com/trigger/" + eventName2 + "/with/key/" + apiKey);
    background(0);
  }
}
```


### Challenge
**Can you create your own Processing<>IFTTT Recipe?**
Can you create a create an applet that turns on a plug or something else through IFTTT and uses your P5 sketch in a new way?

### Resources
[What are web requests?](https://www.codecademy.com/articles/http-requests)

