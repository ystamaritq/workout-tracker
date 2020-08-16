# Workout Tracker

### Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [MVP](#mvp)
- [Reference Links](#reference-links)
  - [Workout Tracker Live App](https://workout-tracker-platform.herokuapp.com/)
  - [Workout Tracker GitHub Repo](https://github.com/ystamaritq/workout-tracker)
- [Installation Instructions](#installation-instructions)
  - [Project Technologies](#project-technologies)
  - [Node Dependencies](#node-depencencies)
- [Licensing](#licensing)

---

## Description

**Workout Tracker** A consumer will reach their fitness goals quicker when they track their workout progress.

---

## User Story

`As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.`

---

## Acceptance Criteria

- As a User I can add exercises to a previous workout plan
- As a User I add new exercises to a new workout plan
- As a User I can view multiple the combined weight of multiple exercises on the `stats` page

---

## MVP

- Allow user to add exercises to a previous workout plan
- Allow user add new exercises to a new workout plan
- Displays multiple the combined weight of multiple exercises on the `stats` page

## Reference Links

Link to **Workout Tracker** deployed on Heroku - [Workout Tracker Live App](https://workout-tracker-platform.herokuapp.com/)

Link to **GitHub Repo** used for application development - [Workout Tracker GitHub Repo](https://github.com/ystamaritq/workout-tracker)

---

## Installation Instructions

In order to **successfully** develop and launch this website, the following items must be **installed and/or accessible** from your working environment _(i.e. laptop, computer, etc._).

- **Node.js** - Make sure Node.js is installed in your machine. If Node.js is not installed on your machine, [click here](https://nodejs.org/en/) to download the application.

- **Node Modules** - This project used various `node modules`, which are listed in the package.json files listed in both the `main root folder` of this application. Please run `npm install or npm i` in your terminal in order to install all required node modules.

- **Clone** the following project into a your local file system and follow these steps:

```
git clone https://github.com/ystamaritq/workout-tracker.git
cd workout-tracker
code .
run npm install
run node server.js
```

### Project Technologies

Here is a list of all the core technologies / core dependencies used to develop this application.

- `Node.js - An asynchronous event-driven JavaScript runtime`
- `Express - Node.js web application framework that provides a robust set of features for web and mobile applications`
- `Deploy web app using Heroku`

### Node Dependencies

The **dependencies** listed below are all the `npm packages` used throughout the App.

- `express` - minimalist web framework for node.
- `morgan` - HTTP request logger middleware for node.js
- `mongoose` - object modeling tool designed to work in an asynchronous environment
- `dotenv` - loads environment variables from a .env file into process.env

---

## Licensing

"The code in this project is licensed under MIT license."

---

**developed with love by **@ystamaritq\*\*\*\*
