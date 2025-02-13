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

<template>
  <div class="flex flex-col items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md w-full">

    <input
      v-model="searchQuery"
      type="text"
      placeholder="Cari icons..."
      class="border p-3 rounded-lg w-full max-w-md shadow-sm focus:ring focus:ring-blue-300"
    />
    <h1 class="note">npm install @tabler/icons-vue</h1>
    <h1 class="note">https://github.com/tabler/tabler-icons/tree/main/packages/icons-vue</h1>

    <div class="p-4 bg-white rounded-lg shadow-md w-full">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 text-sm font-bold">Size:</label>
          <input v-model="size" type="number" class="border p-2 rounded w-full mb-2 shadow-sm" />
          <input v-model="size" type="range" min="10" max="100" class="w-full accent-blue-500" />
        </div>
        <div>
          <label class="block mb-2 text-sm font-bold">Stroke Width:</label>
          <input v-model="stroke" type="number" class="border p-2 rounded w-full mb-2 shadow-sm" />
          <input v-model="stroke" type="range" min="1" max="10" class="w-full accent-blue-500" />
        </div>
      </div>

      <label class="block mt-4 mb-2 text-sm font-bold">Color:</label>
      <div class="flex items-center gap-2">
        <input v-model="color" type="text" class="border p-2 rounded w-full shadow-sm" />
        <input v-model="color" type="color" class="w-10 h-10 border rounded-lg shadow-sm" />
      </div>

      <label class="block mt-4 mb-2 text-sm font-bold">Background Settings:</label>
      <div class="flex flex-wrap items-center gap-6">
        <label class="flex items-center gap-2 text-sm font-bold">
          <input v-model="includeBackground" type="checkbox" class="border p-2 rounded shadow-sm" />
          Tambah Background
        </label>

        <label class="flex items-center gap-2 text-sm font-bold">
          <span>Warna Background</span>
          <input v-model="bgColor" type="color" class="w-10 h-10 border rounded-lg shadow-sm" />
        </label>

        <label class="flex items-center gap-2 text-sm font-bold">
          <span>Ukuran Padding</span>
          <select v-model="bgPadding" class="border p-2 rounded w-32 shadow-sm">
            <option value="p-0">p-0</option>
            <option value="p-1">p-1</option>
            <option value="p-2">p-2</option>
            <option value="p-4">p-3</option>
            <option value="p-6">p-4</option>
          </select>
        </label>

        <label class="flex items-center gap-2 text-sm font-bold">
          <span>Ukuran Radius</span>
          <select v-model="bgRadius" class="border p-2 rounded w-32 shadow-sm">
            <option value="rounded-none">None</option>
            <option value="rounded-sm">Small</option>
            <option value="rounded">Default</option>
            <option value="rounded-md">Medium</option>
            <option value="rounded-lg">Large</option>
            <option value="rounded-xl">Extra Large</option>
            <option value="rounded-full">Full</option>
          </select>
        </label>
      </div>

      <label class="block mt-4 mb-2 text-sm font-bold">Custom Tailwind Class:</label>
      <div class="flex items-center gap-2">
        <input v-model="custom" type="text" placeholder="Enter Tailwind classes..." class="border p-2 rounded w-full shadow-sm" />
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      <button
        v-for="(iconName, index) in filteredIcons"
        :key="index"
        class="relative flex flex-col items-center p-3 bg-white rounded-lg shadow-md hover:bg-gray-200 transition transform hover:scale-105 w-full"
        @click="copyToClipboard(iconName)"
      >
        <div 
          :style="includeBackground ? { backgroundColor: bgColor } : {}"
          :class="[includeBackground ? [bgPadding, bgRadius, custom] : '']"
        >
          <TablerIcon 
            :name="iconName.replace('Icon', '')" 
            :size="size" 
            :stroke="stroke" 
            :color="color" 
            class="relative"
          />
        </div>
        <p class="text-center text-xs text-gray-600 mt-2 relative">{{ `<${iconName} size="${size}" color="${color}" stroke="${stroke}" />` }}</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import * as TablerIcons from '@tabler/icons-vue';
import TablerIcon from '@/components/TablerIcon.vue';
import { Icon123 } from '@tabler/icons-vue';

const iconNames = Object.keys(TablerIcons);

const size = ref(24);
const color = ref("currentColor");
const stroke = ref(2);
const searchQuery = ref("");
const includeBackground = ref(false);
const bgColor = ref("#ffffff");
const bgPadding = ref("p-1");
const bgRadius = ref("rounded-full");
const custom = ref("");

const filteredIcons = computed(() => {
  return iconNames.filter(icon => 
    icon.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const copyToClipboard = async (iconName) => {
  const iconTag = includeBackground.value
    ? `<div class="bg-[${bgColor.value}] ${bgPadding.value} ${bgRadius.value} ${custom.value}">\n  <${iconName} size="${size.value}" color="${color.value}" stroke="${stroke.value}" />\n</div>`
    : `<${iconName} size="${size.value}" color="${color.value}" stroke="${stroke.value}" />`;
  try {
    await navigator.clipboard.writeText(iconTag);
    alert(`Copied: ${iconTag}`);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>