<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Models\Item; // Aktifkan ini jika sudah ada model database

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Simulasi data dari database
        $items = [
            [
                'id' => 1,
                'title' => 'Presentasi Proyek Alpha',
                'status' => 'Selesai',
                'date' => '2026-06-01'
            ],
            [
                'id' => 2,
                'title' => 'Analisis UI/UX',
                'status' => 'Dalam Proses',
                'date' => '2026-06-10'
            ],
            [
                'id' => 3,
                'title' => 'Riset Pasar',
                'status' => 'Tertunda',
                'date' => '2026-06-15'
            ]
        ];

        return response()->json($items);
        
        // Kode asli jika menggunakan Eloquent ORM:
        // return response()->json(Item::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validasi dan simpan item
        // return response()->json($item, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Update item berdasarkan ID
        // return response()->json($item);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Hapus item
        // return response()->json(null, 204);
    }
}
