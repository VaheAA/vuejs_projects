import { createWebHistory, createRouter } from 'vue-router';
import PostSingle from '../components/PostSingle.vue';
import About from '../pages/About.vue';
import Main from '../pages/Main.vue';
import PostPage from '../pages/PostPage';
import PostPageWithCompositionApi from '../pages/PostPageWithCompositionApi.vue';
import PostPageWithStore from '../pages/PostPageWithStore.vue';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostSingle
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageWithCompositionApi
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;