<!--
  Icon Picker UI dengan Tabler Icons
  -----------------------------------
  Dibuat oleh: Faiz Armedi
  Tanggal: 14/02/2025
  Deskripsi: 
  Komponen ini menyediakan antarmuka pengguna untuk mencari, menyesuaikan, dan menyalin ikon dari paket @tabler/icons-vue. 
  Fitur utama meliputi:
  - Pencarian ikon berdasarkan nama
  - Pengaturan ukuran, warna, dan ketebalan stroke ikon
  - Opsi latar belakang dengan warna, padding, dan radius yang dapat disesuaikan
  - Kemampuan untuk menyalin kode ikon yang telah dikonfigurasi ke clipboard
  - Dibangun dengan Nuxt 3 dan menggunakan Tailwind CSS untuk styling yang responsif

  Dependencies:
  - Nuxt 3 (https://nuxt.com/)
  - Vue 3 (https://vuejs.org/)
  - @tabler/icons-vue (https://github.com/tabler/tabler-icons/tree/main/packages/icons-vue)
  - Tailwind CSS (https://tailwindcss.com/)
  
  Lisensi:
  - Ikon dari Tabler Icons dilisensikan di bawah MIT License (https://github.com/tabler/tabler-icons/blob/main/LICENSE)
  - Kode ini juga dapat digunakan atau dimodifikasi di bawah lisensi MIT License

  Catatan:
  - Jika menggunakan icon ini dalam proyek publik, harap berikan atribusi kepada Tabler Icons.
  - Untuk dokumentasi lebih lanjut, silakan kunjungi https://tabler-icons.io/
  - Proyek ini hanya tools pembantu untuk konsistensi icon dan mempercepat pembuatan proyek lebih besar.
  - Menggunakan Nuxt dan Tailwind CSS untuk gaya yang fleksibel dan modern.

  Hubungi:
  - armedifaiz@gmail.com
-->

<script setup>
import { defineProps, computed } from 'vue';
import * as TablerIcons from '@tabler/icons-vue';

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [String, Number], default: 24 },
  stroke: { type: [String, Number], default: 2 },
  color: { type: String, default: "currentColor" }
});

const IconComponent = computed(() => TablerIcons[`Icon${props.name}`]);
</script>

<template>
  <component 
    :is="IconComponent" 
    v-if="IconComponent" 
    :size="size" 
    :stroke="stroke" 
    :color="color"
  />
  <span v-else>⚠️ Icon {{ name }} not found</span>
</template>
