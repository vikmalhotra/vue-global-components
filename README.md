# vue-global-components

In most of the web apps, there are many instances of needing some event-driven functionality that can be used throughout the app. Few examples of such functions are as follows:

- snackbar
- loading indicator
- alert/error dialogs

I find myself in need of adding one or more of these functions to almost every page of my app. That is why I decided to look into some coding patterns to accomplish this with following points in mind.

- lots of reusability
- less boilerplate/duplication of code
- loose coupling

I have created examples of snackbar functionality in this repository.

## Main libraries used

- vuejs/nuxtjs
- nuxt composition api plugin
- vuetify

## Pattern - Composition

Import the vuetify snackbar in parent component and pass the state (snackbar visibility and message) to it. Parent component maintains the state.

### Cons
- lots of boilerplate code when using in various components
- too much responsibility on parent components
  - tight coupling due to state logic and template existing in same file

## Pattern - Event bus

Create a event bus using Vue instance and send/receive events using it. Snackbar state is maintained in snackbar component.

### Cons
- `$on`, `$off` APIs have been removed in Vue3, so there'll be problems when updating the code to Vue3
- Lots of event names to remember

## Pattern - Composables

Create a composable that maintains snackbar state.

## Pros
- future safe as composables can be used in Vue3
- business logic and template are loosely coupled

### Cons
- states in composables are not meant to be used in complex scenarios
- cannot do debugging in browser dev tools

## Pattern - Store

Create a state store to maintain snackbar state. One can even inject the store in context object so that the state is accessible without doing any imports in parent component.

#### Cons
- It's nitpicking, but there is need to install library
