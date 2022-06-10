import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/Login.vue')
const Events = () => import('../views/Events.vue')
const EventDetail = () => import('../views/EventDetail.vue')
const CreateEvent = () => import('../views/CreateEvent.vue')

const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/events',
        name: 'events',
        component: Events,
    },
    {
        path: '/create-event',
        name: 'create-event',
        component: CreateEvent,
    },
    {
        path: '/event/:id',
        component: EventDetail,
    },
    {
        path: '/:catchAll(.*)',
        redirect: 'login',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !localStorage.getItem('isLoggedIn')) next({ name: 'login' })
    else next()
})

export default router