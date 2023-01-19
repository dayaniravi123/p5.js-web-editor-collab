# p5.js Collab Documentation

A manual for the p5.js "collab" add-on

## Introduction
- p5.js web editor is used to draw different things by writing java script code. And we are trying to develop collaborative feature though which one can share his/her document with his/her teammates so that they also can edit and run code in parallel just like google docs. We used different tools which can help us to build collaborative feature for example Yjs, sharedb etc. We try to develop that feature using Yjs. Yjs is a high-performance CRDT for building collaborative applications that sync automatically.

### System Description
- Here in p5.js, it uses codemirror editor to perform different operation for example writing code, running code, displaying the result in side panel etc. And Yjs also have module named y-codemirror which can help us to build the collaborative feature and it has same functionalities like codemirror. so we try to use that y-codemirror in our system. For this we have to edit some files from source code of p5.js web editor and those files are editor.jsx, Nav.jsx, ConsoleInput.jsx. First of all, we created the button in nav bar so that one can click on it and enable the collaboration feature and share the link with his/her teammates. After that we have edited editor.jsx and ConsoleInput.jsx file which contain codemirror tag so that we tried to change that with y-codemirror. For detailed code, you can check github code. 

### Platform/Technology/Tools

- p5.js
- CRDT vs. OT
- codeMirror
- emailDB

### Terminology

- sketch: P5.js uses the analogy of a "sketch" to describe creative programs written using the library. 

## Design

### Research on Remote Collaborative Platforms

#### Glitch

- [Glitch](https://glitch.com/about) supports collaborative programming activities by means of a web browser-based text editor.

#### Teletype (Atom)

- [Teletype](https://teletype.atom.io/) is a remote collaboration add-on for the Atom text editor.  

### Database
- Here p5.js internally used mongodb as database. 

#### Extending DB to Support Collaborative Sketching

(This is )

### Frontend

#### Additional UI Elements

#### UI/UX Flow

## Remaining Features

This section contains additional proposed features of p5.js Collab as well as URLs to each of their accompanying Issues.

### "Owner" column in Sketch Collection

