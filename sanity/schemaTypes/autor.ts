import {defineField, defineType} from 'sanity'
import {UserIcon} from 'lucide-react'

// Поля вне fields задаем для самого Sanity, массив в fields описывает сущность (модель, интерфейс)
export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            type: 'number'
        }),
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'username',
            type: 'string'
        }),
        defineField({
            name: 'email',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'url'
        }),
        defineField({
            name: 'bio',
            type: 'text'
        }),
    ],
    preview: {
        select: {
            title: 'name',
        }
    }
})
