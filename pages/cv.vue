<script setup>
import { computed } from "vue";
import { cvData } from "~/data.js";

useHead({
  title: `${cvData.personalInfo.name} | Resume`,
  meta: [
    {
      name: "description",
      content: `Resume of ${cvData.personalInfo.name}`,
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
    },
  ],
});

const skillGrouped = computed(() => {
  if (!cvData?.skills) return {};
  const groups = {};
  cvData.skills.forEach((s) => {
    if (!groups[s.group]) groups[s.group] = [];
    groups[s.group].push(s.name);
  });
  return groups;
});

const contactLine = computed(() =>
  (cvData.contacts || []).map((contact) => contact.value).join(" • ")
);
</script>

<template>
  <div class="resume-page">
    <header class="resume-toolbar no-print">
      <div class="resume-toolbar-inner">
        <NuxtLink to="/" class="toolbar-link">← Portfolio</NuxtLink>
        <button class="toolbar-button" @click="() => window.print()">
          Print / Save PDF
        </button>
      </div>
    </header>

    <main class="resume-sheet">
      <section class="resume-header">
        <h1>{{ cvData.personalInfo.name }}</h1>
        <p class="resume-title">Full-Stack Developer</p>
        <p class="resume-contacts">{{ contactLine }}</p>
      </section>

      <section>
        <h2 class="resume-section-title">Professional Summary</h2>
        <p class="resume-summary">{{ cvData.summary }}</p>
      </section>

      <section>
        <h2 class="resume-section-title">Professional Experience</h2>
        <article
          v-for="job in cvData.experience"
          :key="job.title + job.company"
          class="resume-entry"
        >
          <div class="resume-entry-header">
            <div>
              <h3>{{ job.title }}</h3>
              <p class="resume-entry-subtitle">{{ job.company }} | {{ job.location }}</p>
            </div>
            <p class="resume-entry-period">{{ job.period }}</p>
          </div>
          <ul class="resume-list">
            <li v-for="(responsibility, index) in job.responsibilities" :key="index">
              {{ responsibility }}
            </li>
          </ul>
        </article>
      </section>

      <section>
        <h2 class="resume-section-title">Key Projects</h2>
        <article
          v-for="project in cvData.projects"
          :key="project.name"
          class="resume-entry compact"
        >
          <div class="resume-entry-header">
            <div>
              <h3>{{ project.name }}</h3>
            </div>
            <p class="resume-entry-period">{{ project.period }}</p>
          </div>
          <p class="resume-project-description">{{ project.description }}</p>
          <p class="resume-tags">{{ project.tags.join(", ") }}</p>
        </article>
      </section>

      <section class="resume-two-column">
        <div>
          <h2 class="resume-section-title">Skills</h2>
          <div v-for="(skills, label) in skillGrouped" :key="label" class="resume-skill-group">
            <h3>{{ label }}</h3>
            <p>{{ skills.join(", ") }}</p>
          </div>
        </div>

        <div>
          <h2 class="resume-section-title">Education</h2>
          <article v-for="edu in cvData.education" :key="edu.degree" class="resume-entry compact">
            <h3>{{ edu.degree }}</h3>
            <p class="resume-entry-subtitle">{{ edu.institution }}, {{ edu.location }}</p>
            <p class="resume-entry-period">{{ edu.period }}</p>
          </article>

          <h2 class="resume-section-title extra-space">Languages</h2>
          <div class="resume-skill-group">
            <p>English — Proficient</p>
            <p>Hindi — Native</p>
          </div>
        </div>
      </section>

      <footer class="resume-footer">
        References available upon request.
      </footer>
    </main>
  </div>
</template>

<style>
:root {
  color-scheme: light;
}

body {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  background: #f3f4f6;
  color: #111827;
}

.resume-page {
  min-height: 100vh;
  background: #f3f4f6;
  padding: 2rem 1rem;
}

.resume-toolbar {
  margin-bottom: 1rem;
}

.resume-toolbar-inner {
  max-width: 210mm;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar-link,
.toolbar-button {
  font: inherit;
  text-decoration: none;
  border: 1px solid #d1d5db;
  background: white;
  color: #111827;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.toolbar-button {
  background: #111827;
  color: white;
  border-color: #111827;
}

.resume-sheet {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  background: white;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
  padding: 18mm 16mm;
  box-sizing: border-box;
}

.resume-header {
  border-bottom: 2px solid #111827;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
}

.resume-header h1 {
  margin: 0;
  font-size: 2rem;
  line-height: 1.1;
  letter-spacing: 0.01em;
}

.resume-title,
.resume-contacts,
.resume-summary,
.resume-entry-subtitle,
.resume-entry-period,
.resume-project-description,
.resume-tags,
.resume-skill-group p,
.resume-footer,
.resume-list {
  font-size: 0.92rem;
  line-height: 1.5;
}

.resume-title {
  margin: 0.35rem 0 0;
  font-weight: 700;
}

.resume-contacts {
  margin: 0.35rem 0 0;
  color: #4b5563;
}

.resume-section-title {
  margin: 1rem 0 0.6rem;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #111827;
}

.resume-entry {
  margin-bottom: 0.9rem;
}

.resume-entry.compact {
  margin-bottom: 0.75rem;
}

.resume-entry-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
}

.resume-entry h3,
.resume-skill-group h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
}

.resume-entry-subtitle,
.resume-entry-period,
.resume-project-description,
.resume-tags,
.resume-skill-group p {
  margin: 0.2rem 0 0;
}

.resume-entry-period {
  white-space: nowrap;
  color: #374151;
}

.resume-list {
  margin: 0.5rem 0 0 1.1rem;
  padding: 0;
}

.resume-list li {
  margin-bottom: 0.3rem;
}

.resume-project-description,
.resume-tags,
.resume-skill-group p,
.resume-entry-subtitle,
.resume-contacts,
.resume-footer {
  color: #4b5563;
}

.resume-two-column {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.5rem;
}

.resume-skill-group {
  margin-bottom: 0.75rem;
}

.extra-space {
  margin-top: 1.2rem;
}

.resume-footer {
  border-top: 1px solid #e5e7eb;
  margin-top: 1.25rem;
  padding-top: 0.75rem;
}

@media print {
  body,
  .resume-page {
    background: white;
    padding: 0;
  }

  .no-print {
    display: none !important;
  }

  .resume-sheet {
    box-shadow: none;
    margin: 0;
    max-width: none;
    min-height: auto;
    padding: 10mm 8mm;
  }

  @page {
    size: A4;
    margin: 8mm;
  }
}
</style>
