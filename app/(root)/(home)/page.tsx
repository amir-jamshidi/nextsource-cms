import { getSaleReport } from "@/app/_actions/order";
import DashboardContainer from "@/app/_components/Pages/dashboard/DashboardContainer";
import { IOrder } from "@/app/_types/order";

interface HomePageProps {
  searchParams: { day: number | string }
}

export interface IGetDashboard {

  recentOrders: IOrder[],
  saleChartDetails: {
    day: string,
    cash: number,
    wallet: number
  }[]
  dashboardDetails: {
    productsCount: number,
    usersCount: number,
    totalSale: number,
    totalBuy: number
  },
  categoriesChartDetails: {
    title: string,
    productCount: number
  }[]
}


export default async function HomePage({ searchParams: { day = 7 } }: HomePageProps) {

  const dashboard: IGetDashboard = await getSaleReport({ day });

  return (
    <DashboardContainer dashboard={dashboard} />
  );
}
