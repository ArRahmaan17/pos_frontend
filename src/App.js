import React, { useEffect } from 'react';
import SideBar from './components/Sidebar';
import { validateSession } from './helpers/helper';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chart from "react-apexcharts";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
function App() {
  let navigate = useNavigate();
  let configSales = {
    options: {
      chart: {
        id: "sales-bar"
      },
      colors: ['#94a3b8'],
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
    },
    series: [{
      data: [{
        x: 'category A',
        y: 10, goals: [
          {
            name: 'Expected',
            value: 52,
            strokeColor: '#775DD0'
          }
        ]
      }, {
        x: 'category B',
        y: 18,
        goals: [
          {
            name: 'Expected',
            value: 52,
            strokeColor: '#775DD0'
          }
        ]
      }, {
        x: 'category C',
        y: 13,
        goals: [
          {
            name: 'Expected',
            value: 52,
            strokeColor: '#775DD0'
          }
        ]
      }]
    }]
  }

  useEffect(() => {
    let statusToken = validateSession();
    if (!statusToken) {
      navigate("/");
    }
  }, []);
  return (
    <div className="App" >
      <div className='flex flex-row gap-0'>
        <SideBar />

        <div className="flex flex-col w-full dark:bg-slate-600">
          <Navbar />
          <div className='px-2 flex flex-col sm:flex-row gap-x-1'>
            <div className='w-full sm:w-3/4 lg:w-1/2'>
              <Chart options={configSales.options}
                series={configSales.series}
                type="bar"
                width="100%"
                height={300} />
            </div>
            <div className='w-full sm:w-3/12 lg:w-1/2 grid sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3'>
              <div className='sm:w-1/2 lg:w-1/4 flex bg-indigo-500 dark:bg-indigo-700 dark:shadow-slate-50/20 dark:shadow-2xl rounded-md shadow-lg min-w-full'>
                <div className='w-full flex justify-between pt-3 px-3 h-fit items-center'>
                  <div className='sm:text-xs w-2/3 text-slate-900 dark:text-slate-50 font-semibold'>Sales Today</div>
                  <div className='bg-indigo-50/25 shadow-md shadow-inherit dark:bg-indigo-50/25 rounded-md'>
                    <ShoppingCartIcon className='h-6 w-6 opacity-100 m-2 text-slate-900 dark:text-slate-50' />
                  </div>
                </div>
              </div>
              <div className='md:w-1/2 lg:w-1/4 flex bg-slate-400 border border-black rounded-md shadow-lg min-w-full'>
                test
              </div>
              <div className='md:w-1/2 lg:w-1/4 flex bg-slate-400 border border-black rounded-md shadow-lg min-w-full'>
                test
              </div>
              <div className='md:w-1/2 lg:w-1/4 flex bg-slate-400 border border-black rounded-md shadow-lg min-w-full'>
                test
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
