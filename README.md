# Simple RSS Podcast Website
This is a simple website, built with React and Deployed in AWS, for a podcast just getting started. 
This React Application makes a request to the specified podcast RSS URL, and displays the episodes of the podcast.

## Local Workflow
### Setup
```npm run install```

### Running/User Testing
```npm start```

## Deployment
### Manual Deployment (by script)

### Automated Deployment (by Github CI)

## Project Notes
### Goal
To deliver a simple, configurable, podcast website that can be used to display links to the episodes of a podcast
--specifically for me and my friend's podcast. Hack it together in a couple of days.

### Scope
1. React App 
    - Parses RSS Feed
    - Displays episodes in a list format
    - Nice, clean style with a heading 
    - Project configurable
2. Deployment
    - Manual deployment via local script
    - Single deployment environment (publicly available)
    - Automated deployment via Github CI
3. Infrastructure
    - Terraform infrastructure definition
4. Assets
    - favicon
    - podcast art

### Architecture Design
Diagram Here

### Stretch Goals
1. React App
    - Cognito IDP for admin level authorization within application (and admin features)
2. Deployment
    - Multiple deployment environments
    - IP Restricted dev and staging environments
