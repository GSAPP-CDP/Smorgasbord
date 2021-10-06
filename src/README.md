# GSAPP Smorgasbord

This is the repository for the GSAPP Smorgasbord!

## Module Content 

_See [content/modules/0-template](content/modules/0-template) as an example; you can duplicate that folder and work from there._

### Structure

Module Content is located in [content/modules](content/modules), with one module per folder.

### Module Markdown File

Inside of each folder, there is one Markdown file ([0-template-markdown-file.md](content/modules/0-template/0-template-markdown-file.md)) and several different images. Images should be relatively linked to (see the Markdown file for examples).

The markdown file should have this (YAML front matter) at the start of each file: 
```
---
moduleid: 0
title: Grasshopper as Tool-making Medium
published: True
---
```

Make sure that the moduleid is unique! You can make sure that the module IDs don't collide by looking at our GSAPP Smorgasbord Status/Scope spreadsheet.


## Development Setup

The site is created in NUXT.js. If you'd like to develop locally, so that you can see the content adjust live:

### Setup
`npm install` or `yarn install`

### Run Development Environment

`npm run dev` or `yarn dev`


