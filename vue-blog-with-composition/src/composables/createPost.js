import { ref } from 'vue';
import { useRouter } from "vue-router";
import { addNewPost, createdAt } from '../firebase/config';

const createPost = () => {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const error = ref(null);
    const router = useRouter();

    const handleKeydown = () => {
        if (!tags.value.includes(tag.value)) {
            tag.value = tag.value.replace(/\s/, "");
            tags.value.push(tag.value);
        }
        tag.value = "";
    };
    const handleSubmit = async () => {
        const post = {
            title: title.value,
            body: body.value,
            tags: tags.value,
            createdAt: createdAt
        };
        try {
            const res = await addNewPost(post);
            title.value = '';
            body.value = '';
            tag.value = '';
            tags.value = [];

            router.push('/');
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { title, body, tag, tags, error, handleKeydown, handleSubmit };
};

export default createPost;