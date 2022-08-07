import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import logo from "./images/logo.svg";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "Spending - Last 7 days",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-5 flex flex-col justify-center h-screen">
        <article className="bg-soft-red p-8 rounded-2xl shadow flex justify-between">
          <h2 className="font-bold text-white text-3xl ">
            <span className="block text-base font-normal">My Balance</span>
            $921.48
          </h2>
          <img src={logo} alt="" />
        </article>

        <article className="bg-white p-8 mt-8 rounded-2xl shadow">
          <article className="pb-8">
            <h1 className="font-bold text-2xl md:text-3xl mb-5">
              Spending Last - 7 days
            </h1>
            <Bar data={state} />
          </article>

          <article className="pt-8 border-t border-slate-200 flex justify-between items-end">
            <h2 className="font-bold text-4xl ">
              <span className="font-normal text-base block opacity-50">
                Total this month
              </span>
              $478.33
            </h2>

            <h3 className="font-normal text-base text-end ">
              <span className="font-bold block">+2.4%</span>
              <span className="opacity-50">from last month</span>
            </h3>
          </article>
        </article>
      </div>
    </>
  );
}

export default App;
