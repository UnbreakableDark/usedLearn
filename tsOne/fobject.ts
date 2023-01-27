function ask(question,...handlers){
    let isYes=confirm(question);
    ask["go"]='1';

    for(let handler of handlers){
        if(handler.length===0){
            if(isYes) handler();
        }else {
            handler(isYes);
        }
    }
}

ask("question",()=>console.log("You said yes"),result=>console.log(result)
);
console.log(ask["go"]);
