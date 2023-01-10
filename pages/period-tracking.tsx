import React from "react";
import PeriodTrackingComponent from "../src/features/periodTracking/PeriodTrackingComponent";

type Props = {};

function PeriodTracking({ }: Props) {
  const periods: any = [
    {
      startDate:'25/05/2022'
    }
  ];
  return (
    <>
      <div className="pageContainerTop">
        <div className="pageContent p-20">

          <PeriodTrackingComponent periods={periods} />

          
        </div>
      </div>
    </>
  );
}

export default PeriodTracking;
