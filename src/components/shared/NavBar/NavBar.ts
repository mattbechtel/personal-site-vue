import { defineComponent, PropType } from 'vue';

export interface Tab {
    title: string;
    link: string;
}

export default defineComponent({
    name: 'NavBar',
    props: {
        tabs: {
            type: PropType<Tab[]>,
            required: true,
        },
    },
});
