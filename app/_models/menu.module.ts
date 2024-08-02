import { IMenu } from '@/app/_types/menu'
import { model, models, Schema } from 'mongoose'

const menuSchema = new Schema<IMenu>({
    title: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    products: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        default: []
    }
}, { timestamps: true })

const menuModel = models.Menu || model('Menu', menuSchema);

export default menuModel