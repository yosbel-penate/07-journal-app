export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: daybook */ '@/modules/daybook/layauts/DayBookLayout.vue'),
    children:[
        {
            path:'',
            name: 'no-entry',
            component: ()=> import(/* webpackChunkName: daybook */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path:':id',
            name: 'entry',
            component: ()=> import(/* webpackChunkName: daybook */ '@/modules/daybook/views/EntryView.vue'),
        }
    ]
}