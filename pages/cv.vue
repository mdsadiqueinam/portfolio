<script setup>
import { cvData } from "~/data.js";

useHead({
  title: `${cvData.personalInfo.name} | CV`,
  meta: [
    {
      name: "description",
      content: `Curriculum Vitae of ${cvData.personalInfo.name}`,
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    },
  ],
});

const skillGroups = [
  {
    label: "Frontend",
    names: ["JavaScript", "TypeScript", "Vue.js", "HTML & CSS"],
    highlight: true,
  },
  { label: "Backend", names: ["Node.js", "Kotlin", "Rust"], highlight: false },
  { label: "Databases", names: ["SQL"], highlight: false },
  { label: "DevOps & Tools", names: ["Docker", "Git"], highlight: false },
];

function getSkillsForGroup(names) {
  return cvData.skills.filter((s) => names.includes(s.name));
}
</script>

<template>
  <div
    class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen"
  >
    <!-- Top Navigation — hidden on print -->
    <header
      class="no-print sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark"
    >
      <div
        class="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-primary"
            >description</span
          >
          <span class="font-bold text-lg tracking-tight">CURRICULUM VITAE</span>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink
            to="/"
            class="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <span class="material-symbols-outlined text-base leading-none"
              >arrow_back</span
            >
            Portfolio
          </NuxtLink>
          <button
            class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors"
            @click="() => window.print()"
          >
            <span class="material-symbols-outlined text-base leading-none"
              >print</span
            >
            Print / Save PDF
          </button>
        </div>
      </div>
    </header>

    <!-- A4 CV Sheet -->
    <main
      class="max-w-[210mm] mx-auto my-8 bg-white dark:bg-slate-900 shadow-xl print:shadow-none print:my-0 min-h-[297mm] p-10 print:p-0"
    >
      <!-- ── Header: Name + Contact ── -->
      <div
        class="flex justify-between items-start border-b-4 border-primary pb-8 mb-8 gap-6"
      >
        <div>
          <h1
            class="text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            {{ cvData.personalInfo.name }}
          </h1>
          <p class="text-primary text-xl font-semibold mt-1">
            {{ cvData.personalInfo.title }}
          </p>
          <p
            class="text-slate-500 dark:text-slate-400 mt-2 max-w-lg text-sm leading-relaxed"
          >
            {{ cvData.personalInfo.heroDescription }}
          </p>
        </div>
        <div class="flex flex-col gap-2 text-sm shrink-0">
          <template v-for="contact in cvData.contacts" :key="contact.type">
            <a
              v-if="contact.link"
              :href="contact.link"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              <span
                class="material-symbols-outlined text-primary text-lg leading-none"
              >
                {{ contact.icon }}
              </span>
              <span>{{ contact.value }}</span>
            </a>
            <div
              v-else
              class="flex items-center gap-2 text-slate-600 dark:text-slate-300"
            >
              <span
                class="material-symbols-outlined text-primary text-lg leading-none"
              >
                {{ contact.icon }}
              </span>
              <span>{{ contact.value }}</span>
            </div>
          </template>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-10">
        <!-- ── Left Column: Summary · Experience · Projects ── -->
        <div class="col-span-2 space-y-8">
          <!-- Summary -->
          <section>
            <h2 class="cv-section-heading">
              <span class="material-symbols-outlined text-primary">person</span>
              Professional Summary
            </h2>
            <p
              class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm"
            >
              {{ cvData.summary }}
            </p>
          </section>

          <!-- Experience -->
          <section>
            <h2 class="cv-section-heading">
              <span class="material-symbols-outlined text-primary">work</span>
              Professional Experience
            </h2>
            <div class="space-y-6">
              <div
                v-for="job in cvData.experience"
                :key="job.title + job.company"
              >
                <div
                  class="flex flex-wrap justify-between items-baseline gap-2"
                >
                  <h3
                    class="font-bold text-slate-900 dark:text-white text-base"
                  >
                    {{ job.title }}
                  </h3>
                  <span class="text-sm font-medium text-primary">{{
                    job.period
                  }}</span>
                </div>
                <p
                  class="text-slate-600 dark:text-slate-400 font-medium italic mb-2 text-sm"
                >
                  {{ job.company }} · {{ job.location }}
                </p>
                <ul
                  class="list-disc ml-5 space-y-1 text-slate-700 dark:text-slate-300 text-sm"
                >
                  <li v-for="(r, i) in job.responsibilities" :key="i">
                    {{ r }}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Key Projects -->
          <section class="no-break">
            <h2 class="cv-section-heading">
              <span class="material-symbols-outlined text-primary">code</span>
              Key Projects
            </h2>
            <div class="grid grid-cols-1 gap-3">
              <div
                v-for="project in cvData.projects"
                :key="project.name"
                class="p-3 border border-slate-100 dark:border-slate-800 rounded-lg"
              >
                <div
                  class="flex flex-wrap justify-between items-baseline gap-2 mb-1"
                >
                  <span
                    class="font-bold text-slate-900 dark:text-white text-sm"
                  >
                    {{ project.name }}
                  </span>
                  <span class="text-xs text-primary font-medium">{{
                    project.period
                  }}</span>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded"
                    >{{ tag }}</span
                  >
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- ── Right Column: Skills · Education · Languages ── -->
        <div class="space-y-8">
          <!-- Skills -->
          <section>
            <h2 class="cv-section-heading">
              <span class="material-symbols-outlined text-primary"
                >psychology</span
              >
              Skills
            </h2>
            <div class="space-y-4">
              <div v-for="group in skillGroups" :key="group.label">
                <p class="text-xs font-bold text-slate-500 uppercase mb-2">
                  {{ group.label }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in getSkillsForGroup(group.names)"
                    :key="skill.name"
                    class="px-2 py-1 text-xs font-bold rounded"
                    :class="
                      group.highlight
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    "
                    >{{ skill.name }}</span
                  >
                </div>
              </div>
            </div>
          </section>

          <!-- Education -->
          <section>
            <h2 class="cv-section-heading">
              <span class="material-symbols-outlined text-primary">school</span>
              Education
            </h2>
            <div class="space-y-4">
              <div v-for="edu in cvData.education" :key="edu.degree">
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">
                  {{ edu.degree }}
                </h3>
                <p class="text-xs text-slate-500 mt-0.5 italic">
                  {{ edu.institution }}, {{ edu.location }}
                </p>
                <p class="text-xs text-primary mt-0.5 font-medium">
                  {{ edu.period }}
                </p>
              </div>
            </div>
          </section>

          <!-- Languages -->
          <section>
            <h2 class="cv-section-heading">
              <span class="material-symbols-outlined text-primary"
                >language</span
              >
              Languages
            </h2>
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-700 dark:text-slate-300">English</span>
                <span class="text-slate-400 text-xs">Proficient</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-700 dark:text-slate-300">Hindi</span>
                <span class="text-slate-400 text-xs">Native</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- Footer -->
      <footer
        class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center"
      >
        <p class="text-xs text-slate-400">References available upon request.</p>
      </footer>
    </main>
  </div>
</template>

<style>
.cv-section-heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  color: #0f172a;
}

.dark .cv-section-heading {
  color: #fff;
  border-color: #334155;
}

@media print {
  .no-print {
    display: none !important;
  }

  @page {
    margin: 1cm;
    size: A4;
  }
}
</style>
