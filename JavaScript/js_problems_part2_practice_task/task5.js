 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        function calculateTotalMonthlySalary(employees)
        {
         let totalMonthlySalary=0;
         for(emp of employees){
          const  currentSalary=emp.starting+ emp.increment*emp.experience;
          totalMonthlySalary=totalMonthlySalary+currentSalary;
         }
         return totalMonthlySalary;
        }
        const totalSalary=calculateTotalMonthlySalary(employees)
        console.log(totalSalary);
