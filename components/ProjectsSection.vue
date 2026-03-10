<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="py-24 px-6 bg-slate-50 dark:bg-slate-900/30" id="projects">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-end justify-between mb-16">
        <div>
          <h2 class="text-3xl font-bold mb-4">Featured Projects</h2>
          <p class="text-slate-500 dark:text-slate-400">
            A collection of systems and applications I've engineered.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.name"
          class="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
        >
          <div
            class="h-48 bg-slate-100 dark:bg-slate-900 overflow-hidden relative"
          >
            <div
              class="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"
            ></div>
            <div
              class="w-full h-full bg-cover bg-center"
              :style="{ backgroundImage: `url(${project.image})` }"
            ></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded uppercase font-bold tracking-widest"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
