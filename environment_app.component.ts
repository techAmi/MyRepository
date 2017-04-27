/**this code will import the Component and view package 
 * from angular2/core
 * 
 * the @component is an angular 2 decorator that allows 
 * to associate metadata with the component
 * class
 * the my-app can be used as an HTML tag to injecting and 
 * can be used as a component
 * 
 * the @view contains a template that tells angular how to 
 * render a view
 * 
 * the export specifies that, this
 */

import {Component, View} from "angular2/core"; 

@Component({
    selector: 'my-app'
})

@View({
    template: "<h2> My first Angular 2 app </h2>"
})

export class AppComponent{

}

