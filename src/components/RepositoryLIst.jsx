import { RepositoryItem } from "./RepositoryItem";



export function Repository() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>


            <ul>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}