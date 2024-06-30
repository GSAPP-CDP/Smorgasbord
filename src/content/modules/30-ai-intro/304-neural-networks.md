---
moduleid: 304
title: Neural Networks
authors:
 - William Martin
published: true
---

<style>
img { border: 1px solid lightgray; }
</style>

## Neural Networks

One of the most significant breakthroughs in ML came with the invention of "neural networks" 
and their various types. Not only that, neural networks form the basis for almost every modern 
AI model, including large language models based on the transformer architecture.

- Neural networks (NNs)
- Deep neural networks
- Convolutional neural networks (CNNs)
- Recombinant neural networks (RNNs)

Loosely inspired by the structure of animal brains, neural networks are graph-like compute 
architectures comprised of "nodes," which are modeled after an simplistic abstraction of 
how natural neurons behave. The essential part of the neuron model is the behavior that 
"triggers" (or "fires") the neuron, which sends a signal to the downstream neurons to which 
it connects, upon certain threshold conditions.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/neuron.png)

Like in brains, in artificial neural networks, the outputs of one neuron (node) connect to the 
inputs of another. Each node is essentially a linear equation, containing a set of parameters 
alongside an "activation function" that determines whether the neuron should "fire" or not 
(which mathematically means attenuating or lessening the output value of a given node).

Most important, these activation functions enable neural networks to be structured in "layers," 
a fact that gives them extraordinary abilities to embody complexity.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/neural-network-labeled.png)

Diagrams like these show the canonical structure of neural networks and their composite layers. 
Each circle is a "node," which typically represents a linear equation, with a set of its own
"parameters" that act on its inputs. The arrows represent values provided from one node to another.

Nodes are arranged in "layers," that represent the basic structural element of a neural network.

There is always an input and an output layer, and so-called "hidden layers" can be added 
between them to introduce additional ability to absorb complexity. There is something of an 
art to designing the structure of a NN, as the combination of layers and neurons is nearly 
infinite (bounded by practical reasons). Other aspects as well, like which activation function 
to use, affect the function and performance of the NN.

The **input layer** represents the individual inputs to the network, which could be individual 
pixels from an image, letters or words from text, or even more sophisticated data structures, 
depending on the networks's purpose. Each node then accepts multiple outputs from the previous 
layer, and applies its variable "parameters" to each. Then the activation function kicks in and 
attenuates the output value of the neuron, effectively introducing a "nonlinearity" into the 
system. Without this nonlinearity, even a deep neural network could be reduced into a much simpler 
linear equation, and thus be limited in capability. This culminates in the **output layer**
that contains the predictive results we're looking for.

So-called "deep neural networks" are those that have many hidden layers, and "deep learning" 
refers to the techniques used to design and train them.

For a deep-dive on neural networks, see the online textbook 
[Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/) by Michael Nielsen. 
It's fairly technical and mathematical, but it does have some great, approachable explanations of 
how NNs work and the reasoning and history behind them. I recommend at least reading the first 
chapter to get a sense of these important architectures.


## Exercise: Neural Network Playground

The [Neural Network Playground](http://playground.tensorflow.org/) from the Tensorflow project 
is an in-browser web application that enables you to train a simple neural network. You can find 
it here <http://playground.tensorflow.org/>.

While this doesn't really show off the full potential of neural networks, especially in their uses
as generative models, it will give us a grasp on how they are trained, how they work, and how 
their structures relate to their ability to adapt to complexity.

![The Neural Network Playground Interface](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-01.png)

Make sure to read their description of what neural networks are.

### The Goal

The playground sets up two different problems that we've mentioned before, classification and
regression. You can see the selection in the upper-right. We'll just be performing exercises with
classification, but I'd encourage you to learn more about the regression problems as well and give
them a try.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-02.png)

For the classification problems, we're attempting to build a model that given two values of a new
data point, here shown as x1 (the horizontal axis) and x2 (the vertical axis), whether it should 
be classified as blue (positive) or orange (negative).

The UI visualizes the model's prediction as a gradient behind the training and test data points. 
During training, the more that gradient aligns with the values (colors) of the data points, the 
less the loss. Remember that _training_ a model means to _minimize the loss_ (aka "error") as 
much as possible.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-03-gradient.png)

Above left, you see the original visualized result from a random set of parameters. On the above 
right, a trained model shows the model's prediction as a gradient. See how the orange dots appear 
in orange regions, and the same for blue?

This is our overall goal in these tasks, **to train a model such that the colored regions in 
the gradient match the dots as closely as possible,** meaning the model does well to predict the 
color of new dots given the selected features. Specifically, this means:

1. have a very small quantitative "loss" noted above the graph (for us, 0.001), _and_
1. achieve the above with as few "epoch" steps as possible.

In the upcoming tasks, you'll design and train a neural network to fit different datasets.

### A Tour of the Interface

There are many features in this UI, most of which we won't be using, but that have meaning to
the training and usage of neural networks.

#### Toolbar

The toolbar at the top mixes a few concepts. Leftmost are the controls for the training (the
large run/pause button) and the reset button for the UI (the circular arrow).

Just to the right of the controls lie the state of the training, which is just the **Epoch**, or 
how many training iterations have passed. This figure becomes important with larger, more complex 
models, as generally, the fewer steps needed to train a model to our desired level of accuracy 
(loss), the better. Very large models, like today's large language models, can take weeks or 
even months to train.

The next four inputs are the hyperparameters of the model, including the learning rate, activation
function, regularization mechanism, and regularization rate. We won't be looking at these, so just
leave them at their defaults.

And the last we've already discussed, the type of problem we want to solve. Leave this as
"classification."

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-04-toolbar.png)

#### Data

The left column, **Data**, naturally provides the ability to adjust the dataset. These data are 
generated randomly, so to adjust this, we can first pick the overall shape of the data at the top 
(Circle, Exclusive Or, Gaussian, and Spiral) and the Noise level in the middle. These are specific
to this particular playground.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-05-data.png)

More generic and applicable to every training scenario, however, are the "Ratio of training 
to test data" and "Batch size" selectors.

As you might surmise, the model is trained on the training data, then tested on the test data. 
And as we noted before, the purpose of this division is to ensure we don't "overfit" on the 
training data, thus producing a model only useful for scenarios specifically expressed by the 
training data, thereby hindering its ability to predict on new data.

Luckily for us, we can leave both the ratio and the batch size selectors in their default values,
and the management of the training and test data are handled automatically.

#### Features

The Features section enables us to provide additional aspects of the data itself that go beyond
just the x1 and x2 values noted before. You can think of this section as "What if the data were
to contain more features like `sin(x1)`?"

In other words, this is like adding columns to our dataset, values that derive from x1 and x2.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-06-features.png)

As you work with the tasks below, you can can select these features to see whether they improve
the training and/or the model.

#### Hidden Layers

This section contains the crux of the innovation of the neural network. Their layering, enabled 
by an "activation function," gives neural networks the ability to embody complexity in ways that
simpler linear models cannot.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-07-layers.png)

As you explore, you can try adding more layers or adding more nodes to each layer to see how it
affects the model.

#### Output

We've seen a bit of the output before. The point to emphasize, however, is the "loss" section at
the top.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-08-output.png)


### Task A: Circle

In the playground's default state, the "Circle" dataset is preselected in the upper-left of the
dataset selector, under "Data."

Your task is to train the model thusly:

1. The output gradient matches the circular pattern of dots.
1. The training and testing loss values should be 0.001.
1. The training process uses as few "Epoch" steps as possible.

#### Get a baseline

**To start, click on the Run/Pause button** to train the model and get a baseline sense of 
performance.

Then **click the Reset** (circular arrow) button.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-09-training.gif)

Here, it took about 687 iterations to achieve a 0.001 loss, so let's try to do better.

Notice how the nodes themselves are also rendered as little gradients. This shows how each node
contributes to the overall functionality of the neural network. Each node is itself a rich model
that performs an emergent role within the network.

#### Can you do better? Adjust the NN architecture.

Adjust the neural network to see if you can train the model to the same training and test loss 
(0.001) but with far fewer **Epoch** steps. You're welcome to adjust any of the parameters in 
the UI, but I'd recommend starting with:

- Features
- Hidden Layers
- Neurons in each layer

→ **Screenshot your neural network architecture.**

### Task B: Spiral

For this task, reset the UI and then pick the "Spiral" dataset shape.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-10-spiral.png)

#### Get a baseline

Then train the model with the default settings to get a sense of the baseline training. This one
will likely be far more difficult, actually not achieving a loss anywhere near where we'd like.

![](https://gsapp-ms-cdp.s3.amazonaws.com/ai/nn-playground-11-spiral-base.png)

This example took nearly 2000 iterations, but only achieved a test loss of 0.441, meaning this 
particular model would likely be incorrect 44% of the time, if we were to use it in a real-world
application.

#### Can you do better? Adjust the NN architecture.

Again, start adjusting the NN parameters, the features and layering, to see whether you can:

1. achieve a loss of 0.001, _and_
1. do so with as few Epoch iterations as possible.

→ **Screenshot the best neural network architectures you created.**

