<script setup>
const { personalInfo } = defineProps({
  personalInfo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md"
  >
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="p-2 bg-primary rounded-lg text-white">
          <span class="material-symbols-outlined">code</span>
        </div>
        <span class="text-xl font-bold tracking-tight">{{
          personalInfo.name
        }}</span>
      </div>
      <nav class="hidden md:flex items-center gap-8">
        <a
          class="text-sm font-medium hover:text-primary transition-colors"
          href="#experience"
          >Experience</a
        >
        <a
          class="text-sm font-medium hover:text-primary transition-colors"
          href="#projects"
          >Projects</a
        >
        <a
          class="text-sm font-medium hover:text-primary transition-colors"
          href="#skills"
          >Skills</a
        >
        <a
          class="text-sm font-medium hover:text-primary transition-colors"
          href="#services"
          >Services</a
        >
      </nav>
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/cv"
          class="hidden md:flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <span class="material-symbols-outlined text-base leading-none"
            >description</span
          >
          CV
        </NuxtLink>
        <button
          class="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105 active:scale-95"
        >
          Contact Me
        </button>
      </div>
    </div>
  </header>
</template>
