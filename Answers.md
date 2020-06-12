1. What problem does the context API help solve?

    -Context API solves the problem of props drilling.  Instead of trying to keep track of props all over your application instead you can wrap components in context API and then use the info all over.  The only problem is it makes components harder to reuse.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -Actions: actions within Redux are payloads of information that send data from your application to your store.
    
    -Reducers: reducers are very important within redux. They are functions that determine changes within the applications state.  Then paired with actions they work to change state.

    -Store: The store is where most if not all of the global state of the app is held.  This is where we go to grab our info to distribute throughout our app.  That’s why Redux is great in concept because it’s so centralized.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    -Application state is data like names and themes that can be distributed throughout your entire app.  Also any component within the app can access the information within application state.

    -Component state you usually keep it stored within each separate component.  It cannot be accessed outside of the component itself except for passing down to children.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    -With just regular redux store you can only do simple synchronous code.  Middleware extends the stores ability and thunk is part of that middleware.  Helps you write async code.  It helps us write action creators that return a function instead of an action. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    -Hands down my favorite state management system is context API.  I like the concept of Redux and how everything is very centralized but at the same time there is so much to keep track of and I get super lost.  It’s very true that this is a language that you can only start to understand through repetition.  Context API though made a lot more sense to me.