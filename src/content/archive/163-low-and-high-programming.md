---
moduleid: 163
title: Low and High Programming
published: True
slug: low-and-high-programming
authors:
 - "Violet Whitney"
---
# Low and High Programming
## Module Summary
In this module you will get a conceptual overview of the software technology that enables modern day ambient computing.
- low and high programming
- Cloud concepts - APIs, Microservices, Servers, CMs, Cloud, Edge Computing

### How the Cloud and Microservices Allow for High Level Programming
#### Microservices Replace Monolithic Software Development
The development of software today is drastically different from the development of software products ten years ago. Previously software products consisted of large **"monolithic"** software i.e. "a single-tiered software application in which the user interface and data access code are combined into a single program from a single platform". Monolithic software was developed and owned as proprietary by individual companies and usually stored on physical servers owned by those companies. Additionally this monolothic software development required hiring software developeres that could dig deep into the technical depths of the software to add or update the code.

Today's software is developed instead as **"micro-services"**, architectural design that separates portions of a (usually monolithic) application into small, self-containing services. Microservices are a series of smaller modular component applications that run on the cloud. 
![](images/low-hi-2.png)   
*monolith and microservice architecture diagram*

The **"cloud""** refers to on-demand compute resources, typically servers (oftentimes in many locations). Some examples of modern day clouds are AWS (Amazon Web Services), Microsoft Azure, GCS (Google Cloud). The majority of websites and applications we access today are hosted on the cloud. On IFTTT Wireless Tags, Phillips Hue Lights, Amazon Echo, etc. are examples of microservices. Smaller still than the code modules of a microservice are **Functions as a Service (FaaS)** which use small code snippets of specific functions to execute a tiny portion of a service. In IFTTT, this is done by creating recipes and writing single functions such as “If the temp > 72 degrees, then turn on the fan” (see diagram above of user written code).

![](images/low-hi-1.png)   
*IFTTT microservice diagram*

#### Benefits of Microservice Structure
The shift towards these smaller components enables a few important things that spatial designers should be aware of:
- **Lowering Barriers to Entry** — It allows a non-technical user to create new applications with only the need to write tiny code snippets that execute one function rather than writing entire programs and worrying about servers and API protocols. An **API** is an Application Programming Interface. The keyword here is interface that allows two apps to talk to each other. APIs are the doorways, so to speak, that allow developers to interact with an application. “contract” or set of clearly defined methods of communication between various services. By expanding the access to  microservices to non-technical users this means a much larger portion of people can program and customize services. The concept **"End User Programming"** refers to non-expert programming and is a key feature in many microservices and functions as a service as it expands who can access. End user programming and FaaS often rely on **"No Code"** or visual programming environments such as the one shown below.
![](images/low-hi-7.png)   
*Integromat: a microservice website interface for programming recipes*


- **From “in the Weeds” to “in the Clouds”** — Services like IFTTT allow designers to design with more visual higher level abstractions through higher level programming and programming languages. Moving from **"low level"** to **"high level programming"** means spending less time programming nitty gritty components to thinking about how services and actions interrelate and what outcomes they drive.
   - In programming a high level programming language (Java, Python) use more abstraction, thus making it easy for a humans to understand the program whereas low level programming (machine language) usees less abstraction of the machine code and speaks directly to the computer and thus is difficult for a human to understand. Programming low level languages is highly technical and time intensive, however it is still useful as the code runs very fast.
   ![](images/low-hi-3.jpeg)  
   *diagram of low to high programming*  
   
   - Microservices makes it easier for designers to play with design ideas because it allows for a wider ability to innovate then off-the-shelf monolith services without falling into a zone that becomes to onerous to program.
   ![](images/low-hi-5.jpeg)  
   *diagram of low to high programming*  
   



- **Shared Resources** — Bite size components allows companies to more easily exchange applications, reducing redundancy between companies and the need for building proprietary applications. Allows companies to build off of others work, rather than building from scratch.
  - Take for example a ride sharing company that needs to provide billing services to its customers. Rather than develop software an expertise in billing, the company might use a microservice from another company that specializes in billing. Likewise the company that specializes in billing may also have a need to provide some mapping services or ride sharing services. This company would be better suited to access this service from another company vs develop it independently. This strategy allows companies to hone and spend resources developing their competitive advantage while also providing that competitive advantage as a service to other companies.

![](images/low-hi-4.jpeg)   
*example of two companies sharing microservice apps*
