import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
  Link
} from 'react-router-dom'
import MainPage from './pages/MainPage';

// import PieChart from './charts/PieChart';
// import * as Chart from 'chart.js';

// const pieChart: PieChart = new PieChart('Hello Analytics Reporting API V4');

// document.getElementById('root').innerHTML = pieChart.greet();

// let ctx = document.getElementById("myChart");
// let data = {
//   labels: [
//     "Red",
//     "Blue",
//     "Yellow"
//   ],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: [
//         "#FF6384",
//         "#36A2EB",
//         "#FFCE56"
//       ],
//       hoverBackgroundColor: [
//         "#FF6384",
//         "#36A2EB",
//         "#FFCE56"
//       ]
//     }]
// };
// let myChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: data,
//   options: {
//     responsive: true
//   }
// });

ReactDOM.render(
    <Router history={browserHistory}>
      <div>
        <ul>
          <li><Link to="/analytics-reports/">Root</Link></li>
          <li><Link to="/analytics-reports/mainPage">MainPage</Link></li>
        </ul>

        <Route exact path="/" component={MainPage}/>
        <Route path="/analytics-reports/mainPage" component={MainPage}/>
      </div>
    </Router>,
    document.getElementById('root')
);
