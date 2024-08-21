import { Schema, model, models } from 'mongoose'
import { IAdminNotification } from '../_types/adminNotification'

const adminNotificationSchema = new Schema<IAdminNotification>({
    type: {
        type: String,
        required: true
    },
    isShow: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const adminNotificationModel = models.AdminNotification || model('AdminNotification', adminNotificationSchema)

export default adminNotificationModel