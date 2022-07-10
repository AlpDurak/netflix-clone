import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="layout_container">
      {/* Layout (footer will be added) */}
      <Navbar />
      {children}
    </div>
  );
}
