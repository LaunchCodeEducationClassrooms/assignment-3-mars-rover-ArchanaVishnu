class Command {
   constructor(commandType, value="NORMAL") {
     this.commandType = commandType;
    if (!commandType) {
       throw Error("Command type required.");
    }
     this.value = value;
   }
 
 }
 
 module.exports = Command;