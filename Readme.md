Q) What is redux? 
Redux is a popular state management library which is used to store the current state of the application and that state can be made available throughout the app without the need to pass the state manually.


Redux has mainly 5 parts:

1) Action creators - They are functions that return a plain JS object also called as Actions.

2) Actions - They are plain JS object which has 2 attributes: 
    i) Type - which tells us what to do or what is the purpose of the action.
    ii) Payload - They contain the information on what changes to make

3) Dispatchers - They forward the action to reducers as action creators cannot directly pass on the actions to reducers.

4) Reducers - They are responsible for creating new state. They determine how an action will modify the state and which part of the state will be modified

5) State - the large state container


React Cycle:

Action Creators ---> Actions ---> Dispatch ---> Reducer ---> State




