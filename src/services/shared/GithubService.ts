import Axios from 'axios-observable';
import { map, Observable, of } from 'rxjs';

class GithubService {
    repos: any[];

    constructor() {
        this.repos = [];
    }

    getRepositories: (username: string) => Observable<string[]> = (username) => {
        console.log(username);

        if (this.repos.length === 0) {
            return Axios.get(`https://api.github.com/users/${username}/repos`).pipe(
                map((val) => {
                    this.repos = val.data.map((data) => data.clone_url);
                    return this.repos;
                }),
            );
        }

        return of(this.repos);
    };
}

export const GithubServiceSingleton = new GithubService();
