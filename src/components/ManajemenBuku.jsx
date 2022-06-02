import React, { useState, useEffect } from "react";
import TabelBuku from "./TabelBuku";
import axios from "axios"

function ManajemenBuku() {
    // PART DATA
    const [formMode, setForMode] = useState("");
    const [books, setBooks] = useState([]);
    // PART EVENT HANDLING
    function showCreateForm() {
        setForMode("show");
    }
    function showEditForm() {
        setForMode("show")
    }
    
    useEffect(() => {
        retrieveData();
    }, []);

    function retrieveData() {
        axios.get("http://localhost:4000/book")
            .then((response) => { setBooks(response.data) })
            .catch(function (error) { console.log(error.response.data) })
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>

            <button className="btn btn-sm btn-primary my-2" onClick={showCreateForm}>
                Tambah Buku
            </button>

            {/* input form */}
            {formMode === "show" && (
            <div id="form" className="card py-2 my-3 bg-secondary">
                <div className="card-body">
                    <h4>Form Buku</h4>
                    <form className="row">
                        <div className="col-6">
                            <input 
                                type="text"
                                name="judul"
                                className="form-control mx-2"
                                placeholder="Judul..."
                            
                            />
                        </div>
                        <div className="col-4">
                            <input 
                                type="text"
                                name="pengarang"
                                className="form-control mx-2"
                                placeholder="Pengarang..."
                            
                            />
                        </div>
                        <div className="col-2">
                            <input type="submit" name="btn btn-success" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
            )}
            <div id="form">

            </div>

            {/* tabel data buku */}
            <TabelBuku showEdit={showEditForm} books={books} />
            <p>{JSON.stringify(books)}</p>
        </div>
    )
}


export default ManajemenBuku;