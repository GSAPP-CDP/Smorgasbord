---
moduleid: 173
title: Sounds, Speech, and Macros
published: True
slug: sounds-speech-and-macros
authors:
 - "Violet Whitney"
---

# Sounds, Speech and Macros
## Module Summary
In this module you will learn how to work with sound in P5: 
- Detect Sounds in P5.js
- Make Sounds in P5.js
- Text to Speech
- Speech to Text

## Sound is fundamental to ambient environments
Audio and speech are critical aspects to ambient environments. Because sound does not require our visual attention it has been the go-to interaction mechanism for smart home devices. 

### Companies investing in speech and audio
Today's major technologies from Amazon, Apple, to Google have invested heavily in audio and speech based commands because it extends as the primary mode for triggers and actions in an ambient environment: take for example Amazon Echos, Apple's Siri, and the Google Home. Each of these relies on a microphone and software to understand the spoken command, then responds to the command with a speaker. 

### Why sound is a great communication mechanism for ambient environments 
Sound lends itself to ambient environments. It does not require the same visual attention that a screen or display does. You can hear something in the background to pick up the information that is shared by that sound. It is also easy to move about a space and still hear a sound. Additionally, speech also lends itself well to many people. Take for example the training required to show someone how to enter a command on a computer, vs training someone to speak to their smart home device. Most people already know how to speak. This makes speech based systems well suited to a broader base of people. 
Consider the amount of attention required for a visually based system:

### Ethical considerations for smart home systems
![](images/sound-13.png#img-left)   
*privacy*   

![](images/sound-12.png#img-left)    
*assumptions of race, gender, or class in services that behave human*   

![](images/sound-11.png#img-left)     
*reliance on technology*   



## Detect Sounds in P5.js
### Step 1 — Set Up the Microphone Input
- Go to your P5.js web editor and start a new sketch.
- Create a variable for your microphone input at the start of the sketch. let mic; We declare it at the top of the sketch to make it accessible throughout the entire sketch.
- In the setup() we want to create a standard canvas size like usual createCanvas(400, 400);.
- Next in the setup(), we want to create an instance of the p5.AudioIn class and assign it to our mic variable. This object represents the computer’s microphone input. It allows us to access and work with audio from the microphone. It should look like this mic = new p5.AudioIn();
- Next we want to start the microphone input. To do this we will use mic.start(); which begins listening to the microphone input, and you can use it to retrieve audio data. Steps 1–5 should look like the code below:
```javascript
let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}
```

### Step 2 — Create the Circle Based on Volume
So now we are getting the mic input from our computer, but how do we know that this is working and how do we use this for our sketches? Lets create a circle that adjusts to the mic level to see this in action! For this section we will move to the draw() section of our sketch since we will need to actively adapt our sketch based on the sound level at every millisecond

- **background** — In each frame, we start by setting the background color to a black to clear the canvas, ensuring a fresh frame for our dynamic visualization. background(0); You can make this any color.
- **getLevel** — Next we want to get the microphone input level. We retrieve the current volume level from the microphone input using the getLevel() method of the mic object. This volume value ranges from 0 (silence) to 1 (maximum volume) and represents the audio input.
- **map** — Next we want to map the volume to circle size with the map() function. The map() function takes the volume as input, maps it from a range of 0 to 1 (the volume range) to a new range of 20 to 200 (the circle size range). This step allows us to adjust the circle’s size based on the loudness of incoming sounds. let circleSize = map(volume, 0, 1, 20, 200);
- **ellipse** — Finally, we’ll use the ellipse() function to draw a circle on the canvas. ellipse(width / 2, height / 2, circleSize, circleSize); The circle’s position is set at the center of the canvas “width / 2, height / 2”, and its width and height are determined by the circleSize variable which we created in the last step. As the volume of the microphone input changes, the circle will dynamically adjust its size accordingly.
All of the above steps when added to your mic input setup should look like this:
```javascript
let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);

  let volume = mic.getLevel(); 
  let circleSize = map(volume, 0, 1, 20, 400); 
  ellipse(width / 2, height / 2, circleSize, circleSize);
}
```

## Challenge
How might you change the background color, the circle, or other aspects of your sketch based on the volume level? Hint — see the if else statement below:

```javascript
    if (volume > 0.1) {
    background(255, 0, 0); 
  } else {
    background(0); 
  }
```

## Make Sounds in P5.js
### Step 1 — Write code for loading a sound
- Go to your [P5.js web editor](https://editor.p5js.org/) and start a new sketch.
- At the very top of your sketch we will define a variable to hold the sound: let goatSound; You’ll notice we can name this variable anything. We’ve called it “goatSound” so that we can remember its the sound of a goat. We put loading functions at the very top of your sketch because loading will happen once at the very beginning of the sketch runtime so that these files are available for the later steps of your sketch.
- Next we want to use the preload() function to load the sound file. These two steps should look like this:
```javascript
let goatSound;

function preload() {
  goatSound = loadSound('goat.wav'); 
}
```
### Step 2 — Upload A Sound File
- In your sketch, in the P5.js web editor click the > arrow on the lefthand side of your sketch to reveal the files of your sketch. Here you can see the HTML, Javascript and CSS that makes up your sketch.
- Click the dropdown menu next to “Sketch Files” and select “Upload file.”
- Let’s upload a small sound file to get started. You can download a simple sound file here [goat.wav](https://drive.google.com/file/d/1ZNOc7h64mo56d0dmdFqz7casRWGmg0xi/view) and then drag and drop this file into the upload window. You will then see this file appear as an additional file in your sketch folder.


### Step 3 — Write Code to Play the Sound File
- Ok great, so we have a sound, and we’ve loaded it. But now we want to hear it. So we need to write code that tells P5 to play the sound.

- In the setup() function, play the sound when the sketch starts:

```javascript
function setup() {
  createCanvas(400, 200); // Set your canvas size
  goatSound.play(); // Play the sound when the sketch starts
}
```

### Step 4 — Run Your Sketch & Set the Volume
- Click the “Play” button at the top of the code editor to run your p5.js sketch.
- You’ll hear the “goat.wav” sound file play automatically when the sketch starts. If you don’t hear it but don’t see any errors it may be too quiet. Let’s play with making it louder.
- You can change the volume by using goatSound.setVolume(10); before the goatSound.play();. In p5.js and many other programming languages, the dot (.) notation is used to access and manipulate properties and methods of objects. So when we have created this variable goatSound that represents our sound file, we can use the dot notation to manipulate the properties of this file. Here 10 represents the volume level. Try changing this to 0.5 or 20 to see it change.
Your full sketch should look like this:
```javascript
let goatSound;

function preload() {
  goatSound = loadSound('goat.wav'); 
}

function setup() {
  createCanvas(400, 200); 
  goatSound.setVolume(10);
  goatSound.play(); 
}
```
That’s it! You’ve created a simplified p5.js sketch that plays the sound. Remember to save your project in the web editor so you can access it later.

## Challenge
How might you create a button to play the sound?
How might you change the volume or the pitch of the sound? 
How might you change the sound to another sound file? Consider browsing [free sounds on the web](https://freesound.org/).


## Text to Speech
Getting A Computer to Speak
P5 can also speak by accessing the built-in Web Speech APIs available in modern browsers.

- SpeechSynthesisUtterance is used to turn a string into something that can be spoken. This is where you would add your unique message as a string.
- You can set additional properties like volume, rate, and pitch if needed.
- window.speechSynthesis.speak(message) is used to initiate the speech with the specified message.
_NOTE — Browser support for the Web Speech API varies; test in different browsers. Ensure the P5 web page has proper microphone and speaker permissions._

```javascript
function setup() {
  let message = new SpeechSynthesisUtterance("hello"); 

  // Set additional properties (optional)
  message.volume = 1.0; // Volume (0.0 to 1.0)
  message.rate = 1.0; // Speech rate (0.1 to 10.0)
  message.pitch = 1.0; // Speech pitch (0.0 to 2.0)

  // Speak the message
  window.speechSynthesis.speak(message);
}
```
You can learn more about the built-in Web Speech APIs available in modern browsers [here](https://developer.chrome.com/blog/voice-driven-web-apps-introduction-to-the-web-speech-api/).

## Speech to Text in P5.js
The following uses the browser’s webkitSpeechRecognition to transcribe audio from the mic whenever the spacebar is held down and draw it as a P5 text().
```javascript
//note you must first click the canvas with your mouse before holding down the space bar

let speechRecognition;
let isListening = false;
let textToShow = "";

function setup() {
  createCanvas(400, 400);
  background(255);

  // Initialize speech recognition
  speechRecognition = new webkitSpeechRecognition() || new SpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.lang = 'en-US';

  // Handle the result event
  speechRecognition.onresult = function(event) {
    if (event.results.length > 0) {
      textToShow = event.results[0][0].transcript;
    }
  };
}

function draw() {
  background(255);
  fill(0);
  textSize(32);
  text(textToShow, 10, height / 2);
}

function keyPressed() {
  if (keyCode === 32) { // Spacebar
    if (!isListening) {
      speechRecognition.start();
      isListening = true;
    }
  }
}

function keyReleased() {
  if (keyCode === 32) { // Spacebar
    if (isListening) {
      speechRecognition.stop();
      isListening = false;
    }
  }
}
```


### Student Projects that Use Sound
Could you play with the idea of who is speaking in a room, and direct light towards them?    
[(Sound Translator) - 2009](https://vimeo.com/groups/processing/videos/3102434)     
<iframe src="https://player.vimeo.com/video/705150301?h=fc141cb8d9" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>   
[Shared Kitchen — Jacob Kackley, Takashi Honzawa, Karan Matta, Kylie Walker](https://vimeo.com/705150301)  

### Inspirational projects

Below are some examples of artists using sound in P5 in their own work:   
[Sound Translator](https://vimeo.com/groups/processing/videos/3102434)    
[The Computer Orchestra](https://vimeo.com/74922458?embedded=true&source=vimeo_logo&owner=20728835)    
[Visual Sound Design](https://vimeo.com/12472962?embedded=true&source=vimeo_logo&owner=398601)    
[Fine Collection of Curious Objects](https://vimeo.com/10173262?embedded=true&source=vimeo_logo&owner=2777324)    
[Quad Soundscape Generator](https://vimeo.com/24359772?embedded=true&source=vimeo_logo&owner=1242706)    
[Sound Translator](https://vimeo.com/groups/processing/videos/3102434)    
