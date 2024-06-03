function download (url){
    return new Promise (function exec(resolve,reject){
        setTimeout(function p(){
            console.log("Completed downloading data in 5s");
            content = "ABCDRF";
            resolve(content);
        },5000);
    })
}

let x = download("www.google.com");
x.then(
    function fullfillhandler(value){
        console.log("full handler 1 downloaded is",value);
        return "new Promise"
    },
    function rejectionHandler(value){
        console.log("rejection handler 1 is ",value);
    }
).then(
    function fullfillhandler(value){
        console.log("full handler 2 downloaded is",value);
    },
    function rejectionHandler(value){
        console.log("rejection handler2 is ",value);
    }
)