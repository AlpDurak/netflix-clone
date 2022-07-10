import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="layout_container">
      <Navbar />
      {children}
    </div>
  );
}
