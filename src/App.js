import React, { useState, useEffect } from "react";
import "./App.css";
import aegis from "./Data.json";

export default function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="App">
      <h1>Kelompok 08</h1>
      <h1>Pencarian data OnkeyUp</h1>
      <input
        type="text"
        value={keyword}
        onChange={event => setKeyword(event.target.value)}
        placeholder="Masukkan NIM Mahasiswa Aegis"
      />
      {
        aegis.filter(post => {
          if (keyword === '') {
            return null;
          } else if (post.nim == keyword) {
            return post;
          }
        }).map((post) => (
          <div className="box" key={post.nim}>
            <h1>{post.nama_lengkap}</h1>
            <h2>Nama Lengkap : {post.nama_lengkap}</h2>
            <h2>Nama Panggilan : {post.nama_panggilan}</h2>
            <h2>TTL : {post.tanggal_lahir}</h2>
            <h2>Email : {post.email}</h2>
            <h2>Hobi : {post.hobi}</h2>
            <h2>Id_Line : {post.id_line}</h2>
            <h2>Nomor Telepon : {post.nomor_telepon}</h2>
          </div>
        ))
      }
    </div>
  );
}
