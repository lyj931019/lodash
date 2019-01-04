function myConsole(isLog) {
    return function(){
        isLog?console.log.apply(console, arguments):''
    }
}

// const log = myConsole(false);
// const
