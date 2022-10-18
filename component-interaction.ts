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
 *  You can create a singleton service provided as a dependency for Component A and Component B
 *  The singleton service can then be used to share data and methods between the two components
 *  Benefits:
 *  - Easy to test and maintain
 *  - One would need rxjs library if data is to be shared between the two components on events basis by implementing an event bus using subjects, behavior subjects or replay subject
 * */

/**
 *  State management library e.g NgRx
 *  One can use a state management library to share data between component A and Component B
 *  Benefits:
 *  - Only share data
 *  - Immutability
 *  Drawbacks
 *  - Increase bundle size of application
 *  - Increase complexity of the application if the use case is simple e.g only sharing a simple data structure
 * */

/**
 *  Input and Event binding
 *  If component A and component B have a parent child relation, one can use input binding to share data from parent and event binding to share data from child
 *  Benefits:
 *  - Easy to implement
 * */
