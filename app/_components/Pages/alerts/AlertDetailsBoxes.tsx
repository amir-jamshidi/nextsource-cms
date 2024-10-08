import { IAlertsDetails } from '@/app/_types'
import { HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlineMegaphone, HiOutlineShieldExclamation } from 'react-icons/hi2'
import DetailsBox from '../../Modules/DetailsBox'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'



const AlertDetailsBoxes = ({ alertsDetails }: IAlertsDetails) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200 dark:bg-blue-800' title='پیام ها' value={`${alertsDetails.alertsCount} پیام`} icon={<HiOutlineMegaphone size={45} className='text-blue-600 dark:text-blue-300' />} />
            <DetailsBox color='bg-green-200 dark:bg-green-800' title='پیام های موفق' value={`${alertsDetails.alertsSuccessCount} پیام`} icon={<HiOutlineCheckCircle size={45} className='text-green-600 dark:text-green-300' />} />
            <DetailsBox color='bg-rose-200 dark:bg-rose-800' title='پیام های خطا' value={`${alertsDetails.alertErrorCount} پیام`} icon={<HiOutlineShieldExclamation size={45} className='text-rose-600 dark:text-rose-300' />} />
            <DetailsBox color='bg-violet-200 dark:bg-violet-800' title='پیام های هشدار' value={`${alertsDetails.alertWarningCount} پیام`} icon={<HiOutlineExclamationCircle size={45} className='text-violet-600 dark:text-violet-300' />} />
        </DetailsBoxesContainer>
    )
}

export default AlertDetailsBoxes