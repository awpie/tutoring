---
layout: about
title: "About"
description: "Learn about my background, teaching philosophy, and approach to tutoring"
permalink: /about/
---

<div class="about-hero" data-aos="fade-up">
  <h1 class="about-title">About Me</h1>
  <p class="about-subtitle">Dedicated to helping students achieve their academic goals through personalized tutoring</p>
</div>

<div class="about-content">
  <section class="about-section" data-aos="fade-up">
    <h2 class="section-title">My Background</h2>
    <p>I'm a first-year Electrical and Computer Engineering student at Duke University with a passion for teaching and helping students excel. My journey in education began with achieving perfect scores in AP Calculus BC and AP Physics C: Mechanics, which led me to develop effective teaching methodologies that I now share with my students.</p>
  </section>

  <section class="about-section" data-aos="fade-up" data-aos-delay="100">
    <h2 class="section-title">Teaching Philosophy</h2>
    <p>I believe in a personalized approach to education that focuses on:</p>
    <ul class="philosophy-list">
      <li>Building strong foundational knowledge</li>
      <li>Developing critical thinking skills</li>
      <li>Creating a supportive learning environment</li>
      <li>Adapting to each student's unique learning style</li>
      <li>Setting and achieving realistic goals</li>
    </ul>
  </section>

  <section class="about-section" data-aos="fade-up" data-aos-delay="200">
    <h2 class="section-title">Why Choose Me?</h2>
    <div class="features-grid">
      <div class="feature-card">
        <i class="fas fa-star"></i>
        <h3>Perfect Scores</h3>
        <p>Achieved perfect scores in AP Calculus BC and AP Physics C: Mechanics</p>
      </div>
      <div class="feature-card">
        <i class="fas fa-graduation-cap"></i>
        <h3>Certified Tutor</h3>
        <p>Certified in SAT and ACT tutoring with proven success rates</p>
      </div>
      <div class="feature-card">
        <i class="fas fa-users"></i>
        <h3>Personalized Approach</h3>
        <p>Tailored learning plans for each student's unique needs</p>
      </div>
      <div class="feature-card">
        <i class="fas fa-clock"></i>
        <h3>Flexible Scheduling</h3>
        <p>Convenient online sessions to fit your schedule</p>
      </div>
    </div>
  </section>

  <section class="about-section cta-section" data-aos="fade-up" data-aos-delay="300">
    <h2 class="section-title">Ready to Get Started?</h2>
    <p>Let's work together to achieve your academic goals. Book a session today to discuss your needs and create a personalized learning plan.</p>
    <a href="/booking/" class="cta-button">Book a Session</a>
  </section>
</div>

<style>
  .about-hero {
    text-align: center;
    padding: var(--spacing-xl) 0;
    margin-bottom: var(--spacing-xl);
  }

  .about-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    background: linear-gradient(90deg, var(--primary-color), #42a1ec);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .about-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .about-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  .about-section {
    margin-bottom: var(--spacing-xl);
  }

  .section-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: var(--text-color);
  }

  .philosophy-list {
    list-style: none;
    padding: 0;
    margin: var(--spacing-md) 0;
  }

  .philosophy-list li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.75rem;
    color: var(--text-secondary);
  }

  .philosophy-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--primary-color);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-md);
  }

  .feature-card {
    background: var(--background-color);
    border-radius: 12px;
    padding: var(--spacing-md);
    text-align: center;
    border: 1px solid var(--border-color);
    transition: var(--transition-normal);
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }

  .feature-card i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
  }

  .feature-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    color: var(--text-color);
  }

  .feature-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .cta-section {
    text-align: center;
    padding: var(--spacing-xl) 0;
    background: linear-gradient(180deg, var(--background-color) 0%, var(--secondary-background) 100%);
    border-radius: 16px;
    margin-top: var(--spacing-xl);
  }

  .cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: var(--transition-normal);
    margin-top: var(--spacing-md);
  }

  .cta-button:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .about-title {
      font-size: 2.5rem;
    }

    .about-subtitle {
      font-size: 1.1rem;
    }

    .section-title {
      font-size: 1.75rem;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .about-content {
      padding: 0 var(--spacing-sm);
    }
  }
</style>
