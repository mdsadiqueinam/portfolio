<script setup>
defineProps({
  personalInfo: {
    type: Object,
    required: true,
  },
  contacts: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <footer
    class="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 px-6"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-primary rounded-lg text-white">
              <span class="material-symbols-outlined">code</span>
            </div>
            <span class="text-xl font-bold tracking-tight uppercase">{{
              personalInfo.name
            }}</span>
          </div>
          <p class="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
            High-performance full-stack development for companies that value
            speed, quality, and maintainability.
          </p>
          <div class="flex gap-4">
            <a
              v-for="contact in contacts.filter((c) => c.link)"
              :key="contact.type"
              :href="contact.link"
              class="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="material-symbols-outlined text-xl">{{
                contact.icon
              }}</span>
            </a>
          </div>
        </div>
        <div>
          <h4
            class="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-slate-400"
          >
            Navigation
          </h4>
          <ul class="space-y-4">
            <li>
              <a
                class="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                href="#experience"
                >Experience</a
              >
            </li>
            <li>
              <a
                class="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                href="#projects"
                >Projects</a
              >
            </li>
            <li>
              <a
                class="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                href="#skills"
                >Skills</a
              >
            </li>
            <li>
              <a
                class="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                href="#services"
                >Services</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4
            class="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-slate-400"
          >
            Location
          </h4>
          <div
            class="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4"
          >
            <span class="material-symbols-outlined text-primary"
              >location_on</span
            >
            <span>Remote / Globally Available</span>
          </div>
          <div
            class="h-32 w-full rounded-xl bg-slate-200 dark:bg-slate-800 relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
              :style="{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop)',
              }"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-slate-500 dark:text-slate-500 text-sm">
          © 2024 {{ personalInfo.name }}. All rights reserved.
        </p>
        <div class="flex gap-8 text-sm text-slate-500">
          <a class="hover:text-primary" href="#">Privacy Policy</a>
          <a class="hover:text-primary" href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
