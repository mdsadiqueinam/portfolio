<script setup>
defineProps({
  summary: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="py-20 bg-slate-50 dark:bg-slate-900/50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div class="md:col-span-1">
          <h2 class="text-3xl font-bold mb-4">Professional Summary</h2>
          <div class="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <div class="md:col-span-2">
          <p
            class="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light italic"
          >
            "{{ summary }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
