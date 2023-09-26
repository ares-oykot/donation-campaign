import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import { getStoredCardsId } from "../../Utility/LocalStorage";
import { Link } from "react-router-dom";
const Statistics = () => {
  const [storedDonation, setStoredDonation] = useState([]);
  useEffect(() => {
    setStoredDonation(getStoredCardsId());
  }, []);
  const total = storedDonation.length;
  const step1 = 12 / total;
  const donate = 100 / step1;
  const remaining = 100 - donate;
  const A = donate.toFixed(2);
  const B = remaining.toFixed(2);
  const data = [
    { value: A, label: "A %" },
    { value: B, label: "B %" },
  ];

  const size = {
    width: 500,
    height: 300,
  };
  return (
    <div >
      <div className="flex justify-center mt-10">
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.label} (${item.value})`,
              arcLabelMinAngle: 45,
              data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontWeight: "bold",
            },
          }}
          {...size}
        />
      </div>
      <div className="flex justify-center mr-24 mt-10">
        <div className="text-lg font-medium flex gap-5">
        <div className="flex items-center gap-2">
            <p>Your Donation </p>
            <span><Link to="/error"><hr className="w-28 rounded-sm bg-[#02B2AF] h-4 " /></Link></span>
        </div>
        <div className="flex items-center gap-2">
            <p>Total Donation </p>
            <span><Link to="/error"><hr className="w-28 rounded-sm bg-[#2E96FF] h-4 " /></Link></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
