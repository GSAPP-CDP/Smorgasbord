---
moduleid: 314
title: Function Calling with LLMs
authors:
 - William Martin
published: true
---

<style>
img { border: 1px solid lightgray; }
blockquote p { font-size: 1.4rem; }
</style>

## What is “Function Calling?”

In the context of large language models, "function calling" is a capability (aka "tool") 
of some LLMs that enables them to trigger the execution of code _that you provide_.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/function-calling.png)

LLM services are being augmented with what some companies are calling "tools." Tools are 
essentially features that enable the LLM-powered applications to perform more than just 
text completion.

Tools can be things like web search, which companies like Perplexity.AI perform as part
of their core functionality.


## LLMs acting outside of themselves, even the real world.

In a larger sense, function calling enables LLMs to act outside of themselves. With
function calling, they can incorporate new data beyond their training data which would be 
impossible for them to know (gathering realtime conditions like stock prices, weather data,
perceptual data from cameras and vision models, etc.). Or LLMs can even act in real or
virtual worlds, like opening doors, turning on lights, sending emails, starting cars, etc.

It's essentially saying to the model, "Hey LLM, I have some functions I can call to help
you out with text completion," or "Dear LLM, I have some predefined functions ready to 
gather data or act on your behalf in case you need them to complete the users' prompts."

If we flip our thinking around, **function calling enables us to augment traditional code 
with language-understanding capabilities**. You can now write sophisticated logic in natural 
language without needing to figure out how to write it in code. So instead of _generating_
code like in the previous module, we can now express logic humanly by using an LLM.

> Function calling enables us to augment traditional code with language-understanding capabilities.


## Technical Details

As you'll see below, you'll need the following to define a function. Collectively these are
called the function's "schema."

**Name** – Obviously, this is the name of the function to be called, but this is intended to 
be the actual identifier as you would write it in code, so `get_current_weather` or
`getCurrentWeather`.

**Description** – This is a piece of text that describes when to call the function and
what it does. This is more than just a comment or reference for the user; it's used to
compute an _embedding_ that enables the LLM to know which function to call, if any.

**Parameters** – In this context, "parameters" of the function define the data we need
to extract from the messages in order to properly call our function. For example, if you're
writing a function to help an LLM incorporate realtime traffic data, you may include
parameters that gather the city name, street intersection, GPS coordinates, or time of day.
Parameters are defined thusly:

- The variable containing the value of the parameter.
- description: The textual description of what the value of this parameter is. Again, very important as it is used to compute an embedding.
- type: The data type, like "string" or "number".

**Required parameters** – A list of parameters that are strictly required by the function
to facilitate a successful call. The canonical example is to reference today's weather, you
need the _location_ for that function call to make sense.

See [OpenAI's guide to function calling](https://platform.openai.com/docs/guides/function-calling)
as a reference.


## How does function calling work?

Mechanically speaking, you send a typical "message" to an LLM system with a prompt and
a list of the available functions, each described as the schema above.

Remember the discussion on "embeddings" in the Text Generation with LLMs module? As the
LLM looks at the messages, it computes embeddings and compares them with the corollary
embeddings from the "description" provided with each function schema.

When a function's embedding is found to be similar enough to an embedding from a statement 
in the conversation, the system goes into a temporary state that produces messages not 
with the expected text completions, but with requests to call one or more of the functions 
we've defined and to return a value from them.

Let's see how this works in practice…


## Funkify

[Funkify](https://funkify.spatialpixel.com) is a web playground I've written that enables 
you to write and test functions with the OpenAI API, but without the need to write all the 
code. We're going to use it to explore how functions work by writing a 
few simple ones. It can be found at <https://funkify.spatialpixel.com>.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/funkify.png)

### OpenAI API Key Setup

For Funkify, you'll need to create a project-specific API key from OpenAI.

If you haven't signed up for an API account, go ahead and do so, then set up billing with
a low usage limit. (This tutorial will likely use less than $1.)

1. Navigate to <https://platform.openai.com/api-keys> or …
1. Click "Dashboard" while you have your "Smorgasbord" project selected, then click "API keys" in the sidebar.
1. Click "+ Create new secret key"
1. In the dialog, name it "Funkify."
1. Copy the key. Note that you won't be able to copy this after you close the dialog.
1. Navigate to Funkify, and under Settings, paste the API key.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/funkify-api-key.gif)

### Managing an API Key

This API key provides permission to execute calls to the OpenAI API. This means it will result
in charges to your account, so treat this API key like a password. Store it in a secure place
on your machine (like a password manager app), and don't share it with anyone.

Funkify is a web app that has no backend other than the OpenAI API itself. All data are stored 
in your browser, but this means that malicious browser extensions could still possibly get this key.

I recommend using the API key for these tutorials and deleting it from the OpenAI dashboard
when you're done. You can also try these tutorials in an incognito window to delete it from
the browser.


## Exercise: Function Calling with Funkify

Okay, let's see an example of what function calling is like. Follow this tutorial that shows
how function calling works with Funkify, including accessing weather data, MapBox data, 
Columbia Academic Commons data, and custom calculations all from an LLM.

<iframe width="1120" height="630" src="https://www.youtube.com/embed/7O1Jaz2brOM?si=DrmEjD-Ae97bTAlG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

→ **Screenshot your results for each function!**


## Exercise: Function Calling with the OpenAI API

<iframe width="1120" height="630" src="https://www.youtube.com/embed/XiJJ3BQ2Vt4?si=IBMoE4zl7qvdfxTm" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

→ **Screenshot your final results.**


## Bonus: Use code generation to write function schemas.

You can use code generation as well to write the function schemas and the function 
implementations. Try this in the future.
