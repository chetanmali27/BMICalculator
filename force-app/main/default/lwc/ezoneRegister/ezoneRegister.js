import { LightningElement,api,track } from 'lwc';
import IMAGES from "@salesforce/resourceUrl/static_images";
export default class EzoneRegister extends LightningElement {

  @track objectApiName='Account_Request__c';
  fields = ["Name","Phone__c"," Email__c","Date_of_Birth__c","Billing_Street__c"," Billing_City__c","Billing_State__c","Billing_Postal_Code__c","Shipping_Street__c","Shipping_City__c","Shipping_State__c","Shipping_Postal_Code__c","Primary_Contact_First_Name__c","Primary_Contact_Last_Name__c","Primary_Contact_Phone__c","Primary_Contact_Email__c","Description__c"];
  logo = IMAGES + '/static_images/logo.png';
}