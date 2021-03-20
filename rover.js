
class Rover {
   // Write code here!
   constructor(position){
     this.position = position;
     this.mode ='NORMAL';
     this.generatorWatts = 110;
   }

  
   receiveMessage(msg){
     let response = {
     message : "",
     results : []
     };

     let result ={
     completed : true,
     roverStatus : {mode : this.mode,generatorWatts : this.generatorWatts ,position : this.position}
     };

     response.message=msg.name;
     for(let i=0;i<msg.commands.length;i++)
     {
      
       if(msg.commands[i].commandType=="MODE_CHANGE")
       {
         this.mode = msg.commands[i].value;
       }
       else if(msg.commands[i].commandType=="MOVE")
       {
         
         if(this.mode == 'LOW_POWER')
         {
          result.completed= false;
         }
         else
         {
          this.position = msg.commands[i].value;
         }
        
       }
       result.roverStatus.mode=this.mode;
       result.roverStatus.position=this.position;
       result.roverStatus.generatorWatts=this.generatorWatts;
       response.results[i]=result;
     }
     return response;
   }
   
}

module.exports = Rover;