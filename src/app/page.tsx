import Content from "./component/Content";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
