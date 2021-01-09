# Simple RSS Podcast Website
This is a simple website, built with React and Deployed in AWS, for a podcast just getting started. 
This React Application makes a request to the specified podcast RSS URL, and displays the episodes of the podcast.

[Example](shewmetheway.com)

## Local Workflow
### Setup
```npm run install```

### Running/User Testing
```npm start```

## Deployment
### Manual Deployment (by script)
(In progress)

### Automated Deployment (by Github CI)
(In progress)

## Project Notes
### Goal
To deliver a simple, configurable, podcast website that can be used to display links to the episodes of a podcast
--specifically for me and my friend's podcast. Hack it together in a couple of days time.

### Initial Scope
- [x] React App
    - [x] Parses RSS Feed
    - [x] Displays episodes in a list format
    - [x] OK, clean style with a heading 
    - [x] Project configurable RSS feed
- [ ] Deployment
    - [x] Manual deployment via local script
    - [x] Single deployment environment (publicly available)
    - [ ] Automated deployment via Github CI
    - [ ] Set Security headers
- [ ] Infrastructure
    - [ ] configurable Terraform infrastructure definition for easy reproducibility
- [x] Assets
    - [x] favicon
    - [x] podcast art (Currently Commissioned)

### Architecture Design
Diagram Here (In progress)

### Stretch Goals
1. React App
    - Cognito IDP for admin level authorization within application (and admin features)
2. Deployment
    - Multiple deployment environments
    - IP Restricted dev and staging environments
