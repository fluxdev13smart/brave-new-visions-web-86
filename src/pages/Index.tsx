
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { ThemeSection } from "@/components/ThemeSection";
import { UnGoals } from "@/components/UnGoals";
import { WordCloud } from "@/components/WordCloud";
import { ShakespeareInfluence } from "@/components/ShakespeareInfluence";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount and add section-visible class to all sections
    window.scrollTo(0, 0);
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('section-visible');
    });
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
      
      <section id="imagination" className="opacity-100 section-visible">
        <ThemeSection
          title="Imagination"
          subtitle="The Power of"
          description="Every great movement begins with a spark of imagination. Brave new worlds aren't found—they're built. Through books, stories, and dreams, we shape the future before it happens. Education is not just learning facts. It's learning to see what isn't there yet. In this space, imagination is not fantasy—it is the beginning of justice."
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
      
      <section id="education" className="opacity-100 section-visible">
        <ThemeSection
          title="Education"
          subtitle="Words for"
          description="Words can teach, heal, and open minds. Shakespeare's plays showed how words reveal truth and expose injustice. Today, our words still hold that power. Through speech, poetry, protest, and conversation, we create understanding. Wisdom doesn't live in silence—it lives in stories, questions, and shared ideas. Here, we celebrate language as the tool of the wise."
          color="text-theme-education"
          gradientClass="gradient-education"
          number="02"
          quote="Education is not just learning facts. It's learning to see what isn't there yet."
          quoteAuthor="Anonymous"
          className="bg-gray-50 dark:bg-gray-800"
          shapeColor="theme-education"
        >
          <WordCloud title="The Language of Education" words={educationWords} />
        </ThemeSection>
      </section>
      
      <section id="language" className="opacity-100 section-visible">
        <ThemeSection
          title="Language"
          subtitle="Voices for"
          description="Justice begins when someone speaks up. From ancient speeches to modern movements, voices have always changed the world. Every person deserves to be heard, no matter their background, language, or beliefs. Communication isn't just about talking—it's about fairness. It's about building a world where everyone has a voice, and every voice has value."
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
      
      <section id="justice" className="opacity-100 section-visible">
        <ThemeSection
          title="Justice & Fairness"
          subtitle="The Foundation of"
          description="The world needs more open minds. That's why education is a right, not a privilege. Goal 4 of the United Nations Sustainable Development Goals calls for quality education for all. That means books, teachers, support, and safe schools for every child, everywhere. It means hope. And it means action."
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
      
      <section id="shakespeare" className="opacity-100 section-visible">
        <ShakespeareInfluence />
      </section>

      <section id="goals" className="opacity-100 section-visible">
        <UnGoals />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
