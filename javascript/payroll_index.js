const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });

    const text = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    text.addEventListener('input',function(){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(text.value))
        textError.textContent = "";
        else textError.textContent = "Name is Incorrect";
    });

    const date = document.querySelector("#startDate");
    const dateError = document.querySelector(".error");
    let actualDate = new Date(date);
    const joiningDate = new Date("2023-02-02");
    let newDate = new Date();
    newDate.setDate(joiningDate.getDate() + 30);
    date.addEventListener('input',function(){
        if (new Date(date) > new Date() || joiningDate > new Date(date) || new Date(date) > newDate ) {
        textError.textContent = "Date is Incorrect";
      }
      else{
        textError.textContent = "";     
     }
    });


    let day = document.querySelector('#day');
    let month = document.querySelector('#month');
    let year = document.querySelector('#year');
    day.addEventListener('input', checkDate);
    month.addEventListener('input', checkDate);
    year.addEventListener('input', checkDate);
    function checkDate() {
        let dateError = document.querySelector("startDate-error");
        let date = day.value + " " + month.value + " " + year.value;
        try {
            checkStartDate(new Date(Date.parse(date)));
            dateError.textContent = "";
        } catch (e) {
            dateError.textContent = e;
        }
    
    }
    
    function checkStartDate(startDate) {
        let currentDate = new Date();
        if (startDate > currentDate) {
            throw new Error("Start date is a future date")
        }
        let differnce = Math.abs(currentDate.getTime() - startDate.getTime());
        let date = differnce / (1000 * 60 * 60 * 24);
        if (date <30) {
            throw new Error("Start date is beyond 30 days");
        }
    }