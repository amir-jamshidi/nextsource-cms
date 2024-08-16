import { ICategory } from '@/app/_types/category';
import { models, model, Schema } from 'mongoose'

const categorySchema = new Schema<ICategory>({

    title: {
        type: String,
        required: true
    },
    titleEn: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        default: ''
    },
    href: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: false
    }

}, { timestamps: true });

const categoryModel = models.Category || model('Category', categorySchema);

export default categoryModel;