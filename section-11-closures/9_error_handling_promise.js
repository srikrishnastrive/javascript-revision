function download(url) {
    console.log("Starting downloading from the url", url);
    return new Promise(function (resolve, reject) {
        setTimeout(function down() {
            console.log("download completed");
            const content = "ABCDEF";
            reject(content);
        }, 4000);
    });
}

function writeFile(data) {
    console.log("starting writing a file with", data);
    return new Promise(function (resolve, reject) {
        setTimeout(function write() {
            const fileName = "file.txt";
            resolve(fileName);
        }, 5000);
    });
}

function uploadFile(file, url) {
    console.log("starting the uploading", file, "on", url);
    return new Promise(function (resolve, reject) {
        setTimeout(function uploading() {
            console.log("uploading completed");
            const response = "success";
            resolve(response);
        }, 3000); // Assuming a delay for uploadFile similar to others, you can adjust the time as needed.
    });
}

download("www.xyz.com")
.then(
    function processDownload(value){
        console.log("downloading done with following value",value);
        return writeFile(value);
    },
    function downloadReject(value){
        console.log("download Reject",value);
        throw value;
    }
).then(function processWrite(value){
    console.log("data written in the file",value);
    return uploadFile(value,"www.upload.com");
    
},
function WriteReject(value){
    console.log("Write Reject",value);
    throw value;
}
)
.then(function processUpload(value){
    console.log("We have uploaded with",value);
},
function UploadReject(value){
    console.log("Upload Reject",value);
    
}
)