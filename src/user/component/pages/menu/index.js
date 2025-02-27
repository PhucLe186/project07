import React, { useState } from "react";
import { data } from "../../../../data";
import "../../../../css/product.css";

export default function Menu() {
  const [category, setCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState(""); // Lưu từ khóa tìm kiếm

  // Lọc sản phẩm theo danh mục
  const filteredData = data
    .filter((item) => category === "Tất cả" || item.categoryName === category)
    .filter((item) => item.courseName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container">
      <h1 className="text-center my-4 text-white">Menu</h1>

      {/* Ô tìm kiếm */}
      <div className="flex justify-center mb-4">
        <input
  type="text"
  placeholder="🔍 Tìm kiếm món ăn..."
  className="px-4 py-2 rounded-lg border border-gray-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-1/2"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
      </div>

      {/* Bộ lọc danh mục */}
      <div className="flex justify-center gap-4 mb-6">
        {["Tất cả", "Monchinh", "Montrangmieng"].map((cat) => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300
              ${category === cat ? "bg-red-700 text-white scale-105" : "bg-gray-300 hover:bg-red-400 text-white"}
            `}
            onClick={() => setCategory(cat)}
          >
            {cat === "Tất cả" ? "📌 Tất cả" : cat === "Monchinh" ? "🍜 Món Chính" : "🍰 Tráng Miệng"}
          </button>
        ))}
      </div>

      {/* Hiển thị sản phẩm */}
      <div className="row">
        {filteredData.length > 0 ? (
          filteredData.map((course, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" key={index}>
              <div className="card">
                <img src={course.imageUrl} className="card-img-top object-cover" alt={course.courseName} />
                <div className="card-body">
                  <h5 className="card-title">{course.courseName}</h5>
                  <p className="card-text">{course.metaDiscription}</p>
                  <div className="flex justify-center mt-4">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-xl transition duration-300 shadow-md">
                    🍽️ Đặt món
                  </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">Không tìm thấy món ăn nào!</p>
        )}
      </div>
    </div>
  );
}
