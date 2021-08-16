function modifier(str, ...values) {
    // console.log(str);
    // console.log(values);

    const m = str.reduce((prev, curr) => {
        return prev + curr + (values.length ? "Mr." + values.shift() : "")
    }, "");

    return m;
}

var p1 = 'Sakib';
var p2 = 'Tamim';

console.log(modifier`We have ${p1} and ${p2} in our team`);
