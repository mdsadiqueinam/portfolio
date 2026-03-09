<script setup>
import { cvData } from "~/data.js";

useHead({
  title: `${cvData.personalInfo.name} | Portfolio`,
  meta: [
    {
      name: "description",
      content: cvData.personalInfo.heroDescription,
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
</script>

<template>
  <div
    class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300"
  >
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <AppHeader :personal-info="cvData.personalInfo" />
      <main class="flex-grow">
        <HeroSection :personal-info="cvData.personalInfo" />
        <SummarySection :summary="cvData.summary" />
        <SkillsSection :skills="cvData.skills" />
        <ProjectsSection :projects="cvData.projects" />
        <ExperienceSection
          :experience="cvData.experience"
          :education="cvData.education"
        />
        <ServicesSection :services="cvData.services" />
        <TestimonialsSection :testimonials="cvData.testimonials" />
        <CtaSection />
      </main>
      <AppFooter
        :personal-info="cvData.personalInfo"
        :contacts="cvData.contacts"
      />
    </div>
  </div>
</template>
