const user = {
    username: "Satyam",
    price: 999,
    welcomeMessage: function(){
        console.log(`Hello ${this.username}`);
        
    }
}

user.welcomeMessage()
user.username="Potter"
user.welcomeMessage()

function o(){
    console.log(this);
    
}
o()


const fun1 = () => {
    console.log("hello");
}

const fun2 = () => ("hello1")  //one line code
const fun3 = () => (user)  //one line code

fun1()
console.log(fun2());
console.log(fun3());
