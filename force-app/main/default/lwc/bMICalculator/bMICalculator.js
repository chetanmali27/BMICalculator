import { LightningElement } from 'lwc';

export default class BMICalculator extends LightningElement {
    reCalculateCheck = false;
    inputHeight;
    inputWeight;
    bmiValue;
    bmiStatus;

    onHandleChange(event){
        const {name, value} = event.target;
        switch(name){
            case "height":
                this.inputHeight = Number(value)/100;
                break;
            case "weight":
                this.inputWeight = Number(value);
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.reCalculateCheck = true;
        this.bmiValue = this.inputWeight/(this.inputHeight * this.inputHeight);
        this.bmiValue = Number(this.bmiValue.toFixed(2));

        if(this.bmiValue < 18.5){
            this.bmiStatus = "Underweight";
        } 
        else if(this.bmiValue >= 18.5 && this.bmiValue<25){
            this.bmiStatus = "Healthy";
        } 
        else if(this.bmiValue >= 25 && this.bmiValue<30){
            this.bmiStatus = "Overweight";
        } 
        else {
            this.bmiStatus = "Obese";
        }

    console.log(this.bmiValue);
    console.log(this.bmiStatus)
    }
    
    calculateBMI(){
        this.reCalculateCheck = true;
    }

    reCalculateBMI(){
        this.reCalculateCheck = false;
    }
}