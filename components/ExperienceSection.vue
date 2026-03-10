<script setup>
defineProps({
  experience: {
    type: Array,
    required: true,
  },
  education: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="py-24 px-6" id="experience">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
      <!-- Experience Column -->
      <div>
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <span class="material-symbols-outlined text-primary">work</span>
          Experience
        </h2>
        <div
          class="space-y-12 relative before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800"
        >
          <div
            v-for="job in experience"
            :key="job.company"
            class="relative pl-12 group"
          >
            <div
              class="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background-light dark:bg-background-dark border-4 border-primary z-10"
            ></div>
            <div
              class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm group-hover:shadow-md transition-shadow"
            >
              <span
                class="text-xs font-bold text-primary uppercase tracking-widest"
                >{{ job.period }}</span
              >
              <h3 class="text-xl font-bold mt-1">{{ job.company }}</h3>
              <p class="text-slate-500 dark:text-slate-400 text-sm mb-4">
                {{ job.title }}
              </p>
              <ul
                class="text-slate-600 dark:text-slate-300 text-sm space-y-2 list-disc pl-4"
              >
                <li
                  v-for="(responsibility, index) in job.responsibilities"
                  :key="index"
                >
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Education Column -->
      <div>
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-3">
          <span class="material-symbols-outlined text-primary">school</span>
          Education
        </h2>
        <div class="space-y-8">
          <div
            v-for="edu in education"
            :key="edu.degree"
            class="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700"
          >
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold">{{ edu.degree }}</h3>
                <p class="text-slate-500 dark:text-slate-400">
                  {{ edu.institution }}
                </p>
              </div>
              <span
                class="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full whitespace-nowrap"
                >{{ edu.period }}</span
              >
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-sm">
              {{ edu.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
