'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, UserCheck, Lock } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="PT WILDHAN BANGUN SEJAHTERA Logo" 
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">PT WILDHAN BANGUN SEJAHTERA</h1>
                  <p className="text-xs text-gray-600">Konstruksi Jalan Raya</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              PT WILDHAN BANGUN SEJAHTERA berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <UserCheck className="h-6 w-6 mr-3 text-blue-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Selamat datang di PT WILDHAN BANGUN SEJAHTERA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
                </p>
                <p>
                  Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <Database className="h-6 w-6 mr-3 text-blue-600" />
                  Pengumpulan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Kami dapat mengumpulkan informasi pribadi Anda melalui berbagai cara, termasuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Informasi Kontak:</strong> Nama, alamat email, nomor telepon, dan alamat fisik</li>
                  <li><strong>Informasi Perusahaan:</strong> Nama perusahaan, jabatan, dan informasi bisnis terkait</li>
                  <li><strong>Informasi Proyek:</strong> Detail proyek, spesifikasi teknis, dan kebutuhan konstruksi</li>
                  <li><strong>Informasi Penggunaan:</strong> Data tentang bagaimana Anda menggunakan website dan layanan kami</li>
                  <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, dan informasi perangkat</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <Eye className="h-6 w-6 mr-3 text-blue-600" />
                  Penggunaan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Kami menggunakan informasi pribadi Anda untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Menyediakan layanan konstruksi jalan raya yang Anda minta</li>
                  <li>Mengkomunikasikan informasi tentang proyek dan layanan kami</li>
                  <li>Memproses permintaan dan penawaran harga</li>
                  <li>Meningkatkan kualitas layanan dan website kami</li>
                  <li>Mengirimkan informasi penting terkait proyek</li>
                  <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <Lock className="h-6 w-6 mr-3 text-blue-600" />
                  Perlindungan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  PT WILDHAN BANGUN SEJAHTERA berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Enkripsi Data:</strong> Menggunakan teknologi enkripsi untuk melindungi data sensitif</li>
                  <li><strong>Akses Terbatas:</strong> Hanya personel yang berwenang yang dapat mengakses data pribadi</li>
                  <li><strong>Keamanan Server:</strong> Server yang aman dengan firewall dan sistem deteksi intrusi</li>
                  <li><strong>Backup Rutin:</strong> Backup data secara rutin untuk mencegah kehilangan data</li>
                  <li><strong>Update Keamanan:</strong> Sistem keamanan yang selalu diperbarui</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Berbagi Data</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Diperlukan untuk menyediakan layanan yang Anda minta</li>
                  <li>Diperlukan untuk kepatuhan hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                  <li>Dengan mitra bisnis tepercaya yang membantu kami menyediakan layanan</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Hak Anda</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Mengakses Data:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Mengoreksi Data:</strong> Memperbarui atau mengoreksi data yang tidak akurat</li>
                  <li><strong>Menghapus Data:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Membatasi Pengolahan:</strong> Membatasi cara kami menggunakan data Anda</li>
                  <li><strong>Menarik Persetujuan:</strong> Menarik persetujuan untuk pengolahan data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Kebijakan Cookie</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Website kami menggunakan cookie untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis traffic website</li>
                  <li>Mempersonalisasi pengalaman pengguna</li>
                  <li>Menyediakan fitur keamanan</li>
                </ul>
                <p className="mt-4">
                  Anda dapat mengatur browser untuk menolak cookie atau memberi tahu saat cookie dikirim.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan data pribadi Anda, silakan hubungi kami:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>PT WILDHAN BANGUN SEJAHTERA</strong></p>
                  <p className="mb-2">📍 Jl. Selayar, Kel. Liluwo, Kec. Kota Tengah</p>
                  <p className="mb-2">Kota Gorontalo, Provinsi Gorontalo 96114</p>
                  <p className="mb-2">📞 0877-2988-7781</p>
                  <p>📧 info@wildhanbangunsejahtera.co.id</p>
                </div>
              </CardContent>
            </Card>

            {/* Update Policy */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Pembaruan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini dengan tanggal "Terakhir Diperbarui". Kami menyarankan Anda untuk meninjau kebijakan ini secara berkala.
                </p>
                <p className="mt-4">
                  <strong>Terakhir Diperbarui:</strong> 1 Januari 2024
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="PT WILDHAN BANGUN SEJAHTERA Logo" 
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">PT WILDHAN BANGUN SEJAHTERA</h3>
                  <p className="text-gray-400 text-sm">Konstruksi Jalan Raya Profesional</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan konstruksi terpercaya yang berfokus pada pembangunan infrastruktur jalan raya berkualitas tinggi di seluruh Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Konstruksi Jalan Raya</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Pengaspalan Jalan</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Infrastruktur Jalan</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Maintenance Jalan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT WILDHAN BANGUN SEJAHTERA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}