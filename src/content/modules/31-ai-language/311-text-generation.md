---
moduleid: 311
title: Text Generation with LLMs
authors:
 - William Martin
published: true
---

<style>
img { border: 1px solid lightgray; }
</style>

## What is text generation?

Text generation, or text completion, is the process of generating human-readable text from an
initial text, called a "prompt," by _predicting_ what the next most likely piece of the text 
should be.

Text completion as a task was popularized by the autocomplete feature on our smartphones,
sometimes called "predictive text."


## Predictive Text on Smartphones

These predictive text capabilities were originally implemented as variants of a "Markov Chain," 
a kind of data structure that captures the probabilities of particular words following other
words. 

They can be used analytically, to reveal patterns in a given text, and then generatively, 
once a Markov chain has been created. [See an illustrative example here.](http://blog.wagjo.com/markov.html)

As you might guess, the algorithms used for text completion on iOS and Android are more
sophisticated, and they update with interactions from the user, etc. But the concept is similar.

The text model is trained on existing texts that produce a kind of intermediate representation, 
then that representation can be used to generate text, with that text in some way reflecting the 
content of the original.

If we were to train a model on Shakespeare, we would get text that may in some ways read like
Shakespeare's word choice and style.

The problem with implementations like Markov chains is they typically don't produce long form
text that _makes sense._ Beyond these simplistic algorithms, an entire subfield of machine 
learning has focused on text generation; models like [BERT](https://en.wikipedia.org/wiki/BERT_(language_model)) 
and others created before ChatGPT's release were major stepping stones and served to refine
new techniques that led to today's LLMs.


## What is a large language model (LLM)?

A large language model is a generative, text-completion model with an extraordinary number 
of parameters, notably in the billions. The smallest significant LLMs today have upwards of 
3 billion parameters, and the largest are rumored to have _trillions_.

Today, the most successful LLMs use the so-called "transformer architecture," which is a 
particular composition of neural networks that combine various new techniques, namely:

- tokenization,
- encoder-decoder architecture,
- embeddings, and
- self-attention mechanisms.

Hence the name GPT, or Generative Pre-trained _Transformer_, in the case of OpenAI's models.

Pure text-generation LLMs are prediction models. They _predict_ the next most likely word from 
a sequence of words, or rather, the next token from a series of tokens.

GPT and other LLMs like Meta's Llama perform completions so well that we ascribe to them human 
qualities like creativity and novelty. Some even believe they pass the classic "Turing Test," 
which asserts that an intelligent system, via a constrained text-based interface, can fool 
humans into believing the system is, in fact, also human.

## How do LLMs work?

There are a number of great explanations online of how LLMs work, so I won't try to compete
with them here. I recommend reviewing the following:

- [Generative AI Exists Because of the Transformer](https://ig.ft.com/generative-ai/) – An interactive visual explanation by the visualization team at the Financial Times.
- [The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/) – A more detailed explanation and video by Jay Alammar.
- [LLM Visualization](https://bbycroft.net/llm)

### Tokenization

Tokenization is the process of representing text as a series of numeric "tokens," which map to
individual words or pieces of words in a given language.

Play with [OpenAI's tokenizer tool](https://platform.openai.com/tokenizer) to get a sense for how 
text is broken into "tokens," the atomic units of LLM-based text generation. You can find it here:
<https://platform.openai.com/tokenizer>

**A tokenizer example.** Note how "GPT's" is broken into three tokens. The example
input text in the tokenizer demo also shows words that are similarly divided into multiple tokens.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/openai-tokenizer-tokens.png)

**The same tokenization but showing the actual numeric token IDs.** Remember how we noted that 
everything in machine learning reduces to numbers? Tokenization is not only about segments of 
words, but encoding such segments into a numeric representation that a transformer can be trained on.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/openai-tokenizer-tokenids.png)

### Embeddings

While tokens represent words and portions of words, embeddings start mapping sequences of tokens 
to some notion of _meaning_. They're a first step to help LLMs "understand" what humans are saying.

We can also work with embeddings directly and compute them (each a linear vector) from a word, 
phrase, sentence, or even whole paragraphs. Going beyond lexicographic search based on keywords 
(often with some help with a thesaurus), embeddings can enable us to associate names, places, 
concepts, and descriptions far more flexibly.

Some readings on embeddings and related concepts from computational linguistics:

- [Getting Started With Embeddings](https://huggingface.co/blog/getting-started-with-embeddings) by Omar Espejel at Hugging Face
- [Introducing text and code embeddings](https://openai.com/index/introducing-text-and-code-embeddings/) by OpenAI
- [King – Man + Woman = Queen: The Marvelous Mathematics of Computational Linguistics](https://www.technologyreview.com/2015/09/17/166211/king-man-woman-queen-the-marvelous-mathematics-of-computational-linguistics/)
- [Embeddings: What they are and why they matter](https://simonwillison.net/2023/Oct/23/embeddings/) by Simon Willison
- [OpenAI Docs on Embeddings](https://platform.openai.com/docs/guides/embeddings)

### Self-Attention

Attention mechanisms are the key to the semantic understanding that LLMs demonstrate. After
embeddings, "attention" helps to emphasize relationships between tokens, helping 

Read the original paper here: [Attention Is All You Need](https://arxiv.org/abs/1706.03762)

## More LLM Concepts

### Temperature

"Temperature" describes a value that helps randomize the output of the next token a bit. This
loosely correlates to a human notion of "creativity."

While LLMs indeed function to predict the next token of a given sequence, the way they do so is 
by generating a _list of potential tokens_ and their associated confidence levels.

However, the model must pick just one token to add to the sequence. Should it always pick the 
most likely one, i.e. that with the highest confidence?

Temperature randomizes this selection. A temperature of 0 means "always pick the top result." 
This tends to produce some problems, like repetitive tokens. The sweet spot for temperature is
typically around 0.8.

Here's a short guide on temperature and some related concepts. You'll be able to adjust these
in some of the web playgrounds for LLMs and in the OpenAI API.

- [Large Language Model Settings: Temperature, Top P and Max Tokens](https://medium.com/@albert_88839/large-language-model-settings-temperature-top-p-and-max-tokens-1a0b54dcb25e)

### Context Window

LLMs can only process a limited number of tokens, and models can vary widely on
how many they can use.

Larger context windows enable us to include longer documents and use them as context for our
prompts.

Chat apps like ChatGPT are combining all the messages and the system context (below) with every
new prompt. So the context window is consumed not only by the users' prompts, but by all the
completions that come from the LLM itself.

### System Context / Custom Instructions

LLM services support a special kind of context that carries more weight than other prompts.
The terminology for this is evolving, but the two terms you'll encounter are "system context"
or "custom instructions."

By writing a prompt for this, you can control the behavior of an LLM more concretely.

### Foundation Model

The term "foundation model" refers to any model, including LLMs, produced for others to 
customize. Such models trained generally on a corpus of language data can be customized
for more specific uses like chats or following instructions.

### Fine-Tuning

If you use LLMs enough, you may encounter the term "fine-tuning." This refers to a method of
customizing an LLM by taking an existing model's weights and adjusting them via a secondary
training process for a particular subject matter.

Fine-tuning can be a delicate, costly process.

### Closed / Open Source aka Public Weights

The most popular model, GPT, by OpenAI, is what we call "closed," meaning the weights 
(also, "parameters") are proprietary and not shared with the general public in any way.
You can use the model via OpenAI's services, ChatGPT and the OpenAI API, but you cannot
run the model on your own machine.

So-called "open source" models have weights available for download. It's a bit of a
misnomer, because the weights themselves aren't really source code, and they aren't
really open to contribution, because we can't really tell what the numbers really do
by looking at them. I prefer the term "public weights."


## Challenges, Concerns, and Risks

**Hallucinations** – LLMs are notorious for for inventing information. They don't yet have
inherent capabilities to fact-check themselves. _Always be careful when asking LLMs to generate
information for you, particularly information intended for its accuracy._

**Ethical Concerns** – LLMs are trained on vast amounts of data, including public and copyrighted
materials. How do we protect the rights of creatives and authors to copy their own work? Is such
training ethical without attaining consent from these individuals?

**Math and counting** – LLMs are notoriously bad at solving math problems or counting. While 
models like GPT are getting better at these tasks, remember, LLMs _are fundamentally 
text-prediction algorithms._ They don't _reason_ like humans do, by forming abstractions, 
visualizing, forming mental models, checking against experience, etc. Don't fall into the trap
of treating an AI chat like a human conversation.

**Bias** – All models are biased in some way; they need to be to serve as simplifications, but it's
nearly always the case that the data provided have some kind of hidden bias. For LLMs, one stark
criticism has been they reflect the bias of the Western Internet. More on this later.


## Major LLMs for Text Generation

### How models are notated

When you start looking at the technical designations for LLMs, here are the patterns to look for:

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/model-notations.png)

Qualifiers point to use cases the model has been tuned for:

- Instruct: Typically means tuned for following instructions.
- Chat: Typically means tuned for chatbot uses.

### Closed Models

- [GPT](https://openai.com/index/gpt-4/) from [OpenAI](https://openai.com/)
- Claude from [Anthropic](https://anthropic.com)
- [Gemini](https://ai.google/gemini-ecosystem) from Google

### Open Weights

- LLaMa from Meta AI
  - Meta's info page: <https://llama.meta.com/>
  - [Hugging Face model card for LLaMa 3 70B](https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct)
- Mistral and Mixtral from [Mistral.AI](https://mistral.ai/)
  - [Hugging Face model card for Mistral 7B](https://huggingface.co/mistralai/Mistral-7B-v0.3)
