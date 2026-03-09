<script setup>
defineProps({
  skills: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="py-24 px-6" id="skills">
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-3xl lg:text-4xl font-bold mb-4">Technical Arsenal</h2>
      <p class="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
        The modern technologies I use to build world-class digital products.
      </p>
    </div>
    <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-2 text-primary font-semibold hover:bg-primary hover:text-white transition-all cursor-default"
      >
        <span class="material-symbols-outlined text-sm">{{ skill.icon }}</span>
        {{ skill.name }}
      </div>
    </div>
  </section>
</template>
