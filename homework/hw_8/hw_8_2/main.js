function cloneObject(obj) {
    if(obj){
        let functions = [];
        for (const key in obj) {
            if(typeof obj[key] === 'function'){
                const cloneFunk = obj[key].bind();
                functions.push({cloneFunk, key});
            }
        }
        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.cloneFunk;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error("Unexpected");
}
cloneObject({name: "val", age: 12, foo(){
        console.log("hello");}, foobar(){bar}});