import { RepositoryItem } from "./RepositoryItem";



export function Repository() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>


            <ul>
                <RepositoryItem     
                repository="unform2"
                description="Forms in React"
                link="https://github.com/unform/unform"/>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}