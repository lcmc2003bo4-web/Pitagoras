import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Instituto Educativo Excelencia',
    description: 'Colegio bilingüe enfocado en valores, excelencia académica e innovación tecnológica.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                {/* Fonts are loaded here or could be optimized with next/font */}
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Header />
                <main id="main-content">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
