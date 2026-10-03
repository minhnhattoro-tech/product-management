import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Product from "./product";
import "./App.css";

const menuItems = [
  { name: "Trang chủ", path: "/trang-chu" },
  { name: "Sản phẩm", path: "/san-pham" },
  { name: "Máy tính", path: "/may-tinh" },
  { name: "Khách hàng", path: "/khach-hang" },
  { name: "Cài đặt", path: "/cai-dat" },
];

function AppContent() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`dashboard ${isDark ? "dashboard-dark" : ""}`}>
      <aside className="sidebar">
        <div className="sidebar-title">HỆ THỐNG</div>
        <nav className="sidebar-nav" aria-label="Điều hướng chính">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item${isActive ? " nav-item-active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-pressed={isDark}
          onClick={() => setIsDark((current) => !current)}
        >
          Giao diện: {isDark ? "Tối" : "Sáng"}
        </button>
      </aside>

      <main className="main-content">
        <Routes>
          {/* Mặc định khi truy cập "/" sẽ chuyển hướng sang "/trang-chu" */}
          <Route path="/" element={<Navigate to="/trang-chu" replace />} />

          <Route
            path="/trang-chu"
            element={<h1>Nội dung Trang chủ</h1>}
          />
          <Route
            path="/san-pham"
            element={
              <>
                <h1>Nội dung Sản phẩm</h1>
                <Product />
              </>
            }
          />
          <Route
            path="/may-tinh"
            element={<h1>Nội dung Máy tính</h1>}
          />
          <Route
            path="/khach-hang"
            element={<h1>Nội dung Khách hàng</h1>}
          />
          <Route
            path="/cai-dat"
            element={<h1>Nội dung Cài đặt</h1>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}