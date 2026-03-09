<script setup>
defineProps({
  testimonials: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="py-24 px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-16">Client Voices</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="relative p-10 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem]"
        >
          <span
            class="material-symbols-outlined absolute top-6 right-10 text-6xl text-primary/10 select-none"
            >format_quote</span
          >
          <p
            class="text-lg text-slate-700 dark:text-slate-300 relative z-10 mb-8 italic"
          >
            "{{ testimonial.quote }}"
          </p>
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center"
            >
              <span class="material-symbols-outlined text-slate-500"
                >person</span
              >
            </div>
            <div>
              <h4 class="font-bold">{{ testimonial.name }}</h4>
              <p class="text-xs text-slate-500 uppercase tracking-wider">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
