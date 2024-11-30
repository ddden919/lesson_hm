function bar(){
console.log(myname);
}

function foo(){
    var myname = 'foo';
    bar();
    console.log(myname);
}

var myname = 'bar';
foo();