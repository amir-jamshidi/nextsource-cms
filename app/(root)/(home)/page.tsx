import { getSaleReport } from "@/app/_actions/order";
import DashboardContainer from "@/app/_components/Pages/dashboard/DashboardContainer";
import { IGetDashboard } from "@/app/_types";

interface HomePageProps {
  searchParams: { day: number | string }
}

export default async function HomePage({ searchParams: { day = 7 } }: HomePageProps) {
  const dashboard: IGetDashboard = await getSaleReport({ day });
  return (
    <DashboardContainer dashboard={dashboard} />
  );
}
