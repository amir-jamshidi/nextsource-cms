import { getCategories } from "@/app/_actions/category"
import { ICategory } from "@/app/_types/category"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


interface SelectCategoryProps {
    categories: ICategory[], categoryID: string,
    onChange: (value: string, key: string) => void,
    disabled: boolean
}


const SelectCategory = ({ categories, categoryID, onChange, disabled }: SelectCategoryProps) => {

    return (
        <div>
            <span className='text-xs text-primary-200 px-1 tracking-tight'>دسته بندی محصول</span>
            <div className="dark:border-primary-700 border rounded-xl">
                <Select dir="rtl" disabled={disabled} defaultValue={categoryID} onValueChange={(e) => onChange(e, 'categoryID')}>
                    <SelectTrigger className="dark:bg-primary-800 h-12 rounded-xl dark:text-primary-100 dark:border-none">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" className="dark:bg-primary-800 rounded-xl dark:border-primary-700">
                        <SelectGroup>
                            <SelectLabel className="py-2.5">دسته بندی مورد نظر</SelectLabel>
                            {categories.map(category => (
                                <SelectItem className="rounded-xl py-2.5" value={String(category._id)} key={String(category._id)}>{category.title}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default SelectCategory