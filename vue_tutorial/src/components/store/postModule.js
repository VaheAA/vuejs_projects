import axios from 'axios';

export const postModule = {
    state: () => ({
        posts: [],
        loading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 5,
        totalPages: 0,
        sortOptions: [
            {
                value: 'title',
                name: 'By name',
            },
            {
                value: 'body',
                name: 'By text',
            },
        ],
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) =>
                post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            );
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter((post) =>
                post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.loading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async fetchPosts({ state, commit }) {
            try {
                commit('setLoading', true);
                const res = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts`,
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        },
                    }
                );
                commit('setTotalPages', Math.ceil(res.headers['x-total-count'] / state.limit));
                commit('setPosts', res.data);
            } catch (err) {
                console.log(err);
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({ state, commit }) {
            try {
                commit('setPage', state.page += 1);
                const res = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts`,
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        },
                    }
                );
                commit('setTotalPages', Math.ceil(res.headers['x-total-count'] / state.limit));
                commit('setPosts', [...state.posts, ...res.data]);
            } catch (err) {
                alert(err);
            } finally {
            }
        },
    },
    namespaced: true
}; 