import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export interface Tab {
    title: string;
    link: string;
}

export default defineComponent({
    name: 'NavBar',
    props: {
        tabs: {
            type: Array as PropType<Tab[]>,
            required: true,
        },
    },
});
