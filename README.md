# Week-1-Code-Challenge-Toy-Problems

To run the codes:
1.Open the Week-1-Code-Challenge folder with your browser.
2.Open your developer tools by right clicking then clicking inspect.
3.Open your browser's console.
4.Copy the code from the challenge.
5.Paste the code to the console and press ENTER.
6.Fill in the prompts and wait for the output.

Challenge 1
student-grade-generator.js grades a user according to the marks entered into the prompt and logs the output into the console. The marks entered should be between 0 and 100.
Failure to adhere to the condition of being between 0 and 100 outputs an error message to the console.
The output corresponds to the grades as shown below:
A - Greater than 79
B - 60 to 79
C - 50 to 59
D - 40 to 49
E - Less than 40

Challenge 2
speed-detector.js helps in regulating drivers' speeds by taking the speed of a car entered into the prompt.
If carSpeed is less than "70" it outputs "Ok" to the console.
Otherwise, for every 5 km/s above the speed limit (70), it gives the driver one demerit point and print the total number of demerit points.

Challenge 3
net-salary-calculator.js helps in calculating an individual's net-salary by taking the monthly basic salary and benefits as entered into the prompt and logs them to the console.
It calculates the gross salary which is equal to the sum of the basic salary and benefits entered then logs the output to the console.
It calculates the PAYE using the rates below and logs the output to the console.

Monthly Gross Salary (Ksh) - Rate of Tax (%)
Up to 24,000 - 10.0
24,001 - 32,333 - 25.0
32,334 - 500,000 - 30.0
500,001 - 800,000 - 32.5
Above 800,000 - 35.0

It then calculates the NHIF deduction using the rates below and logs the output to the console.

Gross Salary (Ksh) - Deduction (Ksh)  
Up to 5,999 - 150  
6,000 - 7,999 - 300  
8,000 - 11,999 - 400  
12,000 - 14,999 - 500  
15,000 - 19,999 - 600  
20,000 - 24,999 - 750  
25,000 - 29,999 - 850  
30,000 - 34,999 - 900  
35,000 - 39,999 - 950
40,000 - 44,999 - 1,000
45,000 - 49,999 - 1,100
50,000 - 59,999 - 1,200
60,000 - 69,999 - 1,300
70,000 - 79,999 - 1,400
80,000 - 89,999 - 1,500
90,000 - 99,999 - 1,600
100,000 and above - 1,700

It then adds an NSSF tier 1 deduction of 420 to the total deductions and logs the output to the console.
The Net Salary is then calculated as the difference of the gross salary and the the total deductions and the result is logged to the console.
