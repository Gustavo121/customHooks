import usePath from "./hooks/usePath";

export function Home() {
    const { isHome } = usePath();

    return (
        <div>
            <h1>Home</h1>
            {isHome ? <h2>Você está na Home</h2> : <h2>Você não está na home</h2>}
        </div>
    );
}