---
	moduleid: 111
	title: Javascript in the Browser - Git and GitHub
	published: True
	slug: git-and-github
	authors:
	 - "Celeste Layne"
---

===========================================

# Javascript in the Browser - Git and GitHub Foundations

### Github, what is it?
At a high level, GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code. To understand exactly what GitHub is, you need to know two connected principles:

* Version control
* Git

### What is Version Control?
Version control is the management of changes to documents, computer programs, websites, and other collections of information.

### What is Git?
Git is a specific open-source version control system created in 2005 by Linus Torvalds, the creator of Linux. Specifically, Git is a distributed version control system, which means that the entire codebase and history is available on every developer’s computer, which allows for easy [branching]() and [merging]().  It can be used with any file type such as such as [Unity projects](https://unityatscale.com/unity-version-control-guide/how-to-setup-unity-project-on-github/) or [WebVR projects](https://aframe.io/), but is most often used for tracking simple codebases. 

GitHub is a Git repository hosting service. It allows developers and engineers to create remote, public-facing repositories on the cloud for free. While Git is a command line tool, GitHub provides a Web-based graphical interface.

For the following reasons, GitHub is the version control manager of choice:

* It manage changes over time.
* It aids sharing and collaboration.
* It allows for experimentation.


* [Getting Started with GitHub Desktop](https://docs.github.com/en/get-started/quickstart/hello-world), GitHub Desktop Documentation 

What is the difference between Git and GitHub? Find an answer [here](https://stackoverflow.com/questions/11816424/understanding-the-basics-of-git-and-github).


## GitHub Desktop vs GitHub in the Terminal


### Create Account

### Create Repository

Log into [github.com]() and create a new repository using the link under the `+` icon in the upper right of the GitHub homepage.

![]()

Name the repository. For example, I named this one didactic-eureka. Thanks for the recommendation, GitHub! Check the box to add a README file. This repository will be the home for all your assignments and exercises for this class. Click the green create repository button.

![]()

Once you’ve initialized the repository, it will take you to the home screen. Click the green Code button. Then select, Open with GitHub Desktop.

![]()

When you press this button, you may see an alert window asking, Open GitHub Desktop? Click the Open GitHub Desktop button in the alert box. This will launch the GitHub Desktop application.

### Create Your First Webpage

1. Open the repository in your code editor.
2. Make a new HTML file named index.html in Visual Studio Code (or your code editor of choice).
3. Copy the basic HTML structure from here and paste it into your index.html file (or, use the following VS Code shortcut).
4. Modify the code with the words Hello World and save the file to your local GitHub repository.

### Push Local Code to Remote Repository

1. Confirm that you see changes made to your file in the Changes Tab on the GitHub Desktop app.
2. Click the blue Commit to main button, then press Push to Origin.
3. Now, check to make sure that your changes were pushed to the main github.com repository. Reload the page if you don’t yet see changes.

### Publish Your Website

1. In your github.com repository, find the Settings tab.
2. Scroll to the GitHub Pages section. Under the Source heading, click the dropdown menu and select the main branch as your publishing source. Keep the /(root) folder for your publishing source.
3. Click Save.
4. Now, drumroll please! In the same GitHub Pages section, you should see a green success bar appear that says: “Your site is published at https://yourusername.github.io/didactic-eureka”
5. Click on the link. Voila!

![]()

### Glossary of Git Terminology:

* Repository: A collection of related commits that form a directed acyclic graph.
* Commit: A snapshot of the working tree at a given time (along with a message detailing what changed).
* The index (stage): A staging area where we list changes we want to commit.
* Branch: A set of commits that form a linear progression of changes.
* Master: The default name for the "main" development branch.
* Tag: An optional label on a commit.
* HEAD: The commit that is currently checked out.
* Working area: The directory and subdirectories containing the files we're currently editing.
