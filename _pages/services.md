---
layout: services
title: "Services"
description: "Expert tutoring services in SAT, ACT, AP courses, and college applications"
permalink: /services/
---

<div class="services-hero" data-aos="fade-up">
  <h1 class="services-title">Expert Tutoring Services</h1>
  <p class="services-subtitle">Personalized learning experiences tailored to your academic goals</p>
</div>

<div class="services-grid">
  <article class="service-card" data-aos="fade-up" data-aos-delay="100">
    <div class="service-icon">
      <i class="fas fa-pencil-alt"></i>
    </div>
    <h2 class="service-title">SAT & ACT Preparation</h2>
    <p class="service-description">Comprehensive test preparation with proven strategies and personalized study plans. Focus on both content mastery and test-taking techniques.</p>
    <ul class="service-features">
      <li>Full-length practice tests</li>
      <li>Section-specific strategies</li>
      <li>Personalized study plans</li>
      <li>Progress tracking</li>
    </ul>
    <a href="/booking/" class="service-cta">Book a Session</a>
  </article>

  <article class="service-card" data-aos="fade-up" data-aos-delay="200">
    <div class="service-icon">
      <i class="fas fa-calculator"></i>
    </div>
    <h2 class="service-title">AP Course Tutoring</h2>
    <p class="service-description">Expert guidance in AP Calculus BC and AP Physics C: Mechanics, with a focus on achieving perfect scores and building strong foundations.</p>
    <ul class="service-features">
      <li>Concept mastery</li>
      <li>Practice problems</li>
      <li>Exam preparation</li>
      <li>Real-world applications</li>
    </ul>
    <a href="/booking/" class="service-cta">Book a Session</a>
  </article>

  <article class="service-card" data-aos="fade-up" data-aos-delay="300">
    <div class="service-icon">
      <i class="fas fa-university"></i>
    </div>
    <h2 class="service-title">College Application Counseling</h2>
    <p class="service-description">Comprehensive guidance through the college application process, with a focus on Ivy League and top-tier universities.</p>
    <ul class="service-features">
      <li>Essay review and editing</li>
      <li>Application strategy</li>
      <li>Interview preparation</li>
      <li>Portfolio development</li>
    </ul>
    <a href="/booking/" class="service-cta">Book a Session</a>
  </article>

  <article class="service-card" data-aos="fade-up" data-aos-delay="400">
    <div class="service-icon">
      <i class="fas fa-book"></i>
    </div>
    <h2 class="service-title">K-12 Math Tutoring</h2>
    <p class="service-description">Personalized math tutoring for students from kindergarten through 12th grade, building strong foundations and confidence.</p>
    <ul class="service-features">
      <li>Grade-level support</li>
      <li>Homework help</li>
      <li>Test preparation</li>
      <li>Concept reinforcement</li>
    </ul>
    <a href="/booking/" class="service-cta">Book a Session</a>
  </article>
</div>

<style>
  .services-hero {
    text-align: center;
    padding: var(--spacing-xl) 0;
    margin-bottom: var(--spacing-xl);
  }

  .services-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    background: linear-gradient(90deg, var(--primary-color), #42a1ec);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .services-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
    padding: 0 var(--spacing-md);
    max-width: 1200px;
    margin: 0 auto;
  }

  .service-card {
    background: var(--background-color);
    border-radius: 16px;
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-md);
    transition: var(--transition-normal);
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }

  .service-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-md);
  }

  .service-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--text-color);
  }

  .service-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-md);
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--spacing-md);
  }

  .service-features li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }

  .service-features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--primary-color);
  }

  .service-cta {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: var(--transition-normal);
    margin-top: auto;
    text-align: center;
  }

  .service-cta:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .services-title {
      font-size: 2.5rem;
    }

    .services-subtitle {
      font-size: 1.1rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      padding: 0 var(--spacing-sm);
    }
  }
</style>
