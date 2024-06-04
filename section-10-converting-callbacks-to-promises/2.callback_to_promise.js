

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


let x = download("www.google.com");

x.then(function fullfillhandlerDownload(downloadedData){
    console.log("completed the downloaded from the ",downloadedData);
    return writeFile(downloadedData);
},

).then(function fullfillhandlerWrite(writedData){
    console.log("writing to the file copmpleted",writedData);
    return uploadFile("www.upload.com",writedData);
},

).then(function fullfillhandlerUpload(value){
    console.log(`completed the uploaded data on ${value}`);
    
})