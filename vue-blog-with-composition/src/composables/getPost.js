import {ref} from 'vue';
import {getSinglePost} from '../firebase/config';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await getSinglePost(id);
      if (!res.exists) {
        throw Error('post does not exist');
      }
      post.value = {...res.data(), id: res.id};
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return {
    post,
    error,
    load
  };
};

export default getPost;
