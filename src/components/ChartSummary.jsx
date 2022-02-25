import React from 'react'
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  

export const ChartSummary = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: ['300', '250', '530', '437', '753', '234', '643'],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: ['300', '250', '530', '437', '753', '234', '643'],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };


ChartJS.register(ArcElement, Tooltip, Legend);

const piedata = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return (
      <>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="drop-shadow-md flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
    <Bar options={options} data={data} />
        </div>
      </div>
      <div class="drop-shadow-md p-4 lg:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
        <Bar options={options} data={data} />
        </div>
      </div>
      <div class="drop-shadow-md p-4 lg:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
        <Pie data={piedata} width={100} height={300} />
        </div>
      </div>
    </div>
  </div>
</section>
      </>
  )
}

export default ChartSummary