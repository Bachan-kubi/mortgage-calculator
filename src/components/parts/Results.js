import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Results = ({ data }) => {
  const { loanAmount, loanTerm, homeValue, downPayment, interestRate } = data;

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);
  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
  const pieChartData = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "Ratio of Principal and Interest",
        data: [loanAmount, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Pie data={pieChartData} />
    </div>
  );
};

export default Results;



// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Results = ({ data }) => {
//   const { loanAmount, loanTerm, homeValue, downPayment, interstRate } = data;

//   const totalLoanMonths = loanTerm * 12;
//   const interestPerMonth = interstRate / 100 / 12;
//   const monthlyPayment =
//     (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) /
//     ((1 + interestPerMonth) ** totalLoanMonths - 1);
//   const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
//   const pieChartData = {
//     labels: ["Principal", "Interest"],
//     datasets: [
//       {
//         label: "Ration of Principla and Interest",
//         data: [homeValue, totalInterestGenerated],
//         backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
//         borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
//         borderWidth: 1,
//       },
//     ],
//   };
//   return (
//     <div>
//       <Pie data={pieChartData} />
//     </div>
//   );
// };

// export default Results;
