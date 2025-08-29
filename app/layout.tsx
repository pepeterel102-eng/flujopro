export const metadata = {
  title: "FlujoPro.es - Automatización Inteligente",
  description: "Recordatorios automáticos por WhatsApp para autónomos y empresas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="p-6 bg-white shadow-md flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">🚀 FlujoPro.es</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:text-indigo-600">Inicio</a>
            <a href="/niches/lawyers" className="hover:text-indigo-600">Abogados</a>
            <a href="/niches/health" className="hover:text-indigo-600">Salud</a>
            <a href="/niches/more" className="hover:text-indigo-600">Más Nichos</a>
          </nav>
        </header>
        <main className="p-8">{children}</main>
        <footer className="p-6 text-center text-gray-500">
          © {new Date().getFullYear()} FlujoPro.es - Todos los derechos reservados
        </footer>
      </body>
    </html>
  );
}
