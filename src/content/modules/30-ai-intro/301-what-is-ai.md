---
moduleid: 301
title: What is artificial intelligence?
authors:
 - William Martin
published: true
---

<style>
img { border: 1px solid lightgray; }
</style>

It's probably no surprise that "artificial intelligence" (AI) could take many different 
meanings. The marketing hype around "AI" is quite palpable, and it's important to know 
what "AI" might mean depending on the context.

## Oxford English Dictionary

Well, let's first just turn straight to the dictionary. The OED contains the following 
entry for "artificial intelligence":

> “The capacity of computers or other machines to exhibit or simulate intelligent behaviour; 
> the field of study concerned with this. In later use also: software used to perform tasks 
> or produce output previously thought to require human intelligence, esp. by using machine 
> learning to extrapolate from large collections of data.”

[Referenced](https://www.oed.com/dictionary/artificial-intelligence_n?tab=meaning_and_use#38531565) 
on 2024 Jan 06.

## Artificial vs Natural

A distinction often made with _artificial_ intelligence is that from _natural_ intelligence – 
that is, intelligence exhibited by animals and other earthly creatures.

## Defining "Artificial" and "Intelligence"

What if we were to break down "artificial" and "intelligence" independently?

- **artifice** → "clever or cunning devices or expedients, especially as used to trick or deceive others" (New Oxford American Dictionary 2023)
- **intellect** → "the faculty of reasoning and understanding objectively, especially with regard to abstract or academic matters" (New Oxford American Dictionary 2023)

These seem to imply that artificial intelligence is a kind of deception. This hints at notions 
like "The Imitation Game" (aka "The Turing Test," discussed later), often cited in popular 
culture as a test for AI. But is just being fooled by something enough to warrant the name?

## As Defined in _AI: A Modern Approach._

Stuart J. Russell, Peter Norvig, et al., have arguably written _the book_ on artificial 
intelligence: _Artificial Intelligence: A Modern Approach._

The first chapter provides a framework to unpack this question of what AI is in which the authors 
highlight two popular dimensions of thought. One covers a sense of intelligence along a spectrum 
from mimicking human _performance_ to that of a more objective sense of _rationality._ The other 
dimension considers the internal _thought processes and reasoning_ involved versus observed 
external _behavior_. By combining these four combinations, they present the following approaches:

1. Acting humanly: The Turing test approach
1. Thinking humanly: The cognitive modeling approach
1. Thinking rationally: The "laws of thought" approach
1. Acting rationally: The rational agent approach

I highly recommend the first two chapters. [The website is here.](https://aima.cs.berkeley.edu/) 
The book's code is [available here on GitHub](https://github.com/aimacode). The detailed section 
outline of the 4th edition is [here](https://aima.cs.berkeley.edu/contents.html), and the first 
two chapters and sections cover the following:

- Chapter 1   Introduction ... 1
  - 1.1   What Is AI? ... 1
  - 1.2   The Foundations of Artificial Intelligence ... 5
  - 1.3   The History of Artificial Intelligence ... 17
  - 1.4   The State of the Art ... 27
  - 1.5   Risks and Benefits of AI ... 31
- Chapter 2   Intelligent Agents ... 36
  - 2.1   Agents and Environments ... 36
  - 2.2   Good Behavior: The Concept of Rationality ... 39
  - 2.3   The Nature of Environments ... 42
  - 2.4   The Structure of Agents ... 47

Particularly interesting for we spatial designers are the notions of "environment" and "agent." 
We'll talk more later about the multiple uses of the word "agent," (which is typically used as 
an abstraction for things like robots), but as spatial designers, we're more interested in the 
design of environments, which AI _tends_ to treat more as something to assess and respond to, 
rather than craft and control. This points to an interesting opportunity for computational design.

## Council on Artificial Intelligence, EU AI Act

As noted later in the Ethics and Governance Module, a number of legislative acts are in the 
works to establish governance standards around AI and thus protections for individuals and 
companies. Most notable is the [European Union's Artificial Intelligence Act](https://artificialintelligenceact.eu/), 
which has undergone a 5-year process of development and ratification in the EU.

So the section may seem bureaucratic for a creative and critical program, but it's a place 
at which a number of definitions have been compiled, definitions that affected the direction 
of the world's thinking around constraining AI.

So as part of the process, numerous interests groups were asked to contribute their points 
of view. One such contribution is a document entitled _AI Watch: Defining Artificial Intelligence. 
Towards an operational definition and taxonomy of artificial intelligence._, published by 
the Joint Research Centre (JRC), the European Commission’s science and knowledge service. 
This document compiled definitions of and terminology related to AI.
[You can download it here.](https://ai-watch.ec.europa.eu/publications/ai-watch-defining-artificial-intelligence-20_en)
(The link is towards the bottom of the page.)

Let's look at a few excerpts from this publication:

### AI Domains as summarized by AI Watch

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/ai-watch-domains-pg-11.png)

It's this list of "core" domains that's interesting at this point, further detailed in page 16:

- reasoning
  - knowledge representation
  - automated reasoning
  - common sense reasoning
- planning
  - planning and scheduling
  - searching
  - optimisation
- learning
  - machine learning
- communication
  - natural language processing
- perception
  - computer vision
  - audio processing

Table 3, starting on page 18, contains the list of definitions, like this.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/ai-watch-domains-table-3.png)

I recommend perusing these definitions to get a sense of both the ambiguity and 
consistency these definitions carry.


### "AI System" Definition from OECD

One definition of an "AI System" deserves a bit of attention. It's found on page 7 of the 
referenced document, _OECD, Recommendation of the Council on Artificial Intelligence, 
OECD/LEGAL/0449_ by the [Organization for Economic Co-operation and Development](https://www.oecd.org/).

> "AI System: An AI system is a machine-based system that can, for a given set of 
> human-defined objectives, make predictions, recommendations, or decisions influencing 
> real or virtual environments. AI systems are designed to operate with varying levels of autonomy."

This highlights a number of key concepts to consider when working with AI and evaluating 
the claims of various companies:

- **human-defined objectives** – It's interesting that objectives are human-defined, but does this mean that AI waits for our commands or tries to behave like a human?
- **predictions** – Thus are weather apps also AI, in a sense? Perhaps, but the general idea of predicting the future, what might happen, described statistically, is in the purview of AI. High frequency trading algorithms deployed by hedge funds and financial companies could be a form of AI. Computer vision algorithms, like facial recognition, are attempting to predict who someone might be.
- **recommendations** – Are product recommendations given by Netflix and Amazon the result of AI? 
- **decisions** – Is this inherent to AI or is this more a matter of how we deploy an AI system? Does a "decision" matter if we don't allow the AI to act upon that decision itself?
- **real or virtual environments** - This puts AI in the realm of spatial design and virtual reality, as well as reality.
- **autonomy** – How much can (and should) these systems operate on their own? AI is often considered to be a technology designed to act independently of direct human control.

These are here just to get you thinking about what "artificial intelligence" might mean. 
Is there a definition that resonates with you?


## AI Tasks and Models

More practically, let's take a preview at one of the platforms we'll be discussing in the next 
module. [Hugging Face](https://huggingface.co/) is an AI company based out of Brooklyn, NYC, 
that hosts a platform that's essentially GitHub for AI. Anyone can register and host models, 
use their infrastructure and SDKs, etc. More on this later, but for now, their 
["Tasks" page](https://huggingface.co/tasks) illustrates the kinds of functionality modern AI
is capable of.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/huggingface-tasks.png)

Note how a number of the tasks above are about translating one medium to another, like text-to-image 
(for generative imagery like that performed by Stable Diffusion and DALL•E) or image-to-text 
(or captioning performed by vision models).

Note that "tasks" are distinct from but related to "models." A task is a higher level description 
of the capability an AI system may provide, like detecting objects in raster images. However, 
a "model" is a specific implementation of a task, given a specific architecture (like a neural 
network or support vector machine). You may have heard of the AI model "GPT" of the famed ChatGPT,
but there are [many versions of GPT available](https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4). 
One primary _task_ that the product ChatGPT offers is text generation (aka text completion), 
and the model underlying model may be GPT-4o, GPT-3.5, GPT-4-Turbo, etc. 
More on AI and machine learning models later.


## Generative vs Non-Generative AI

Much of the hype today is due to a category of AI tasks grouped under the heading "generative 
artificial intelligence" or "generative AI." The name hints at the purpose, to "generate" content, 
particularly as a human might, like text to serve as essays or blog posts, or images given short 
text descriptions called "prompts."

In contrast to generative AI methods, there are non-generative methods as well, or what we might 
call analytical methods. This kind of AI typically is used for perceptual purposes, like identifying 
people from photographs of their faces, classifying photographs of real-world objects, or 
identifying objects and people in realtime videos. Other textual analysis include techniques like 
"sentiment analysis," which attempts to predict the tone and emotion in a given text, useful for 
companies wanting to understand how well their brand is perceived in public online forums.

This course reviews tasks and methods in both categories.


## Popular Definitions

A bit of opinion… the popular sense of artificial intelligence often comes from science fiction 
stories. Images of autonomous robots armed with weaponry or acting as humans, but stronger and 
perhaps less empathetic. One could even say that we invoke "AI" as a term because we want to invoke 
associations with science fiction lore, to claim a machine is intelligent even though its 
capabilities may be more akin to a complex artifice, like the automata of the 18th Century.

In particular, the movie "Her" is at the forefront of popular conversation, particularly since 
OpenAI's chatbots are approaching this kind of human-like interaction. The film is ironic, however, 
in that it ultimately shows how human satisfaction and fulfillment in life and relationships cannot 
be fulfilled by the best technology. Time, as they say, will tell.

This falls under a concept of "artificial general intelligence" (AGI), also running rampant, which 
refers to an AI-powered system that truly "thinks" on its own or behaves like a kind of superpower. 
It's popular for futurists or pop-science figures to speculate on this kind of technology, with or 
without understanding how AI and machine learning actually work. Maybe we will reach this, but why 
would we want to?

Conversations of AI often focus on what _could_ be done, rather than what _should_ be done. 
Hopefully this course will dispel some of the hype and reinforce how AI as a medium should be 
beneficial for designing better experiences and environments for humans, if used in responsible ways.
