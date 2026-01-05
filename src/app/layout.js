import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-outfit',
});

export const metadata = {
    title: 'Instituto Educativo Excelencia',
    description: 'Colegio bilingüe enfocado en valores, excelencia académica e innovación tecnológica.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
            <body className="bg-background-alt text-primary-light min-h-screen flex flex-col font-sans">
                <Header />
                <main id="main-content" className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
