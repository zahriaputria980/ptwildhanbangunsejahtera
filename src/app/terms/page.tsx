'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Gavel, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
            <Gavel className="h-16 w-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Syarat dan ketentuan penggunaan layanan PT WILDHAN BANGUN SEJAHTERA
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
                  <FileText className="h-6 w-6 mr-3 text-blue-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Selamat datang di PT WILDHAN BANGUN SEJAHTERA. Syarat dan Ketentuan ini mengatur penggunaan layanan konstruksi jalan raya yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
                </p>
                <p>
                  Jika Anda tidak setuju dengan syarat dan ketentuan ini, harap jangan menggunakan layanan kami.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-blue-600" />
                  Layanan Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  PT WILDHAN BANGUN SEJAHTERA menyediakan layanan konstruksi jalan raya meliputi:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Konstruksi Jalan Raya:</strong> Pembangunan jalan baru dengan standar nasional</li>
                  <li><strong>Pengaspalan Jalan:</strong> Jasa pengaspalan hotmix dan surface treatment</li>
                  <li><strong>Infrastruktur Pendukung:</strong> Drainase, trotoar, dan fasilitas pendukung jalan</li>
                  <li><strong>Maintenance Jalan:</strong> Perawatan dan perbaikan jalan berkala</li>
                  <li><strong>Konsultasi Teknis:</strong> Konsultasi perencanaan dan desain jalan</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Tanggung Jawab Pengguna</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Sebagai pengguna layanan kami, Anda bertanggung jawab untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memenuhi kewajiban pembayaran sesuai kesepakatan</li>
                  <li>Mematuhi peraturan dan izin yang berlaku</li>
                  <li>Memberikan akses yang memadai untuk pelaksanaan proyek</li>
                  <li>Berkomunikasi secara profesional dengan tim kami</li>
                  <li>Melaporkan masalah atau keluhan secara tertulis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Syarat Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Syarat pembayaran untuk layanan kami:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Uang Muka (DP):</strong> Minimal 30% dari total nilai kontrak</li>
                  <li><strong>Pembayaran Progresif:</strong> Sesuai tahapan penyelesaian proyek</li>
                  <li><strong>Pelunasan:</strong> Sebelum serah terima proyek</li>
                  <li><strong>Metode Pembayaran:</strong> Transfer bank atau tunai dengan bukti resmi</li>
                  <li><strong>Keterlambatan Pembayaran:</strong> Dikenakan denda 2% per bulan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Project Timeline */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Jangka Waktu Proyek</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Ketentuan mengenai jangka waktu proyek:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Waktu penyelesaian ditentukan dalam kontrak</li>
                  <li>Perpanjangan waktu dapat dilakukan dengan persetujuan tertulis</li>
                  <li>Keterlambatan karena cuaca ekstrem atau force majeur akan dikompensasi</li>
                  <li>Keterlambatan karena pihak klien menjadi tanggung jawab klien</li>
                  <li>Progress report akan disampaikan secara berkala</li>
                </ul>
              </CardContent>
            </Card>

            {/* Warranty */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Garansi</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  PT WILDHAN BANGUN SEJAHTERA memberikan garansi untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Struktur Jalan:</strong> Garansi 2 tahun untuk kerusakan struktural</li>
                  <li><strong>Pengaspalan:</strong> Garansi 1 tahun untuk kerusakan permukaan</li>
                  <li><strong>Drainase:</strong> Garansi 1 tahun untuk fungsi drainase</li>
                  <li>Garansi tidak berlaku untuk kerusakan akibat penggunaan tidak wajar</li>
                  <li>Klaim garansi harus diajukan secara tertulis dengan bukti foto</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-3 text-orange-500" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  PT WILDHAN BANGUN SEJAHTERA tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                  <li>Keterlambatan akibat faktor di luar kendali kami</li>
                  <li>Kerusakan akibat bencana alam atau force majeur</li>
                  <li>Kerugian akibat perubahan desain oleh klien</li>
                  <li>Klaim yang melebihi nilai kontrak proyek</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Ketentuan hak kekayaan intelektual:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Desain dan rencana teknis tetap menjadi milik PT WILDHAN BANGUN SEJAHTERA</li>
                  <li>Klien mendapatkan hak penggunaan untuk proyek tertentu</li>
                  <li>Dilarang menyalin atau mendistribusikan desain tanpa izin tertulis</li>
                  <li>Foto dan dokumentasi proyek dapat digunakan untuk portofolio</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Penghentian Kontrak</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Kontrak dapat dihentikan jika:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Salah satu pihak melanggar syarat dan ketentuan</li>
                  <li>Terjadi force majeur yang membuat proyek tidak dapat dilanjutkan</li>
                  <li>Kedua belah pihak sepakat untuk menghentikan proyek</li>
                  <li>Penghentian sepihak akan dikenakan sanksi sesuai kontrak</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Penyelesaian Sengketa</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Sengketa akan diselesaikan melalui:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Negosiasi:</strong> Upaya penyelesaian secara musyawarah</li>
                  <li><strong>Mediasi:</strong> Melalui mediator profesional jika diperlukan</li>
                  <li><strong>Arbitrase:</strong> Melalui Badan Arbitrase Nasional Indonesia (BANI)</li>
                  <li><strong>Pengadilan:</strong> Pengadilan Negeri Gorontalo sebagai yurisdiksi terakhir</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="mb-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Untuk pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami:
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
                <CardTitle className="text-2xl text-blue-900">Pembaruan Syarat dan Ketentuan</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  PT WILDHAN BANGUN SEJAHTERA berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif setelah diumumkan melalui website atau pemberitahuan langsung kepada klien.
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