---
moduleid: 313
title: Code Generation with LLMs
authors:
 - William Martin
published: true
---

<style>
img { border: 1px solid lightgray; }
</style>

## So, LLMs can write code?

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/codegen-p5js.gif)

Yes, indeed! Not only can they generate text in various languages, modern LLMs are often trained
on copious amounts of open source code in multiple programming languages, even utilizing
popular first-party and third-party libraries.

For computational designers, this is a significant capability of LLMs that can make 
complex computational concepts much more accessible.

- We can explore sophisticated ideas and analyses without the need to code the underlying algorithms ourselves.
- We can express our intent at different levels of abstraction.
- We can have another hand to fix bugs.
- We can iterate on a concept from simple to more complex.

Here, let's explore some ways to leverage this capability.


## Risks of Code Generation

**Generated code doesn't always work.** LLMs can sometimes generate nonsensical code or can
misinterpret your intent.

**Still need to read the code.** Even in times the code "just works," we'll still need to read
through it to understand what it does, most often so we can integrate it into our projects.

**Nondeterminism.** At least for chat apps, providing the same prompt in two different chats
won't result in the same completion. When writing code, this can be a bit frustrating, but it
can also be advantageous. For the exercises below, it means you won't come up with the 
same results either, but it also means you can try again to come up with different solutions.


## Getting Started

All of these exercises can be completed with ChatGPT (<https://chatgpt.com>) or any aforementioned
chat app in this sequence. (As of this writing, Anthropic claims their engineering teams all 
regularly use Claude 3.5 Sonnet as their productivity booster.)


## Exercise 1: Basic Code Generation for P5.js

Let's try some basic code generation to write a P5.js sketch. We'll be using the P5.js
"web editor" to run the code, found at: <https://editor.p5js.org/>. Open this in a separate tab.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/p5js-web-editor.png)

Start a new chat.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/openai-chatgpt-new-chat.png)

Enter this prompt:

```
Please write a P5.js sketch for Conway's Game of Life.
```

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/codegen-chatgpt-conway.gif)

Copy the code by clicking the "Copy code" button at the top. Paste it into
the P5.js web editor. Then click the play button.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/codegen-p5js-conway.gif)

If all went well, you should see a running artificial life simulation in the P5.js web editor!
Yup, you just used artificial intelligence to generate code for the canonical artificial life
simulation, Conway's Game of Life.

If you're interested, see following for more about Conway's Game of Life.

- [Conway's Game of Life](https://conwaylife.com/) simulator
- [Wikipedia article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

If the code generation didn't work, just try again in a new chat. In such cases, the 
nondeterminism in LLM chats helps us. I even got three slightly different implementations
while writing this tutorial.

You can also try a different model by selecting a new one in the upper-left corner.

### Prompt For Changes

In the same chat, it's possible to prompt for modifications to the code. In fact, one tactic for 
effective code generation with LLMs is to start simple and build up to something more complex,
one prompt at a time.

Let's go back to ChatGPT and prompt it to alter the code slightly. 

```
Can you please make the cells smaller?
```

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/codegen-p5js-conway-smaller.gif)

Now, this change was relatively minor, and ChatGPT already wrote for us parameterized code,
but it does demonstrate how the chatbot will continue adapting to our prompts. We could have
also prompted it to change colors, respond to the mouse, etc.

So let's try something more complicated, messing with the rules of the game a bit:

```
I'd like to explore the effects of cells that are permanently alive. When the initial state 
is generated, can you ensure that some of the cells will never die?
```

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/codegen-p5js-conway-alive.gif)

### Make at least 2 or 3 more changes on your own.

Some suggestions (These aren't necessarily the prompts that will work, so you may need to
author your own):

- Sprinkle new live cells that follow the mouse.
- Remove the static live cells.
- Add a random cluster of live cells when clicking the mouse.
- Surround the entire canvas with live cells on the border.
- Add a special pattern on a mouse click.

There are probably hundreds of patterns with the GOL, like "gliders," "Gosper's Glider Gun," 
"Beacons," "Pulsars," and the like. Find one and prompt the AI to implement it for you.

→ **Screenshot three of your most interesting results!**


## Exercise 2: Prompt for high level implementation (P5.js)

One of the best parts of LLMs is the ability to prompt for code implementations at a "high level"
of abstraction. That is, we can express ourselves with an intent that doesn't speak to a
specific algorithm or implementation.

Start a new chat and prompt with the following:

```
In a P5.js sketch, draw a map of the 20 largest cities in the world.
```

In my case, ChatGPT attempted to reference an external image for this sketch, but generated
a URL that resulted in a 404 not found error. If you want to use a background map, the easiest
to use in this scenario is a cylindrical equidistant projection. This URL below should work. 
Just replace it in the sketch code in the playground or prompt your AI chat to include it:

<https://desktop.arcgis.com/en/arcmap/latest/map/projections/GUID-5EE3649E-A5E7-4BD3-9E61-D9C06DBAD860-web.png>

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/codegen-p5js-citiies.png)

Let's try some more tasks:

- Draw a great circle route from New York City to Tokyo.
- When mousing over a city, highlight it and the three closest cities.

→ **Screenshot three of your most interesting results!**


## Exercise 3: Prompt for low level algorithm implementation (P5.js)

Some of the work we do as computational designers requires using algorithms that we don't 
necessarily need to know the various implementations of. If we need to sort a list of data
points, we should just prompt for the sort, rather than distinguishing between bubble sort, 
merge sort, etc.

Some of these algorithms are accessible through third-party, open-source libraries, but 
sometimes it's difficult to find and integrate them.

Luckily, we can prompt ChatGPT to help. Start a new chat and input the following:

```
In p5.js, please generate 40 points at random, weighted towards the center, and draw 
a concave hull around them.
```

Copy/paste the resulting code in the P5.js web editor.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/codegen-p5js-convexhull.png)

This is the implementation I got for the convex hull algorithm:

```javascript
function convexHull(points) {
  // Gift Wrapping algorithm to find the convex hull
  let hull = [];
  let pointOnHull = points[0];
  
  // Find the leftmost point
  for (let i = 1; i < points.length; i++) {
    if (points[i].x < pointOnHull.x) {
      pointOnHull = points[i];
    }
  }
  
  let currentPoint;
  do {
    hull.push(pointOnHull);
    currentPoint = points[0];
    
    for (let i = 1; i < points.length; i++) {
      if (currentPoint === pointOnHull || ccw(pointOnHull, currentPoint, points[i]) < 0) {
        currentPoint = points[i];
      }
    }
    
    pointOnHull = currentPoint;
  } while (currentPoint !== hull[0]);
  
  return hull;
}

function ccw(p1, p2, p3) {
  // Cross product to determine if the turn is counter-clockwise
  return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
}
```

As you might know, a "[convex hull](https://en.wikipedia.org/wiki/Convex_hull)" 
is a computational geometry algorithm that creates the smallest convex set of points that surrounds
a given set of points. In the case of two dimensional Euclidean space, this manifests as a convex
polygon.

Computing a convex hull can be useful for particular situations, such as 3D scanning or determining
a heuristic for computing an area given a set of geographic points. However, writing the algorithm
itself is quite a chore, and below the value line for most of our work as computational designers.
Just prompting an LLM for one gives us an edge. We still need to know what to prompt, but we don't
need to worry about the code anymore.

Explore what you can do at the algorithm level:

- In a new chat, generate 100 random points. Then pick two points. Please draw a short path between them from point-to-point with a greedy algorithm.
- In a new chat, first generate a gradient field using Perlin noise. Then prompt for a "marching squares algorithm" to draw outlines around 50% gray regions. Adjust the gradient to be finer.

→ **Screenshot three of your most interesting results!**


## Exercise 4: Convert JavaScript to Python

Since we use both JavaScript and Python in the MS CDP program, it's often helpful to convert
code from one language to the other. This doesn't always work, since when using Python, for
example, we might be using a Python-specific library like numpy, but in cases in which there
are no such dependencies, this can be very helpful.

If you followed other tutorials in the Smorgasbord on Python, set up a new environment. If
you haven't yet, either follow in the MediaPipe tutorial later in this course or use an
online Python playground such as: <https://playground.programiz.com/>

Start a new chat. Copy-paste in the convex hull implementation from above, then add the following
prompt. Most chat apps support shift+Enter to add new lines.

```
Please convert the above code to Python.
```

Did it give you an executable example? 

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/codegen-python-convex-hull-conversion.png)

→ **Copy-paste it into a playground (or execute it in your own environment) and take a screenshot.**


## Exercise 5: Debug This Code

LLMs can sometimes "reason" about problems in your code. By prompting it with the code and
some indication of the problem, like an error message, you can sometimes get some useful
help. Try this:

Start a new chat. Input this code and following prompt:

```
data = []
def parseCSV(text):
    lines = text.split("\n")
    for line in lines:
        pts = line.split(",")
        data.push(pts)
    return data

parseCSV("""name,height
beauregard,175
isana,140""")

I'm running into an error with this code. Can you help me find the bug?
```

→ **Screenshot the resulting chat. Also, attempt to run the code and screenshot the output.**


## Exercise 6: Write a Snake! Game.

Try for yourself:

```
In P5.js, write a snake game.
```

→ **Screenshot or gif the result. Make some modifications and have fun!**

