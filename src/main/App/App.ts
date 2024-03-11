import { NavBar } from '@components/shared';
import { NavBarItem } from '@models';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    props: {},
    data(): { tabs: NavBarItem[] } {
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
