/**
 * Review following code snippet and answer questions:
 * 1) What are the problems in this code snippet?
 * 2) How can we solve them?
 * 3) If there are multiple options to solve them, what benefits and drawbacks of each method?
 * */

@Component({
    selector: 'app-user-panel',
    template: `<div class="user-panel">{{ getUserName() }}</button>`,
})
export class UserPanelComponent {
    private _user;
    user$: Observable

    constructor(
        private _authService: AuthService,
    ) {
        this._authService
            .user
            .subscribe(user => {
                this._user = user;
            });
    }
    public getUserName() {
        return this._user.name;
    }
}

/**************************************************************************************************************************************
*                                                        Solution                                                                     *
**************************************************************************************************************************************/

/**
 *  1) What are the problems in this code snippet?
 *     Subscribing to the authService user observable in the constructor
 *     The component does not unsubscribe from authService user observable
 *     The user property does not have a type
 *     No return type for getUserName method
 *     getUserName method call in the template would be executed in every change detection cycle
 * */

/**
 *  2) How can we solve them?
 * */

/**
 *   Create a method for subscribing to authService user observable that will be called in ngOnInit life cycle hook
 *
 *   Benefits would be:
 *   Easier to test and debug the component
 * */

/**
 *   Use async pipe to subscribe to the authService user observable in the template
 *
 *   Benefits would be:
 *   Less boilerplate code
 *   The async pipe would automatically unsubscribe from the observable on component destroy
 * */

/**
 *   Unsubscribe to the authService user observable on component destroy using ngOnDestroy lifecycle hook
 *
 *   Benefits would be:
 *   Prevention of memory leak
 * */

/**
 *   Create an interface for the private user property
 *
 *   Benefits would be:
 *   Typescript type checking and suggestions
 * */

/**
 *   Add a return type for getUserName method
 *
 *   Benefits would be:
 *   Typescript type checking
 * */

/**
 *   Replace getUserName method call in the template with a property
 *
 *   Benefits would be:
 *   Better performance
 * */
