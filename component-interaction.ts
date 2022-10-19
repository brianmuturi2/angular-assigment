/**
 *  Imagine that we have two components - ComponentA and ComponentB.
 *  Both components have to interact with each other in some way:
 *  - Send some data from ComponentA to ComponentB and vice versa.
 *  - Call some methods from ComponentA to ComponentB and vice versa.
 * */

/**
 *  Given this information, please answer following questions:
 *  1) What options do we have to establish such communication?
 *  2) For each option describe what are the pros and cons of this solution?
 *  3) For each option describe what are the cases the solution fits best?
 * */

/**************************************************************************************************************************************
 *                                                        Solution                                                                     *
 **************************************************************************************************************************************/

/**
 *  Dependency injection
 *  You can create a singleton service provided as a dependency to Component A and Component B
 *  The singleton service can then be used to share data and methods between the two components
 *
 *  Benefits:
 *  Easy to test and maintain
 *
 *  Drawbacks:
 *  One would need rxjs library if data is to be shared between the two components on events basis by implementing an event bus using subjects, behavior subjects or replay subject
 *
 *  Best cases:
 *  Share methods
 *  Share data that is not often changed or mutated
 * */

/**
 *  State management library e.g NgRx or Redux
 *  One can use a state management library to share data between component A and Component B
 *
 *  Benefits:
 *  Reducers for changing data in an immutable way
 *  Selectors for getting data in a memoized way
 *
 *  Drawbacks:
 *  Increased bundle size of application
 *  Increased application complexity if the use case is small e.g only sharing a simple data structure between components
 *
 *  Best cases:
 *  Share large or complex data is shared between components, taking advantage of entities or slices of store
 *  Share data that is often changed, taking advantage of reducers and actions
 * */

/**
 *  Input and Event binding
 *  If component A and component B have a parent child relation, one can use input binding to share data from parent and event binding to share data from child
 *
 *  Benefits:
 *  Easy to implement
 *
 *  Best cases:
 *  When there is a parent child relation between components
 * */
