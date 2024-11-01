import { Logo } from "../components/Logo";

export function Home() {
    return (
        <div className="container">
            <Logo />
            <p>This is my react app!</p>
            <p>Edit <span className="highlight">src/cef/views/Home.tsx</span> to begin editing the webview</p>
        </div>
    );
}
