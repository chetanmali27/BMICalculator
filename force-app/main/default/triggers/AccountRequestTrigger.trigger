trigger AccountRequestTrigger on Account_Request__c (before insert,after insert,before update,after update) {
    if(Trigger.isAfter){
        if(Trigger.isInsert){
            System.debug('asss'+Trigger.New);
        }
    }

}