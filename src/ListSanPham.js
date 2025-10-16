import React from "react";

const ListSanPham = () => {
  const dsSanPham = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      image:
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      image:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      image:
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      image:
        "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    },
    {
      id: 11,
      title: "Silicon Power 256GB SSD 3D NAND A55",
      price: 109,
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin",
      price: 599,
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    },
    {
      id: 14,
      title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
      price: 999.99,
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V",
      price: 9.85,
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {dsSanPham.map((sp) => (
          <div
            key={sp.id}
            style={{
              height: "320px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={sp.image}
              alt={sp.title}
              style={{
                height: "150px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ margin: "10px 0 5px", fontSize: "14px" }}>
              {sp.title}
            </h3>
            <p style={{ color: "green", fontWeight: "bold" }}>${sp.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSanPham;
