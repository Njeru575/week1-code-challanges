function calculateSalary() {
    // Input basic salary and benefits
    let basicSalary = prompt("Enter Basic Salary:");
    let benefits = prompt("Enter Benefits:");

    // Gross salary = Basic Salary + Benefits
    let grossSalary = basicSalary + benefits;

    // KRA Tax bands and rates 
    let tax = 0;
    
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10; // 10% tax for up to 24,000 KES
    } else if (grossSalary <= 48000) {
        tax = 2400 + (grossSalary - 24000) * 0.15; // 15% tax for 24,001 to 48,000
    } else if (grossSalary <= 72000) {
        tax = 4800 + (grossSalary - 48000) * 0.20; // 20% tax for 48,001 to 72,000
    } else {
        tax = 8800 + (grossSalary - 72000) * 0.25; // 25% tax for above 72,000
    }

    // NHIF deductions 
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else {
        nhifDeduction = 1000; // For higher salaries
    }

    // NSSF deductions 
    let nssfDeduction = grossSalary * 0.06; // 6% of gross salary 

    // Calculate the net salary
    let totalDeductions = tax + nhifDeduction + nssfDeduction;
    let netSalary = grossSalary - totalDeductions;

    // Output the details
    console.log("Gross Salary: KES " + grossSalary);
    console.log("Payee Tax: KES " + tax);
    console.log("NHIF Deduction: KES " + nhifDeduction);
    console.log("NSSF Deduction: KES " + nssfDeduction);
    console.log("Total Deductions: KES " + totalDeductions);
    console.log("Net Salary: KES " + netSalary);
}

// Call the function to test it
calculateSalary();
