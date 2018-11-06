var userInfo = {
    name: {
        first: {
            a: 1
        },
        last: 2
    },
    user: {
        user: 1
    }
};

let {
    user: { user }
} = userInfo;
//console.log(user); // 1

if (false) {
    var {
        name: {
            first: { a }
        }
    } = userInfo;
}

//console.log(name); // ReferenceError
//console.log(first); // ReferenceError
console.log(a); // 1
