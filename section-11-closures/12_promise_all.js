function download(url,time) {
    console.log("Starting downloading from the url", url);
    return new Promise(function (resolve, reject) {
        setTimeout(function down() {
            console.log("download completed");
            const content = "ABCDEF";
            if(time > 3000){
                reject(reject);
            }
            else {
                resolve(content);
            }
            
        }, time);
    });
}


const p1 = download("www.abc1.com",1000);
const p2 = download("www.abc2.com",2000);
const p3 = download("www.abc3.com",5000);

Promise.all([p1,p2,p3]).then(function fullfillHandler(values){
    console.log(values);
});

