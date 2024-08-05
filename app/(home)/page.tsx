import { getSaleReport } from "../_actions/order";
import DashboardContainer from "../_components/Pages/dashboard/DashboardContainer";


export default async function HomePage() {

  const saleChartDetails = await getSaleReport()

  return (
    <DashboardContainer saleChartDetails={saleChartDetails} />
  );
}
