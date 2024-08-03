import React from "react";
import CategoryTitleTable from "./CategoryTitleTable";
import { ICategory } from "@/app/_types/category";
import NoItemTable from "../../Modules/NoItemTable";
import Pagination from "../../Modules/Pagination";
import { SHOW_IN_PAGE } from "@/app/_constants/gobalVariables";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {
  categories: ICategory[],
  categoriesCount: number
}

const CategoryList = ({ categories, categoriesCount }: CategoryListProps) => {
  return <div className='rounded-xl bg-white dark:bg-primary-900 dark:shadow-none dark:divide-primary-800 dark:border-primary-800 flex flex-col border divide-y divide-primary-0 border-primary-50 overflow-hidden'>
    <CategoryTitleTable />
    {categories.length > 0 ? (<>
      {categories.map((category, i) => (
        <CategoryItem key={String(category._id)} category={category} index={i + 1} />
      ))}
    </>) : (<NoItemTable text='دسته بندی' />)}
    < Pagination sourceCount={categoriesCount} showInPage={SHOW_IN_PAGE} />
  </div>
};

export default CategoryList;
