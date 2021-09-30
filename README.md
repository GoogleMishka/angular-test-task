Angular 7 App
You need to create angular 7 application with next requirements:

Implementation should be provided with git history starting from angular boilerplate as initial commit.

feel free to use any libraries you find the best match.

Create store with 2 variables in state with naming up to your decision.
Initial state of them is -5 and 10 respectively.
Store should have 3 actions: "change", "increase" and "decrease".
"change" action does nothing in a reducer.
"increase" action should increase first variable by 1.
"decrease" action should decrease second variable by 1.

Create 2 components:
First component is responsible to display what it gets in an input property. It should display input always in a border. If value is lower than 0 its border and value should be some red. If greater then some blue.
Second component renders variables from store by first component.

When we open application first time we should see numbers. The page should contain also start button (implementation is up to you). Once it's pushed application should start to dispatch "change" action every second. The action causes change in store state of 1st variable once and 2nd variable twice.

All written logic should be covered by tests.

bonus task: stop button.
bonus task: reset button.
bonus task: don't use setTimeout / setInterval.
