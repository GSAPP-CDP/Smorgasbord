---
moduleid: 305
title: Major AI Platforms and Tools
authors:
 - William Martin
published: true
---

<style>
img { border: 1px solid lightgray; }
</style>


These are the platforms we'll be discussing in this course. Each are chosen for a few reasons:

- **Significance** – How influential is the platform or toolkit (and its parent company, if any) in the AI space? Foundational 
- **Variety of capabilities** – These platforms can each perform a large variety of tasks and support training, fine-tuning, inference, etc.
- **Variety of tooling** – These platforms have different ways to access its capabilities, like playgrounds, an SDK, etc.
- **Likelihood of longevity** – Robust platforms and tools that are likely to be around for a long while, so the skills you build will last.

The ones below aren't the only ones worth using or trying, but there are so many that it's not
really possible to cover even a significant number of them. The ones here provide enough of a
foundation to be capable and effective with AI.

# Hosted Platforms

## Hosted Platform: [OpenAI](https://openai.com)

It's impossible to talk about AI these days without mentioning OpenAI. This company and its 
offerings have popularized the newest generative AI capabilities, and their platform is still the 
state-of-the-art and the standard to access large language models and other capabilities.

![OpenAI's products in Spring 2024](https://gsapp-ms-cdp.s3.amazonaws.com/ai/openai-products.png)

OpenAI have two product lines: ChatGPT and the OpenAI API (application programming interface).

### ChatGPT

ChatGPT is a chat application that utilizes OpenAI's underlying models, GPT (which stands for 
Generative Pre-trained Transformer). "Transformer" refers to an architecture we'll discuss in 
the next sequence.

### API

The OpenAI API is a way to utilize the capabilities of OpenAI in a more open and flexible way. 
More than just the GPT models, we can access vision capabilities, text-to-speech, speech-to-text 
(i.e. transcription), embeddings, and more. We'll be using the API to understand how to leverage 
some of the most advanced AI abilities, to enable machines to "speak human," and to enable LLMs
to control systems outside of the AI itself.

We'll use both products in this course, with an emphasis on the API. For ChatGPT and this course,
the free account is sufficient.

### GPT vs ChatGPT

It's important to distinguish between **GPT** and **ChatGPT**.

ChatGPT is an app, [available on the web](https://chatgpt.com/) and through a mobile app, that 
provides a chat-like user interface, features like voice conversations, memory, and storage 
of chats. With these tutorials, the public version of ChatGPT, found at <https://chatgpt.com/>
will be sufficient.

GPT, however, is a class of models for text completion (and more). OpenAI provide several 
versions of GPT, each with different performance characteristics and capabilities, like 
structured output and function calling. We'll talk more about them later, but the key point is
that we can access GPT models multiple ways, and one of them is ChatGPT, the app.


### Task: Sign up for an OpenAI Platform account

Sign up for an OpenAI Platform Account here: <https://platform.openai.com/docs/overview>

### Task: Set up billing for the API

The API requires a billing account. The cost is usage-based, but we won't be sending many 
requests in these tutorials. If you decide to experiment more by writing code against the
API, be careful of your usage! 

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/openai-billing.png)

### Task: Set up a new Project for the Smorgasbord tutorials.

OpenAI's platform product can be confusing. Here are the concepts to keep in mind:

**Organization** – An "organization" is an account-level construct intended to represent 
companies or teams. By default, you will have a single organization. I recommend naming
this one "Personal."

**Project** – An organization can have multiple "projects," which are constructs that 
represent a bundle of work, like an app. There is always a single project called the 
"default project" that you cannot delete. By creating additional projects, you can
add to them API keys and billing limits.

Add a new project and set a low billing limit (e.g. $10 per month) like this:

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/openai-new-project.gif)


## Hosted Platform: [Google Vertex AI Studio](https://cloud.google.com/generative-ai-studio)

Google Vertex AI is a product line inside Google Cloud, one of the three major public cloud 
providers (alongside Microsoft's Azure and Amazon's Amazon Web Services, AWS). It provides both 
a web-based dashboard and APIs and SDKs (software development kits) that we can use for Google's 
AI models, in particular, Gemini. Google also provides a marketplace where third-party providers 
give access to their AI models and services inside Google Cloud.

![Google Vertex AI Studio](https://gsapp-ms-cdp.s3.amazonaws.com/ai/google-vertex-ai-studio.png)

The advantage of Google Vertex AI is that we can test many different modalities in the same web UI. 
We can easily ask questions of videos alongside summarizing documents, or at least, that's the 
promise.


## Hybrid Platform: [Hugging Face](https://huggingface.co)

Hugging Face is a different kind of AI company from the ones above. You can think of them as a 
kind of "GitHub for AI." Many companies, including major tech companies like Meta, and individual
teams and researchers publish their models here.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/huggingface-models.png)

In addition to a public repository for models, Hugging Face provides multiple ways to test and 
deploy them models, including web-based chat, SDKs, rentable cloud environments (that they call 
"Spaces"), and more.

In particular, these SDKs (accessible with Python and most with JavaScript) are quite useful 
since they provide a single consistent way to use nearly any AI model on their platform.

They have a number of great learning resources and cover a 
[wide range of tasks](https://huggingface.co/tasks).


# ML Frameworks in Code

For the code-savvy, the following frameworks are the state-of-the-art with regards to using machine 
learning to implement AI methods.

## Tensorflow

[Tensorflow](https://tensorflow.org) is a popular collection of machine learning libraries and 
frameworks from Google. It’s intended for anyone from beginners to experts, for multiple platforms 
including web (Tensorflow.js) and mobile, and for scalable production deployments.

We'll look at Tensorflow later. For now, find online tutorials here:
<https://www.tensorflow.org/tutorials>

## PyTorch

PyTorch is a Python library from The Linux Foundation similar to Tensorflow, described as an 
"optimized tensor library for deep learning using GPUs and CPUs."

PyTorch is supported on multiple operating systems and platforms, but is exclusively a Python
library.

We'll also take a short look at PyTorch later, but you can find the official tutorials here: 
<https://pytorch.org/tutorials/>
