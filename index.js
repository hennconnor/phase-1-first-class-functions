function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function returnFunction(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}

