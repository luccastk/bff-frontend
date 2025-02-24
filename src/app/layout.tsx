import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import HeadContent from "./component/HeadContent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="vh-100 d-flex flex-column">
        <Navbar />
        <div className="d-flex flex-grow-1">
          <Sidebar />
          <div className="container">
            <HeadContent />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
