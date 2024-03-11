import { NavBarItem } from '@models';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
    name: 'NavBar',
    props: {
        tabs: {
            type: Array as PropType<NavBarItem[]>,
            required: true,
        },
    },
});
