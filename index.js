months = ["January","February","March",
          "April","May","June", "July",
          "August","September","October",
          "November","December"]
          //getting elements by their corresponding ids
          const field1 = document.getElementById("num1");
          const field2 = document.getElementById("num2");
          const field3 = document.getElementById("num3");
          const field4 = document.getElementById("num4");
          const total  = document.getElementById("total");
          const weeklyIncome = document.getElementById("weekly");
          const yearlyIncome = document.getElementById("yearly");
          const singleMonths = document.getElementById("list") 
          //forms section
          form.addEventListener('submit',getTotals);
          form.addEventListener('submit',incomeOverTime);
          form.addEventListener('submit',incomePerMonth);
          //total amount of milk produced in liters
          function getTotals(e){
   
            const result = parseFloat(field1.value)+parseFloat(field2.value)
                           +parseFloat(field3.value)+parseFloat(field4.value)
        
            if(!isNaN(result)){
               total.innerHTML = result+ " Litres";
            }
        
            e.preventDefault();
        }
        //total amount of milk produced weekly
        function incomeWeekly(){
    
            // weekly income
            const answer = (parseFloat(field1.value)+parseFloat(field2.value)
                           +parseFloat(field3.value)+parseFloat(field4.value)) * 45 * 7;
        
            if(!isNaN(answer)){
               weeklyIncome.innerHTML = "Expected weekly income will be <br> ksh "+answer;
            }
            // Yearly income
            const response = (parseFloat(field1.value)+parseFloat(field2.value)
                             +parseFloat(field3.value)+parseFloat(field4.value)) * 45 * 7 * 52;
        
            if(!isNaN(response)){
               yearlyIncome.innerHTML = "Your yearly income will be <br> ksh "+response;
            }
        }
        //income per month on a leap year
        function incomeMonthly(){
            
            // Initialising individual months variable
    const january  = document.getElementById("january");
    const february = document.getElementById("february");
    const march    = document.getElementById("march");
    const april    = document.getElementById("april");
    const may      = document.getElementById("may");
    const june     = document.getElementById("june");
    const july     = document.getElementById("july");
    const august   = document.getElementById("august");
    const september= document.getElementById("september");
    const october  = document.getElementById("october");
    const november = document.getElementById("november");
    const december = document.getElementById("december");
        }  
        //compute january total income using the brookside rate which is 45 shillings per litre
        const jan = (parseFloat(field1.value))+parseFloat(field2.value)
                    +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 31;
        if(!isNaN(jan)){
                        january.innerHTML = "Income for January is "+jan;
 }    