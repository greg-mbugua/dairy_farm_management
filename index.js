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
               weeklyIncome.innerHTML = "Your weekly income will be <br> ksh "+answer;
            }
            // Yearly income
            const response = (parseFloat(field1.value)+parseFloat(field2.value)
                             +parseFloat(field3.value)+parseFloat(field4.value)) * 45 * 7 * 52;
        
            if(!isNaN(response)){
               yearlyIncome.innerHTML = "Your yearly income will be <br> ksh "+response;
            }
        }      