# About this React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is [deployed on Netlify]().

## Learning Concepts covered

Learning objectives:
* how to deal with rendering errors?

#### (0) Set up the README and the starter code

Set up the shell of the README and the starter code that allows us to follow along with the commits.

#### (1) The problems I'm faced with

Let's say I'm building a movie app.

I wanna display all the movies, etc.

Finally, this is where we are facing our issues.

In App.js, I'm rendering the nav and the movie list, ok.

These two should be separate, they have nothing to do with each other. But in this case, I do want to render the number of items I have in the movie list in the nav, and I cannot do that, because the only way you can do that is by passing it down through props.

So app can pass down its state to Nav and MovieList, but in this case, we only have state in MovieList, so the only way that I can pass this  state down to another component is by props.

So the only way to get this to work is to render the Nav component inside the MovieList component. But I don't want to render the Nav here, it makes no sense for it to be its child.

So, how can we fix this?

Well, 1 way is "lifting up the state". I take all the state from MovieList and move it up to the parent component (App.js).

Now I can pass down the state to any component I want. The problem with this is, I'm gonna have a lot of state in the app component, that doesn't belong to the app component.

Another issue here is that I'll have to prop drill, which basically means that I have to pass down props from component to component to component.

#### (2) Add errorMsg to state

asdf

#### (3) Move the data to a separate file and import it into App.js"

adsf

#### (3b) Import local JSON file

adsf

#### (3c) Fix the warning, Each child in a list should have a unique key prop

asdf

#### (4) Move the data to an online JSON file and fetch it from there

asdf

#### (5) Answer: What would we do if we had 100 cars?

adsf
