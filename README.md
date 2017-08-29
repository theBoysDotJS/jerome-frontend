# Jerome
#### A real time messaging platform that translates messages on the fly


## About

Jerome was the final project for DecodeMTL, an immersive coding bootcamp in Montreal, QC. It was original built in a week, but the team behind it hopes to expand it.

We felt it solved many problems in e-commerce and immigration, from coordinating with buyers oversees to applying for citizenship. Jerome can be used to communicate instantly in any language that the google cloud api supports.

## Getting Started

### Installing

Getting the project running on your machine is simple:

1. Fork resp
2. `npm install`
3. `npm start`

You'll also likely need to download and run our [backend](https://github.com/theBoysDotJS/chat-backend)

### Contributing

Just fork the repo and submit a PR with your changes!

## Built With

### React

We're using `create-react-app` to scaffold and compile the dev environment for the project. Feel free to eject it on your own branch, but please don't submit PR's of ejected code.

### Cloud API

The Google-Cloud API powers our translation engine - it does a lot of stuff, so if you have an idea for a feature request open a PR or Issue with your plans.

Also, keep in mind that this API is pay-per-use. Our dev API is a free translation-only version that has been abstracted from the cloud-api so don't worry and make as many requests as you need. However, try and keep your PR's optimized for minimal translation requests.

### SASS

We're using sass as our css styling engine. To get it working on your machine install it [**here**](http://sass-lang.com/install).

After that, it's as easy as running:

`sass --watch src/sass/main:src/css`

from the main project directory to start compiling your sass into CSS.

**Do not edit any files inside the CSS folder, they will be overwritten during the next sass compile**

## Authors

**Hao Zheng** -- Link

**Mike McDonald** -- Link

**Quinn Langille** -- Link

**Tim Macnamera** -- Link
