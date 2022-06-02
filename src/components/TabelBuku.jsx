import React from "react";
function TabelBuku({ showEdit, books }) {
    function editData() {
        showEdit();
    }

    return (
        <div>
            <h4>Tabel Data Buku</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>No.</td>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th className="col-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{book.judul}</td>
                        <td>{book.pengarang}</td>
                        <td>
                            <button className="btn-sm btn-warning mx-2" onClick={() => editData()}>Edit</button>
                            <button className="btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TabelBuku;