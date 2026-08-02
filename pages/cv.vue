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

function printCV() {
  window.print();
}
</script>

<template>
  <div
    class="min-h-screen bg-gray-100 px-4 py-8 font-[Inter,sans-serif] text-gray-900 print:bg-white print:p-0"
  >
    <header class="mb-4 print:hidden">
      <div
        class="mx-auto flex w-full max-w-[210mm] items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
        >
          ← Portfolio
        </NuxtLink>
        <button
          class="cursor-pointer rounded-lg border border-gray-900 bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-black"
          @click="printCV"
        >
          Print / Save PDF
        </button>
      </div>
    </header>

    <main
      class="mx-auto min-h-[297mm] w-full max-w-[210mm] bg-white px-[16mm] py-[18mm] shadow-[0_20px_60px_rgba(15,23,42,0.12)] print:m-0 print:min-h-0 print:max-w-none print:px-[8mm] print:py-[10mm] print:shadow-none"
    >
      <!-- Header Section -->
      <section class="mb-4 border-b-2 border-gray-900 pb-3">
        <h1
          class="m-0 text-[2rem] leading-[1.1] font-extrabold tracking-[0.01em]"
        >
          {{ cvData.personalInfo.name }}
        </h1>
        <p class="mt-[0.35rem] text-[0.92rem] leading-normal font-bold">
          {{ cvData.personalInfo.title }}
        </p>
        <!-- Plain text contacts with links applied invisibly for ATS/Recruiter ease -->
        <p class="mt-[0.35rem] text-[0.92rem] leading-normal text-gray-600">
          <template
            v-for="(contact, index) in cvData.contacts"
            :key="contact.type"
          >
            <a
              v-if="contact.link"
              :href="contact.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 transition hover:text-gray-900 hover:underline"
            >
              {{ contact.value }}
            </a>
            <span v-else>{{ contact.value }}</span>
            <span v-if="index < cvData.contacts.length - 1" class="mx-1"
              >•</span
            >
          </template>
        </p>
      </section>

      <!-- Summary Section -->
      <section>
        <h2
          class="mt-4 mb-[0.6rem] text-[0.82rem] font-extrabold tracking-[0.08em] text-gray-900 uppercase"
        >
          Professional Summary
        </h2>
        <p class="text-[0.92rem] leading-normal text-gray-700">
          {{ cvData.summary }}
        </p>
      </section>

      <!-- Experience Section -->
      <section>
        <h2
          class="mt-4 mb-[0.6rem] text-[0.82rem] font-extrabold tracking-[0.08em] text-gray-900 uppercase"
        >
          Professional Experience
        </h2>
        <article
          v-for="job in cvData.experience"
          :key="job.title + job.company"
          class="mb-[0.9rem]"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="m-0 text-base font-bold">{{ job.title }}</h3>
              <p
                class="mt-[0.2rem] text-[0.92rem] leading-normal text-gray-600"
              >
                {{ job.company }} | {{ job.location }}
              </p>
            </div>
            <p
              class="mt-[0.2rem] whitespace-nowrap text-[0.92rem] leading-normal text-gray-700"
            >
              {{ job.period }}
            </p>
          </div>
          <ul
            class="mt-2 ml-[1.1rem] list-disc p-0 text-[0.92rem] leading-normal text-gray-700"
          >
            <li
              v-for="(responsibility, index) in job.responsibilities"
              :key="index"
              class="mb-[0.3rem]"
            >
              {{ responsibility }}
            </li>
          </ul>
        </article>
      </section>

      <!-- Client Projects Section (Consolidated) -->
      <section>
        <h2
          class="mt-4 mb-[0.6rem] text-[0.82rem] font-extrabold tracking-[0.08em] text-gray-900 uppercase"
        >
          Selected Client Projects
        </h2>
        <article
          v-for="project in cvData.projects"
          :key="project.name"
          class="mb-3"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="m-0 text-base font-bold">{{ project.name }}</h3>
            </div>
            <p
              class="mt-[0.2rem] whitespace-nowrap text-[0.92rem] leading-normal text-gray-700"
            >
              {{ project.period }}
            </p>
          </div>
          <!-- Consistent bullet structure for easy scanning -->
          <ul
            class="mt-1 ml-[1.1rem] list-disc p-0 text-[0.92rem] leading-normal text-gray-700"
          >
            <li>
              {{ project.description }}
              <span class="block mt-1 text-[0.88rem] text-gray-500">
                <span class="font-semibold text-gray-600">Stack:</span>
                {{ project.tags.join(", ") }}
              </span>
            </li>
          </ul>
        </article>
      </section>

      <!-- Skills & Education Grid -->
      <section
        class="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_1fr] print:grid-cols-[1.2fr_1fr]"
      >
        <div>
          <h2
            class="mt-4 mb-[0.6rem] text-[0.82rem] font-extrabold tracking-[0.08em] text-gray-900 uppercase"
          >
            Technical Skills
          </h2>
          <div
            v-for="(skills, label) in skillGrouped"
            :key="label"
            class="mb-3"
          >
            <h3 class="m-0 text-base font-bold">{{ label }}</h3>
            <p class="mt-[0.2rem] text-[0.92rem] leading-normal text-gray-600">
              {{ skills.join(", ") }}
            </p>
          </div>
        </div>

        <div>
          <h2
            class="mt-4 mb-[0.6rem] text-[0.82rem] font-extrabold tracking-[0.08em] text-gray-900 uppercase"
          >
            Education
          </h2>
          <article
            v-for="edu in cvData.education"
            :key="edu.degree"
            class="mb-3"
          >
            <h3 class="m-0 text-base font-bold">{{ edu.degree }}</h3>
            <p class="mt-[0.2rem] text-[0.92rem] leading-normal text-gray-600">
              {{ edu.institution }}, {{ edu.location }}
            </p>
            <p
              class="mt-[0.2rem] whitespace-nowrap text-[0.92rem] leading-normal text-gray-700"
            >
              {{ edu.period }}
            </p>
          </article>

          <h2
            class="mt-[1.2rem] mb-[0.6rem] text-[0.82rem] font-extrabold tracking-[0.08em] text-gray-900 uppercase"
          >
            Languages
          </h2>
          <div class="mb-3">
            <p class="mt-[0.2rem] text-[0.92rem] leading-normal text-gray-600">
              English — Proficient
            </p>
            <p class="mt-[0.2rem] text-[0.92rem] leading-normal text-gray-600">
              Hindi — Native
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
