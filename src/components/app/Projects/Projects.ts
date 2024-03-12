import { GithubServiceSingleton as Github } from '@services/shared/GithubService';
import { Subscription } from 'rxjs';
import { defineComponent } from 'vue';

interface ProjectsData {
    username: string;
    repos: string[];
    subscriptions: Subscription[];
}

export default defineComponent({
    name: 'Projects',
    props: {},
    data(): ProjectsData {
        const username: string = 'mattbechtel';

        return {
            username,
            repos: [],
            subscriptions: [],
        };
    },
    created() {
        this.subscriptions.push(
            Github.getRepositories(this.username).subscribe((result) => {
                this.repos = result;
            }),
        );
    },
    beforeUnmount() {
        this.subscriptions.forEach((subsciption) => subsciption.unsubscribe());
    },
});
