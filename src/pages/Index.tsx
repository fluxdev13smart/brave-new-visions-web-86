
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ThemeSection } from "@/components/ThemeSection";
import { UnGoals } from "@/components/UnGoals";
import { WordCloud } from "@/components/WordCloud";
import { ShakespeareInfluence } from "@/components/ShakespeareInfluence";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  // Word cloud data
  const imaginationWords = [
    { text: "Dream", size: "text-2xl", color: "text-theme-imagination", delay: 100 },
    { text: "Create", size: "text-3xl", color: "text-theme-imagination", delay: 200 },
    { text: "Innovate", size: "text-xl", color: "text-purple-600", delay: 300 },
    { text: "Wonder", size: "text-2xl", color: "text-purple-400", delay: 150 },
    { text: "Vision", size: "text-3xl", color: "text-theme-imagination", delay: 250 },
    { text: "Explore", size: "text-xl", color: "text-indigo-500", delay: 350 },
    { text: "Invent", size: "text-2xl", color: "text-purple-500", delay: 180 },
    { text: "Discover", size: "text-xl", color: "text-indigo-600", delay: 220 },
  ];

  const educationWords = [
    { text: "Knowledge", size: "text-3xl", color: "text-theme-education", delay: 100 },
    { text: "Growth", size: "text-2xl", color: "text-theme-education", delay: 150 },
    { text: "Learning", size: "text-3xl", color: "text-orange-500", delay: 200 },
    { text: "Insight", size: "text-xl", color: "text-orange-600", delay: 250 },
    { text: "Wisdom", size: "text-2xl", color: "text-theme-education", delay: 300 },
    { text: "Understanding", size: "text-xl", color: "text-yellow-600", delay: 350 },
    { text: "Development", size: "text-2xl", color: "text-orange-400", delay: 400 },
    { text: "Enlightenment", size: "text-xl", color: "text-yellow-500", delay: 450 },
  ];

  const languageWords = [
    { text: "Words", size: "text-2xl", color: "text-gray-700", delay: 100 },
    { text: "Communication", size: "text-xl", color: "text-gray-600", delay: 150 },
    { text: "Expression", size: "text-3xl", color: "text-gray-800", delay: 200 },
    { text: "Dialogue", size: "text-2xl", color: "text-gray-700", delay: 250 },
    { text: "Stories", size: "text-3xl", color: "text-gray-900", delay: 300 },
    { text: "Connection", size: "text-xl", color: "text-gray-600", delay: 350 },
    { text: "Poetry", size: "text-2xl", color: "text-gray-800", delay: 400 },
    { text: "Literature", size: "text-xl", color: "text-gray-700", delay: 450 },
  ];

  const justiceWords = [
    { text: "Equality", size: "text-3xl", color: "text-theme-justice", delay: 100 },
    { text: "Fairness", size: "text-2xl", color: "text-theme-fairness", delay: 150 },
    { text: "Rights", size: "text-xl", color: "text-theme-justice", delay: 200 },
    { text: "Balance", size: "text-2xl", color: "text-blue-500", delay: 250 },
    { text: "Inclusion", size: "text-3xl", color: "text-theme-fairness", delay: 300 },
    { text: "Harmony", size: "text-xl", color: "text-blue-600", delay: 350 },
    { text: "Truth", size: "text-2xl", color: "text-theme-justice", delay: 400 },
    { text: "Peace", size: "text-xl", color: "text-blue-400", delay: 450 },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      
      <Hero />
      
      {/* Imagination Section */}
      <section id="imagination">
        <ThemeSection
          title="Imagination"
          subtitle="The Power of"
          description="Imagination is the doorway to new worlds. It allows us to envision what does not yet exist and bring it into being through creativity and innovation."
          color="text-theme-imagination"
          gradientClass="gradient-imagination"
          number="01"
          quote="We are such stuff as dreams are made on, and our little life is rounded with a sleep."
          quoteAuthor="William Shakespeare, The Tempest"
          shapeColor="theme-imagination"
        >
          <WordCloud title="The Language of Imagination" words={imaginationWords} />
        </ThemeSection>
      </section>
      
      {/* Education Section */}
      <section id="education">
        <ThemeSection
          title="Education"
          subtitle="The Foundation of"
          description="Education empowers us to build brave new worlds by providing the knowledge, skills, and critical thinking necessary for transformation and progress."
          color="text-theme-education"
          gradientClass="gradient-education"
          number="02"
          quote="Education is the most powerful weapon which you can use to change the world."
          quoteAuthor="Nelson Mandela"
          className="bg-gray-50 dark:bg-gray-800"
          shapeColor="theme-education"
        >
          <WordCloud title="The Language of Education" words={educationWords} />
        </ThemeSection>
      </section>
      
      {/* Language Section */}
      <section id="language">
        <ThemeSection
          title="Language"
          subtitle="The Bridge to"
          description="Language shapes thought and enables understanding. It is the tool through which we articulate our visions and communicate our ideas for brave new worlds."
          color="text-gray-700"
          gradientClass=""
          number="03"
          quote="But words are things, and a small drop of ink, falling like dew, upon a thought, produces that which makes thousands, perhaps millions, think."
          quoteAuthor="Lord Byron"
          shapeColor="gray-400"
        >
          <WordCloud title="The Power of Words" words={languageWords} />
        </ThemeSection>
      </section>
      
      {/* Justice Section */}
      <section id="justice">
        <ThemeSection
          title="Justice & Fairness"
          subtitle="The Foundation of"
          description="True brave new worlds must be built on the foundations of justice and fairness, ensuring that all voices are heard and all people are treated with dignity and respect."
          color="text-theme-justice"
          gradientClass="gradient-justice"
          number="04"
          quote="The quality of mercy is not strained. It droppeth as the gentle rain from heaven upon the place beneath."
          quoteAuthor="William Shakespeare, The Merchant of Venice"
          className="bg-gray-50 dark:bg-gray-800"
          shapeColor="theme-justice"
        >
          <WordCloud title="The Language of Justice" words={justiceWords} />
        </ThemeSection>
      </section>
      
      {/* Shakespeare Influence Section */}
      <section id="shakespeare">
        <ShakespeareInfluence />
      </section>

      {/* UN Global Goals Section */}
      <section id="goals">
        <UnGoals />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
