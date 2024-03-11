import { defineComponent } from 'vue';

type Home = { count: number };

export default defineComponent({
    name: 'Home',
    props: {
    },
    data(): Home {
        return {
            count: 0,
        };
    },
    methods: {
        testFunc() {
            console.log(this.count);
        },
    },
});
