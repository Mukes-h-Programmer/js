// Json => A common use of JSON is to read data from a web server, and display the data in a web page. For simplicity, this can be demonstrated using a string as input.

// json will never accept single quotes.


obj = {name: "Mukesh", length: 1, a: 'this "t'}
js = JSON.stringify(obj);


console.log(typeof js);
console.log(js);

// parsed = JSON.parse(`{"name":"Mukesh","length":1,"a":"this \\"t"}`);
parsed = JSON.parse(`{"name":"Mukesh","length":1,"a":{"this":"that"}}`);
console.log(parsed);