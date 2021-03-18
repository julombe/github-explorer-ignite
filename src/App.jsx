
import { Counter } from './components/Counter';
import { RepositoryLIst } from './components/RepositoryLIst';
import './styles/global.scss'; // importa o arquivo css

export function App() {
    return (
        <>
            <RepositoryLIst />
            <Counter />
        </>
    )
}