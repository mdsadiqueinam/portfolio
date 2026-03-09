<script setup>
defineProps({
  services: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="py-24 px-6 bg-primary/5" id="services">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">Core Services</h2>
        <p class="text-slate-500 dark:text-slate-400">
          Expertise tailored to help your business scale digital boundaries.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:border-primary transition-all group"
        >
          <div
            class="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
          >
            <span class="material-symbols-outlined text-3xl">{{
              service.icon
            }}</span>
          </div>
          <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
