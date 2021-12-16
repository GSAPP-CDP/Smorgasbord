---
moduleid: 61
title: Getting started with Python
published: True
slug: getting-started-with-Python
---

# Getting started with Python

## The Many Options for Python Installation?

This sequence covers the following solutions for installing and interacting with Python:
- [Installing Python on a Mac and setting up Jupyter](#installing-python-on-a-mac)
- [Google Colab (Jupyter Alternative)](#google-colab)
- [The Jupyter Interface](#the-jupyter-interface)
- [The Command Line Interface and IDEs](#the-command-line-interface-and-ides)

## Installing Python on a Mac

If you are installing Python on a Mac, congratulations! The Mac operating system is based off of [Unix](https://en.wikipedia.org/wiki/Unix), making it the preferred platform for many technology companies and programmers, and means it is very convenient for doing programming tasks, like installing Python.

![missing-image](images/homebrew.png#img-full)

The first step is to install the [Homebrew](https://brew.sh/#install) package manager. Package managers are software tools that automate the process of installing, upgrading, and removing applications on a computer. Homebrew is the preferred Package Manager for Mac, making it easy to install and manage Python.

Open up a Terminal window, then paste and run the below line of code:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once Homebrew has finished installing, you can now install programs with the command `brew install (insert name of software)`. Paste the following code into the terminal window to install Python:

```
brew insall python
```

You now should have Python installed on your machine. To check, go to your terminal window and type `python`. You should see something like the below screenshot. This is the Python interpreter, and it is the simplest interface for interacting with Python code.

![missing-image](images/python-terminal.png#img-full)

Type `CTRL` + `Z` to exit

Python comes with its own built-in Package manager called, `pip`, that is used to install external libraries. As there are so many Python users in the world, there is an extremely rich ecosystem of libraries that do everything from make it easy to download Census data, or allow you to build a machine learning model with one line of code. For our final step we will use pip to install [Jupyter](https://en.wikipedia.org/wiki/Project_Jupyter).

Jupyter is an open-source project that allows you to write code interactively with Python. Rather than creating scripts (or files) to run individual pieces of code, Jupyter (formerly referred to as [Ipython](https://ipython.readthedocs.io/en/stable/overview.html)) allows developers to create programs in an exploratory environment and test ideas quickly with rich text output. To begin using Jupyter on your machine, paste the below code in your terminal window to install Jupyter:

```
pip install jupyterlab
```

You should see a tab open up in your default internet browser that looks similar to the below screenshot:

![missing-image](images/jupyter.png#img-full)

-----

<br>
<br>

## Google Colab

Google Colaboratory, or "Colab" for short, allows you to write and execute Python code interactively in a browser, similar to running Jupyter. The advantage of using Google Colab is that it requires zero installation, gives free compute power, and is easily sharable. Think of it as the Google Docs of Python coding. Just head to the [Colab](https://colab.research.google.com/) website and start a new notebook to begin coding in Python.

![missing-image](images/google-colab.png#img-full)

-----

<br>
<br>

## The Jupyter Interface

The Jupyter window is composed of three main sections:
- Left side bar: contains commonly-used tabs, such as a file browser, a list of running kernels and terminals, the command palette, and a list of tabs in the main work area.
- Menu bar:
  - File: actions related to files and directories
  - Edit: actions related to editing documents and other activities
  - View: actions that alter the appearance of JupyterLab
  - Run: actions for running code in different activities such as notebooks and code consoles
  - Kernel: actions for managing kernels, which are separate processes for running code
  - Tabs: a list of the open documents and activities in the dock panel
  - Settings: common settings and an advanced settings editor
  - Help: a list of JupyterLab and kernel help links
- Work area: this is the main area to work on documents (notebooks, text files, etc.) and do other activities (terminals, code consoles, etc.)

![missing-image](images/jupyter-interface.png#img-full)

When you launch Jupyter lab for the first time you should see something like the Launcher menu below. This menu allows you to create new Python notebooks, launch a terminal window, or create markdown files. You can also click on the File menu in the top left of the window and hover over `new` to create files from there.

![missing-image](images/jupyter-launcher.png#img-full)

The main work horse of a notebook are its Cells. Cells are where you write code, markdown, and text. As Jupyter is an interactive environment, you can see the output from a cell immediately. For example, lets run the below code in a Notebook cell:

```
print('Hello Jupyter!')
```

To run the cell – often called executing – you can click the run button in the notebook menu just below the tab. You can also use the keyboard shortcut `SHIFT` + `ENTER`. You should now see the text from the above operation displayed below the cell.

-----

<br>
<br>

## The command line interface and IDEs

Although we'll be using Jupyter throughout the Python sequences, there are many more ways to interact with Python code. In this section we will briefly touch on two of the other popular methods, namely the command-line-interface (CLI) and IDEs. The [command-line](https://en.wikipedia.org/wiki/Command-line_interface) is a way to submit commands or processes to a computer via an interactive text interface. Similar to Jupyter but way more powerful. CLIs differ between operating systems (Mac vs Windows vs Linux) and have slight variation in syntax for various commands. Interacting with Python however, is the same across systems regarldess whether you are on a Mac or Windows machine. The advantages of using the CLI to run Python is that it requires fewer resources, is powerful, highly customisable / expert-friendly, and easy to automate repetitive tasks. But as it requires advanced knowledge of Python and programming in general, we will not dive into the ins and outs of it in this sequence.

Open up a terminal or command line window and type `python`. Once you have Python open run the following commands to see what output you get:

```
print('Hello from the CLI!')
```

and now enter

```
20*2
```

Similar to running a cell in Jupyter, the output of the above two operations is shown immediately. You just demonstarted how to use the `print` function to display a peice of text and use the `*` character to multiply two numbers. More on text and math functions in later sequences.

![missing-image](images/cli.png#img-full)

Integrated development environments (IDE) are applications that provides environments for coders to develop in. There are many types of IDEs, some that are interactive, and others that are just a smarter text editor. One of the most popular IDEs is [Atom](https://atom.io/), it is free to use, opensource, with a rich community of users that have built extensive add-ons to make coding in it easy across languages. Unlike Jupyter or the CLI however, Atom is not interactive, but is very useful for writing large bodies of code quickly.



## Additional Resources

-----

<br>
<br>

- Introduction to [Interactive Computing in Python](https://ipython.readthedocs.io/en/stable/interactive/index.html)
- [Think Python](https://greenteapress.com/thinkpython/html/index.html)
- Python [Compared to Other Languages](https://www.python.org/doc/essays/comparisons/)
- [How to think like a computer scientist](http://openbookproject.net/thinkcs/python/english3e/)
