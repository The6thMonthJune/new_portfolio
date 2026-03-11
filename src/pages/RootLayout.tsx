import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
    return(
        <div className="min-h-screen bg-zinc-950 text-white">
            <header className="border-b border-zinc-800">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                    <Link to="/" className="text-lg font-bold">
                        Chwoon Chung Portfolio
                    </Link>
                    <nav className="flex gap-6 text-sm text-zinc-300">
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Contact</Link>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-10">
                <Outlet />
            </main>
        </div>
    )
}