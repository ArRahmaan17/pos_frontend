import React, { useEffect, useState } from 'react';
import SideBar from './components/Sidebar';
import { getFiveDays, validateSession } from './helpers/helper';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chart from "react-apexcharts";
import { QueueListIcon, ShoppingCartIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import AnalyticCard from './components/AnalyticCard';
import CountUp from 'react-countup';
function App() {
  let navigate = useNavigate();
  let configSales = {
    options: {
      chart: {
        id: "sales-bar",
        stroke: {
          curve: 'smooth',
        },
        zoom: {
          enabled: true,
        },
        dataLabels: {
          enabled: false
        },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 2,
          blur: 5,
          color: '#fff',
          opacity: 0.8
        }
      },
      xaxis: {
        type: 'category',
        categories: getFiveDays(),
        tickPlacement: 'on',
        labels: {
          show: true
        }
      },
      colors: ['#94a3b8', '#ef4444', "#ec4899"],
    },
    series: [
      {
        name: 'Food',
        data: [1, 2, 3, 4, 5, 32, 15, 0, 30, 22]
      },
      {
        name: 'Beverage',
        data: [1, 3, 4, 5, 32, 15, 2, 0, 30, 22]
      },
      {
        name: 'Central',
        data: [1, 15, 0, 2, 5, 0, 30, 22, 3, 4]
      }
    ]
  }
  let [moneyIn, setMoneyIn] = useState(100000000)
  let [orderIn, setorderIn] = useState(100)

  useEffect(() => {
    let statusToken = validateSession();
    if (!statusToken) {
      navigate("/");
    }
  }, []);
  return (
    <div className="App overflow-hidden" >
      <div className='flex flex-row gap-0'>
        <SideBar />
        <div className="flex flex-col w-full dark:bg-slate-600">
          <Navbar />
          <div className='px-2 flex flex-col sm:flex-row gap-x-5 gap-y-1 md:gap-y-0'>
            <div className='w-full sm:w-3/4 md:w-1/2 bg-slate-50 bg-opacity-90 dark:shadow-slate-50/20 dark:shadow-2xl rounded-md shadow-lg pt-4 md:pt-8'>
              <Chart options={configSales.options}
                series={configSales.series}
                type="area"
                width="100%"
                height={300} />
            </div>
            <div className='w-full sm:w-3/12 md:w-1/2 grid grid-flow-dense grid-cols-3 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 flex-wrap gap-x-1 gap-y-1  h-fit'>
              <AnalyticCard color={"indigo"} size={'col-span-1 sm:col-span-2 sm:row-span-2'} title={"Penjualan Hari ini"} description={"*berubah saat pesanan selesai"} icon={ShoppingCartIcon} valueChange={<CountUp end={moneyIn} duration={5} prefix="Rp. " />} />
              <AnalyticCard color={"orange"} size={'sm:col-span-2 col-span-1'} title={"Pesanan Selesai"} description={"*berubah saat pesanan selesai"} icon={QueueListIcon} valueChange={<CountUp end={orderIn} duration={5} />} />
              <AnalyticCard color={"rose"} size={'sm:col-span-2 col-span-1'} title={"Total Penjualan"} description={"*berubah saat pesanan selesai"} icon={DocumentCheckIcon} valueChange={<CountUp end={orderIn} duration={5} />} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
