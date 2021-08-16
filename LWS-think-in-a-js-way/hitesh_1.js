let User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;

    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`);
    };
};

