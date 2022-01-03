import { ref } from "@vue/reactivity";
import { getAllPosts } from '../firebase/config';

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const res = await getAllPosts();
            posts.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id };
            });
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };
    return {
        posts, error, load
    };
};

export default getPosts;