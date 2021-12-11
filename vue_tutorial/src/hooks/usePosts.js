import axios from 'axios';
import { ref, onMounted } from 'vue';

export function usePosts(limit) {
    const posts = ref([]);
    const totalPages = ref(0);
    const loading = ref(true);
    const fetching = async () => {
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts`,
                {
                    params: {
                        _page: 1,
                        _limit: limit,
                    },
                }
            );
            totalPages.value = Math.ceil(res.headers['x-total-count'] / limit);
            posts.value = res.data;
        } catch (err) {
            alert(err);
        } finally {
            loading.value = false;
        }
    };
    onMounted(fetching);
    return {
        posts, loading, totalPages
    };
}