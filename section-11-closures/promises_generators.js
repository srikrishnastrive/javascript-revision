

function download (url){
    console.log("Starting downloading from the url",url);
    return new Promise (function (resolve,reject){
        setTimeout(function down(){
            console.log("download completed");
            const content = "ABCDEF";
            resolve(content);

        },4000);
    });
}

function writeFile(data){
    console.log("starting writing a file with",data);
    return new Promise(function (resolve,reject){
        setTimeout(function write(){
            const fileName = "file.txt";
            resolve(fileName);
        })
    },5000);

}

function uploadFile(url,file){
    console.log("starting the uploading",file,"on",url);
    return new Promise(function (resolve,reject){
        setTimeout(function uploading(){
            console.log("uploading completed");
            const reponse = "success";
            resolve(reponse)
        })
    })
}

function doAfterReceiving(value){
    iter.next(value);
}



function* steps(){
    const downloadedData = yield download("www.xyz.com");
    console.log("data downloaded is",downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log("file written is",fileWritten);
    const uploadResponse = yield uploadFile(fileWritten,"www.xyz.com");
    console.log("upload response is",uploadResponse);
    return uploadResponse;
}


const iter = steps();
const future = iter.next();
future.then(doAfterReceiving);
