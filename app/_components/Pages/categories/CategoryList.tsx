import React from "react";
import CategoryTitleTable from "./CategoryTitleTable";
import { ICategory } from "@/app/_types/category";
import NoItemTable from "../../Modules/NoItemTable";
import Pagination from "../../Modules/Pagination";
import { SHOW_IN_PAGE } from "@/app/_constants/gobalVariables";
import CategoryItem from "./CategoryItem";
import { Table } from "@/components/ui/table";

interface CategoryListProps {
  categories: ICategory[],
  categoriesCount: number
}

const CategoryList = ({ categories, categoriesCount }: CategoryListProps) => {
  return <div className='rounded-xl bg-white dark:bg-primary-900 dark:shadow-none dark:divide-primary-800 dark:border-primary-800 flex flex-col border divide-y divide-primary-0 border-primary-50 overflow-hidden'>
    {categories.length > 0 ? (<>
      <Table>
        <CategoryTitleTable />
        {categories.map((category, i) => (
          <CategoryItem key={String(category._id)} category={category} index={i + 1} />
        ))}
      </Table>
      < Pagination sourceCount={categoriesCount} showInPage={SHOW_IN_PAGE} />
    </>) : (<NoItemTable text='دسته بندی' />)}
  </div>
};

export default CategoryList;
