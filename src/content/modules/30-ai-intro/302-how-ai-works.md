---
moduleid: 302
title: How does AI work?
authors:
 - William Martin
published: true
---

<style>
img { border: 1px solid lightgray; }
</style>

AI can be easily misunderstood. Products like ChatGPT and DALL•E are magical. They appear
to reason and create like humans do, but much faster than we would be able to as well.

But large language models, for example, don't _reason_ the same way humans do, but they do 
reason. It's thus important to understand how they work to demystify these systems and
their real capabilities.

This section reviews some of AI's various implementations. We won't be able to cover all
of these in depth, so this is more of a cursory survey. It's the tip of a very large iceberg.
But the principles we do cover are selected so they directly apply to discussions 
of AI today, particularly large language models, multi-modal models, vision models, and the like.


## Subfields and Implementations of AI

Here is a another non-exhaustive list of various branches of AI and potential implementations:

- Natural Language Processing (NLP)
- Fuzzy Logic
- Computer Vision (CV)
- Machine Learning (ML)
- Recommendation Engines
- Robotics
- Knowledge representation and reasoning (KRR)
- Expert Systems
- Collective Intelligence
- Swarm Intelligence
- Cognitive Computing
- Evolutionary Computation (e.g. genetic algorithms)

Each of these deserves a deeper dive, but in this course, we'll only focus on the rudiments 
that can be applied to any of them.


## Machine Learning

The most effective category of computational techniques to implement AI has been "machine 
learning," a field interested in getting machines to perform tasks without explicitly 
programming them to do them.

Rather, machine learning (ML) involves creating models of complex behavior by taking many 
examples of such behavior and "training" a model to repeat it. This typically involves troves
of observed or generated data and a sense of correctness, all described mathematically.

After the "training" process, we deploy the model in a process called "inference" to deploy 
the model to predict behaviors from new data. The most basic life of an ML model looks something 
like this:

Data wrangling → Training → Testing → Inference

[Arthur Samuel](https://en.wikipedia.org/wiki/Arthur_Samuel_(computer_scientist)) popularized the term
"machine learning" in 1959.


## More Explanations of ML

Read through the following to learn a bit more about machine learning, if you're new to it:

- Business-y: [Machine learning, explained](https://mitsloan.mit.edu/ideas-made-to-matter/machine-learning-explained) from MIT Sloan
- Technical: [An Introduction to Machine Learning](https://www.digitalocean.com/community/tutorials/an-introduction-to-machine-learning) by Lisa Tagliaferri at Digital Ocean


## Types of Machine Learning

- **Supervised learning** → When training is performed with respect to data that have both features and the expected outputs (or "labels). E.g., a spam filter would be trained on sample emails pre-labeled as spam and not spam.
- **Unsupervised learning** → When training is performed on data that have no known preexisting patterns a priori.
- **Reinforcement learning** → When training is performed on data and the results are adaptively "reinforced" through feedback during the training process.
- **Deep learning** → A form of learning specific to neural networks that have multiple "layers" of so-called "neurons" (described later).


## ML Concepts

A short list of concepts and terms we'll be using:

- Data
- Features, labels
- Classification
- Regression
- Model
- Parameters, weights, biases
- Training
- Learning rate
- Training data
- Test data (aka validation data)
- Overfitting
- Prediction, inference
- Loss (aka error) and loss function


## Data

It all starts with data. Data are measured or generated quantities stripped of their meaning.
A set of numbers doesn't _mean_ anything when treated as mere data.

For example, without context, spreadsheets like this one don't have much meaning on their own.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/data.png)

But when given a context, these data can become meaningful; they become _information_. When I 
tell you these are segments of shipping routes from a dataset derived from the activities of 
worldwide supply chains, that gives us a clue as to why we might be interested in these data, etc.


## Classification and Regression

Classification and regression are forms of predictive modeling, which typically entails developing 
a model based on data of particular types.

Generally, classification is the process of predicting discrete labels for some observed 
phenomenon. If our data are photographs of animals and other features about them (such as common 
name or taxonomy), we may train a model that would distinguish among them and thus apply labels 
to new photos previously unseen by the model.

Regression is a process of predicting continuous quantities among features of data. 
For example, we may attempt to find a relationship between house prices and their floor areas, 
so that given the floor area of a new house, we may predict its potential market price.

- [Difference Between Classification and Regression in Machine Learning](https://machinelearningmastery.com/classification-versus-regression-in-machine-learning/) by Jason Brownlee


## Everything in ML is numbers.

Everything in machine learning is reduced to numbers. Whether we're working with text, images, 
videos, floor plans, spaces, objects, etc., we must describe these things with organized sets 
of numbers. The models we use and train are numbers. Even the outputs are numbers, which we 
subsequently reason about.

As you likely know, images are already stored as grids of numbers. These numbers are values 
of a particular bit size (like 8 bits for JPEG files or 16 bits for TIFF files) representing 
grayscale, RGB (red, green, blue), or CMYK (cyan, magenta, yellow, black) values, grouped into 
pixels when displayed on a screen.

But for machine learning purposes, the pixels of images are stretched into long one-dimensional 
vectors of those same grayscale or RGB values. For example, here's a shiba inu wearing a 
motorcycle helmet (original generated with DALL•E):

<div class="row cols-3 mobile-cols-1">
<img src="https://gsapp-ms-cdp.s3.amazonaws.com/ai/shiba-pixels.png">
<img src="https://gsapp-ms-cdp.s3.amazonaws.com/ai/shiba-pixels-and-numbers.png">
<img src="https://gsapp-ms-cdp.s3.amazonaws.com/ai/shiba-numbers.png">
</div>

And now shown as a vector:

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/shiba-numbers-as-vector.png)

The point of illustrating the above is that an ML model never really "knows" what's in an image 
the way we humans do. ML models are tuned to find patterns amidst these numbers, patterns that 
humans ascribe meaning to before and after the model is trained and used.

In particular, we say data consist of "features" we are interested in reasoning about. If we're 
interested in creating a spam filter to distinguish legitimate emails from spam, the features of 
such a dataset might be its subject, body, sender's email address, sender's IP address, and even 
individual words.

Data sometimes contain "labels" as well. Following our spam filter example, a dataset of emails 
might contain labels that say "spam" or "not spam" for each email. Such labels are required for 
"supervised learning."

When we discuss large language models like GPT, we'll show how text is broken down into a curious 
set of numeric representations called "tokens," which are further used to develop a numeric 
representation of _meaning_ called "embeddings." More on this later.


## Models

In the most general sense, a "model" is an _abstraction_ or _analogue_ for a thing built in 
a _medium_ we can control. They are deliberate and purposeful simplifications for phenomena, 
systems, etc. that enable us to learn, formulate hypotheses, and make decisions.

![The Titanic photo and Titanic Lego model](https://gsapp-ms-cdp.s3.amazonaws.com/ai/titanic-model.png)

Above, a photograph of the Titanic on the left, and a Lego model of the Titanic on the right. 
The medium of the model is Lego, something we can control but having obvious tradeoffs in terms 
of scale, fidelity, etc. But because we can control Lego bricks with our hands, we get enormous 
flexibility in exploring changes and variations. (Perhaps it's not the most cost effective way 
to build a physical scale model of the Titanic, however.)

While this Lego model is intended more for aesthetic purposes (and just sheer fun), other 
media, like polystyrene sheets, may lend themselves better for physical models used to study 
and simulate the Titanic's demise. A model's affordances depend on the medium selected.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/watson-and-crick-model.jpg)

A classic example of a conceptual model showing the molecular structure of DNA with its 
creators, James Watson and Francis Crick, from 1953.
[Photo credit from SciencePhoto.com](https://www.sciencephoto.com/media/222784/view). In 
particular, they revealed the double helical structure of DNA was revealed by combining knowledge 
of the composition of DNA and recent techniques in X-ray crystallography. By developing this 
model, science was able to further advance the field of genetics by a more thorough understanding 
of how DNA works.

Predictive models underly all sophisticated AI today. Weather and climate models attempt to 
predict atmospheric conditions from the next few minutes to decades in the future. Financial 
models attempt to predict market behavior given a potential trade or policy change.

### All models are wrong…

The famous adage, "all models are wrong," reflects the idea that we make purposeful tradeoffs 
when constructing our own models. More completely presented, George Box said, "… all models are 
approximations. Essentially, all models are wrong, but some are useful. However, the approximate 
nature of the model must always be borne in mind…" George Box. (1987).
[Wikipedia](https://en.wikipedia.org/wiki/All_models_are_wrong).

Also in 1978, George Box said, "For such a model there is no need to ask the question "Is the 
model true?". If "truth" is to be the "whole truth" the answer must be "No". The only question 
of interest is "Is the model illuminating and useful?".


## Parameters

In ML, a model manifests as a set of numbers. It's an encoded set of relationships that we can 
evaluate with new data from the world. These numbers are called "parameters," more specifically 
called "weights" and "biases."

The number of parameters loosely correlates with the complexity of the behavior the model can 
either analyze or generate. In the simplest vision models, there can be several hundred parameters 
to optimize. Large language models like Llama 3 or GPT-4 contain billions or even trillions 
of parameters that can take months to train.


## Training

Training is the process of producing an ML model to perform a particular task, by which an initial 
set of random parameters in an ML architecture is evolved into a set of optimized parameters using 
a training algorithm like [gradient descent](https://towardsdatascience.com/gradient-descent-explained-9b953fc0d2c).

And again, it all starts with the relevant data.

The diagram below shows a canonical iterative training process. Most kinds of training from 
vision models to complex LLMs follows a similar pattern, but such models can have more complex 
architectures:

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/ml-training.png)

1. Data are collected and cleaned.
1. The original data set is split into two subsets: a training set and a test set.
1. An initial model of random "parameters" is created.
1. Hyperparameters like "learning rate" are selected.
1. A training loop starts.
1. Inputs from the training set are evaluated with model in its current state. When deployed outside of training, this step is sometimes called "inference," in which we ask the model to make the prediction for which it's designed. I.e. "How would you classify the given email? Spam or not spam?" In the simplest models like linear classification, this is a simple matrix multiplication.
1. The result of evaluating the model is the prediction.
1. In supervised learning, the difference between the prediction and the actual known value (like the probability whether an image shows a dog or the probability of whether an email is spam), is computed. The result is called "error" or "loss."
1. The training loop continues with a step called "backpropagation," during which the parameters of the model are adjusted with gradient descent or similar algorithm with the aim of lowering the loss, thereby increasing the correctness of the model. The goal of this entire process is to "minimize the loss."
1. The process repeats with more entries from the training set.

Once a target loss has been achieved or enough time has passed, the training loop stops. We then 
use the test (or "validation") data set to test the model.

### Risk of "Overfitting"

If the model works near perfectly on the training dataset but not well on the test dataset, then 
we may have a case of "overfitting."

That is, the model was trained too closely to the input data. An example might be our 
animal-classification model can identify shiba inus, but not golden retrievers.

In this case, we'll have to go back to the data, ensure our training and test sets are 
statistically similar and not biased, then repeat the training process, probably changing some 
"hyperparameters," like the learning rate.

### It's a tricky business.

Training machine learning models is a tricky business and can have a healthy dose of art along 
with science. The challenges that come with ML training are:

- Providing a clean dataset of sufficient size and variety
- Picking or designing the right model architecture, algorithm, and hyperparameters
- Having sufficient resources (compute, memory, money, time) for the training
- Having a clear sense of what success looks like
- Avoiding overfitting to the given data

Luckily, some tools and platforms make this much easier. This means there is a lot of room in 
modern AI for all skill levels. The exercises that follow will show some simplistic training.


## Example: Handwriting Recognition and Image Classification

A typical demonstration of machine learning (and sophisticated versions of which we use daily 
on our mobile phones) is giving machines the ability to identify handwritten symbols like 
letters, words, numbers, kanji, etc. when provided as pixellated images. Identifying handwritten 
digits is a common starting place.

The MNIST database contains handwritten digits like the ones below, split into a training set 
with 60,000 handwritten digits and a test set of 10,000 ones, including separate data sets for 
their labels:

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/mnist-digits.png)

For reference purposes, you can [download them from this mirror site on GitHub](https://github.com/cvdfoundation/mnist).
[The original site is here](http://yann.lecun.com/exdb/mnist/).

While we don't follow through with this example in code, learning how this is done at a high 
level demonstrates the fundamental machine learning workflow that even large language models 
(LLMs) like GPT use. (But if you are interested in doing this, I recommend this 
[Google Codelab that uses Tensorflow.js](https://www.tensorflow.org/js/tutorials/training/handwritten_digit_cnn).)

Each image is 28x28 pixels representing a handwritten digit from one of 500 authors that 
contributed to the set. A "classifier" would attempt to take such an image of 784 pixel values 
and predict what digit it might represent. Specifically, it returns ten numbers, one for each 
of the ten possible labels (digits 0 to 9), of how confident it is (as a percentage) that the 
digit matches one of the labels.

For more sophisticated images, we can learn from similar linear classifiers with datasets like 
[the CIFAR-10 dataset](https://www.cs.toronto.edu/~kriz/cifar.html), which contains 60,000 in 
10 classes (airplane, automobile, bird, cat, deer, dog, frog, horse, ship, truck).

However, these linear classifiers have their limitations. Neural networks and convolutional 
neural networks greatly improve the accuracy and efficacy of classification, and even can 
achieve much more.


## More Examples

Take a look at the Google project [AI Explorables](https://pair.withgoogle.com/explorables/) 
for more online demonstrations of machine learning concepts.
