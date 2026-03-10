<script setup>
defineProps({
  personalInfo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="relative py-20 lg:py-32 px-6 overflow-hidden">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div class="space-y-8">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-primary"
            ></span>
          </span>
          Available for hire
        </div>
        <h1
          class="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight"
        >
          Crafting Digital
          <span class="text-primary">Excellence</span>
          through Code.
        </h1>
        <p
          class="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
        >
          {{ personalInfo.heroDescription }}
        </p>
        <div class="flex flex-wrap gap-4 pt-4">
          <button
            class="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-base font-bold flex items-center gap-2 group transition-all"
          >
            Let's Talk
            <span
              class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform"
              >arrow_forward</span
            >
          </button>
          <button
            class="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 px-8 py-4 rounded-xl text-base font-bold transition-all"
          >
            View Projects
          </button>
        </div>
      </div>
      <div class="relative flex justify-center">
        <div
          class="w-full aspect-square max-w-md bg-gradient-to-tr from-primary/20 to-primary/5 rounded-[3rem] rotate-3 relative overflow-hidden border border-slate-200 dark:border-slate-800"
        >
          <div
            class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
            :style="{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop)',
            }"
          ></div>
          <div
            class="absolute inset-0 flex items-center justify-center -rotate-3"
          >
            <div
              class="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl"
            >
              <pre
                class="text-primary font-mono text-sm leading-relaxed"
              ><span class="text-white">const</span> developer = {
  name: <span class="text-emerald-400">'{{ personalInfo.name }}'</span>,
  role: <span class="text-emerald-400">'Full-Stack'</span>,
  stack: [<span class="text-emerald-400">'Vue'</span>, <span class="text-emerald-400">'Node'</span>],
  status: <span class="text-emerald-400">'Building Ideas'</span>
};</pre>
            </div>
          </div>
        </div>
        <div
          class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[100px] rounded-full"
        ></div>
      </div>
    </div>
  </section>
</template>
