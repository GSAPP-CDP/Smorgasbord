---
moduleid: 250
title: Establishing and Achieving Building Targets
published: True
slug: establishing-and-achieving-building-targets
authors:
 - "Joe Brennan"
---

# Establishing and Achieving Building Targets

In class we spent time discussing the three major types of constraints that define a project - to recap, they are:
- Zoning - typically defined by jurisdiction and are meant to regulate bulk and use
- Programming - usually provided by the client, they are meant to define the size and program elements required for satisfy the clients needs
- Planning - typically defined by both jurisdictional bodies (in the case of building code requirements, environmental preformance requirments, etc.) and the client (in the case of "owner" requirements, like desired views)

Mostly all building targets can be measured and expressed numerically - sometimes those constraints get translated into geometry, and sometimes you are extracting numbers from geometry and evaluating them against targets. Either way, parametric modeling/Grasshopper and BIM/Revit are excellent at helping you in this process.

It is not uncommon for project to progress deep into the design process, only to find out that it is no longer conforming to certain requirments, or you've lost track of critical metrics along the way. We'll work over the next few tutorials to establish ways of making sure our preliminary design ideas conform to the above requirements. In that process, we'll also set up methods to keep track of our metrics to ensure we're on the right track as the design evolves.

<!-- Insert Dynamic Gif -->

In the next few sections we will tackle the following:
- Setting up your model
- Establishing key building targets
- Extracting key data from your model
- Analyzing and displaying complance against targets

We will be working based off of a project in Manhattan with a defined mixed use program, so I will be referencing code and zoning based on that specific site. **However, it is critical for you to research and document the specific requirements for you site.** If you're working in NYC, I've provided some great resources to get you started below. After you've gotten a chance to review those references, we'll get started on the tutorial for our project. 

## Additional Resources:

[Zola | NYC's Zoning and Land Use Map](https://zola.planning.nyc.gov/): An amazing resource for everything NYC Planning and Zoning. Each site in the city has a ton of data associated with it, and the website will point you to any Zoning or Planning requirements or bonuses you should be aware of for your project. NYC Only

[UpCodes](https://up.codes/): Great for all types of code research. There is a paid level of access, but the free one is more than enough to help you get started on a project. Covers most of the United States.

[Fontan Architecture Blog](https://fontanarchitecture.com/blog/): This is an incredibly helpful blog by an architect based in NYC. They are able to clarify some of the complexity behind zoning. If you search for NYC zoning questions, you'll often get this site as the top result. I have begun adding "Fontan" to my zoning searches to see if they have released a post on the topic. For example, if you Google "R6 Fontan" you'll get [this post on R6 Zoning](https://fontanarchitecture.com/r6-zoning-nyc-residential-development/) as one of the top results.




