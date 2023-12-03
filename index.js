/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employee){
    const firstName = employee[0];
    const familyName = employee[1];
    const title = employee[2];
    const payPerHour = employee[3];
    const timeInEvents = []
    const timeOutEvents = []
    const empRecord = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: timeInEvents,
        timeOutEvents: timeOutEvents
    };
    return empRecord
};

function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
};

function createTimeInEvent(timeAndDate){
    const timeInEvent = {
        type: "TimeIn",
        date: timeAndDate.split(" ")[0],
        hour: parseInt(timeAndDate.split(" ")[1])
    }
    this.timeInEvents.push(timeInEvent) 
    return this
};

function createTimeOutEvent(timeAndDate){
    const timeOutEvent = {
        type: "TimeOut",
        date: timeAndDate.split(" ")[0],
        hour: parseInt(timeAndDate.split(" ")[1])
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
};

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(e => e.date === date); 
    const timeOut = this.timeOutEvents.find(e => e.date === date);

    const hours = (timeOut.hour - timeIn.hour) / 100; 
    return hours;
};

function wagesEarnedOnDate(date){
    const wage = this.payPerHour;
    const hours = hoursWorkedOnDate.call(this, date)
    return wage * hours
}; //we are using call to explicitly set the this value of the hoursWorkedOnDate function to be the same as the this value of the wagesEarnedOnDate function, which is the current object.

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};

function findEmployeeByFirstName(records, name) {
    return records.find((employee) => employee.firstName === name);
};

function calculatePayroll(records){
    let totalPayment = 0;

  records.forEach(record => {
    const wages = allWagesFor.call(record);
    totalPayment += wages;
  }); //records are an array, so the forEach method will iterate through each record in the array and then add each's wage (through the allWagesFor function) to a total payment. The .call then turns each record into the contextual this during every loop of the forEach.

  return totalPayment;
};



