function download(url) {
    console.log("Starting downloading from the url", url);
    return new Promise(function (resolve, reject) {
        setTimeout(function down() {
            console.log("download completed");
            const content = "ABCDEF";
            resolve(content);
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

function doAfterReceiving(value) {
    let future = iter.next(value);
    console.log("future is", future);
    if (!future.done) {
        future.value.then(doAfterReceiving);
    }
}

function* steps() {
    const downloadedData = yield download("www.xyz.com");
    console.log("data downloaded is", downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log("file written is", fileWritten);
    const uploadResponse = yield uploadFile(fileWritten, "www.xyz.com");
    console.log("upload response is", uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);
