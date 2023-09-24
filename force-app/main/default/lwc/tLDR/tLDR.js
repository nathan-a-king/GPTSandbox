import { LightningElement, api, wire, track } from 'lwc';
import go from '@salesforce/apex/TLDR.go';

// This is the main component that will be used to display the summary
export default class TLDR extends LightningElement {    

    @api providedId;    

    @wire(go, {providedId: '$providedId'}) 
    mySummary;    
}