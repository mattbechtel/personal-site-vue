import { NavBar } from '@components/shared';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    props: {},
    data(): { tabs: Tab[] } {
        return {
            tabs: [
                {
                    title: 'About Me',
                    link: '/aboutme',
                },
                {
                    title: 'Resume',
                    link: '/resume',
                },
                {
                    title: 'Education',
                    link: '/education',
                },
            ],
        };
    },
    components: { NavBar },
});
