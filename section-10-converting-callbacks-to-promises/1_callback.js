

function download(url,cb){
    console.log("starting downloading from the url",url);
    setTimeout(function down(){
        console.log("Downloading completed");
        const content = "ABCDEF";
        cb(content);
    },4000);
    
}

// download("www.xyz.com",function process(content){
//     console.log("the content is",content);
// })

function writeFile(data,cb){
    console.log("starting writing a file with",data);
    setTimeout(function write(){
        console.log("Completed writing the data in a file");
        const fileName ="file.txt";
        cb(fileName);
    },5000);
}


// writeFile("abcdef",function process(name){
//     console.log("file written with Name",name);
// })

function upload(url,file,cb){
    console.log("starting the uploading",file,"on",url);
    setTimeout(function up(){
        console.log("upload completed");
        const response = "SUCCESS";
        cb(response);
    },2000);
}

download("www.xyz.com",function processDownload(content){
    console.log("we are going to process the downloaded data");
    writeFile(content,function processWrite(fileName){
        console.log("we have downloaded and written the file,now will upload");
        upload("www.upload.com",fileName,function processUpload(response){
            console.log("we have uploaded with",response);
        });
    });
});
