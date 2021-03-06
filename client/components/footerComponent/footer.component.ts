/**
 * Created by Boykov D. on 9/22/2016.
 */
import {
	Component,
	ViewEncapsulation
} from "@angular/core";

@Component({
	           selector     : "custom-footer",
	           template     : require('./footer.template.html'),
	           styles       : [String(require("./footer.style.scss"))],
	           encapsulation: ViewEncapsulation.Emulated
           })
export class FooterComponent {
}