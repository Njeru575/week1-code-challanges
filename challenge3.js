function calculateNetSalary(basicSalary, benefits) {
    
    const taxBrackets = [
        { limit: 24000, rate: 0.10 },
        { limit: 40000, rate: 0.15 },
        { limit: 60000, rate: 0.20 },
        { limit: 100000, rate: 0.25 },
        { limit: Infinity, rate: 0.30 },
    ];

    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE 
    let tax = 0;
    let remainingSalary = grossSalary;

    for (let i = taxBrackets.length - 1; i >= 0; i--) {
        const bracket = taxBrackets[i];
        if (remainingSalary > bracket.limit) {
            tax += (remainingSalary - bracket.limit) * bracket.rate;
            remainingSalary = bracket.limit;
        }
    }

    // Calculate NHIF Deduction
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else {
        nhifDeduction = 500;
    }

    // Calculate NSSF Deduction (Assumed 6% of basic salary)
    const nssfDeduction = basicSalary * 0.06; // capped at 200 KES
    const cappedNSSF = Math.min(nssfDeduction, 200);

    // Calculate Net Salary
    const totalDeductions = tax + nhifDeduction + cappedNSSF;
    const netSalary = grossSalary - totalDeductions;

    // Output results
    console.log(`Gross Salary: KES ${grossSalary}`);
    console.log(`PAYE (Tax): KES ${tax}`);
    console.log(`NHIF Deduction: KES ${nhifDeduction}`);
    console.log(`NSSF Deduction: KES ${cappedNSSF}`);
    console.log(`Total Deductions: KES ${totalDeductions}`);
    console.log(`Net Salary: KES ${netSalary}`);
}


calculateNetSalary(basicSalary, benefits);
