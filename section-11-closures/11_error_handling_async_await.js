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



async function steps() {

    try {
        const downloadedData = await download("www.xyz.com");
        console.log("data downloaded is", downloadedData);
        return downloadedData;
        
    } catch (error) {
        console.log('we have handled the error');
    }
    finally {
        console.log('ending');
    }
    
   
}

steps();