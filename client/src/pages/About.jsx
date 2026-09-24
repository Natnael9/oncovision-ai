import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Cpu,
  Code2,
  BookOpen,
  Compass,
  Languages,
  Sparkles,
  CheckCircle2,
  Brain,
  Bot,
  FileText,
  HeartHandshake,
  ExternalLink
} from 'lucide-react';
import midasoImg from '../assets/MIdaso.png';

const About = () => {
  const stats = [
    { label: 'DSAT Score', value: '1480', sub: 'Standardized Aptitude Test', icon: Award },
    { label: 'High School GPA', value: '4.0', sub: 'Unweighted Perfect GPA', icon: GraduationCap },
    { label: 'National Exam', value: '528 / 600', sub: 'Top Tier Distinction', icon: Sparkles },
    { label: 'Math Olympiad', value: 'Winner', sub: 'International Competition', icon: Brain },
  ];

  const skillsList = [
    {
      category: 'Software & Frontend',
      icon: Code2,
      skills: ['JavaScript (ES6+)', 'Python', 'HTML5 & CSS3', 'React.js', 'Tailwind CSS', 'Git & GitHub'],
      description: 'Building responsive, accessible web interfaces and integrating machine learning backends.',
    },
    {
      category: 'Robotics & Hardware',
      icon: Cpu,
      skills: ['Arduino Systems', 'Line Follower Robotics', 'Sensors & Actuators', 'Circuit Prototyping'],
      description: 'Designing autonomous embedded hardware systems and robotic navigation solutions.',
    },
    {
      category: 'Core Competencies',
      icon: HeartHandshake,
      skills: ['Team Leadership', 'STEM Project Management', 'Essay & Technical Writing', 'Analytical Problem Solving'],
      description: 'Leading collaborative STEM initiatives and clearly articulating scientific research.',
    },
  ];

  const educationAndPrograms = [
    {
      title: 'ODA Special Boarding School (ODA SBS)',
      role: 'High School Diploma',
      period: 'Completed with Highest Honors',
      details: [
        'Graduated with a perfect 4.0 GPA.',
        'Scored 528 / 600 on the Ethiopian National University Entrance Examination.',
        'Active participant in regional and national academic competitions.',
      ],
      icon: GraduationCap,
    },
    {
      title: 'AddisCoder Spark 2024',
      role: 'Selective Trainee',
      period: 'Intensive Algorithms & Programming Camp',
      details: [
        'Rigorous training in data structures, algorithms, and computational problem solving.',
        'Mentored by software engineers and academics from world-class institutions.',
      ],
      icon: Brain,
    },
    {
      title: 'INSA Summer Camp',
      role: 'Software Development Trainee',
      period: 'Development Department (INSA)',
      details: [
        'Selected for intensive hands-on immersion in software engineering and application development.',
        'Collaborated on building practical software solutions and computational engineering challenges.',
      ],
      icon: Code2,
    },
    {
      title: 'STEM Center Initiatives',
      role: 'Project Leader & Innovator',
      period: 'Leadership & Engineering Development',
      details: [
        'Directed youth teams in robotics and technology projects.',
        'Engineered autonomous Arduino-based line follower robotics platforms.',
        'Developed high-accuracy machine learning cancer diagnostic web software.',
      ],
      icon: Cpu,
    },
  ];

  const achievements = [
    {
      title: 'International Mathematics Olympiad Winner',
      desc: 'Demonstrated superior mathematical reasoning and competitive problem-solving at international level.',
    },
    {
      title: 'Digital SAT (DSAT): 1480',
      desc: 'Achieved top-percentile standardized testing results showcasing college-ready critical reading & mathematics mastery.',
    },
    {
      title: 'Ethiopian National Examination: 528 / 600',
      desc: 'Scored in the highest tier nationwide on the secondary education completion examination.',
    },
    {
      title: 'Perfect 4.0 High School GPA',
      desc: 'Maintained unbroken academic excellence throughout rigorous curriculum at ODA Special Boarding School.',
    },
    {
      title: 'Published Essay Writer & Communicator',
      desc: 'Passionate about distilling intricate technical and scientific ideas into compelling essays and narratives.',
    },
    {
      title: 'Selective Summer Camp Trainee (INSA & AddisCoder)',
      desc: 'Earned competitive placements in Ethiopia’s most selective high-school computing programs.',
    },
  ];

  const languages = [
    { name: 'Afan-Oromo', level: 'Native / Bilingual Proficiency' },
    { name: 'English', level: 'Fluent / Professional (DSAT 1480)' },
    { name: 'Amharic', level: 'Fluent / Professional Proficiency' },
  ];

  const interests = [
    'Reading Scientific Literature',
    'Robotics Competitions',
    'Hiking & Nature',
    'Competitive Coding',
    'Hardware Crafting',
    'Exploring Emerging AI',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">

      {/* Header Profile Hero Card */}
      <section className="bg-bio-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-[var(--border-teal)] relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent-teal)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
          {/* Creator Photo Frame */}
          <div className="relative shrink-0 group">
            <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-[var(--border-teal-strong)] bg-slate-900 shadow-2xl relative">
              <img
                src={midasoImg}
                alt="Midaso Edasa Busho"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Status Pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-[var(--accent-teal-dark)] border border-[var(--accent-teal)] text-[var(--accent-teal)] text-xs font-display font-semibold flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-teal)] animate-pulse" />
              Creator &amp; Developer
            </div>
          </div>

          {/* Profile Headline & Meta */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-teal)]/10 border border-[var(--border-teal-strong)] text-[var(--accent-teal)] text-xs font-display font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Developer Profile &amp; Bio</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Midaso Edasa Busho
            </h1>

            <p className="font-display text-sm sm:text-base font-semibold text-[var(--accent-teal)] tracking-wide">
              AI &amp; Computational Biology Enthusiast | Full-Stack &amp; Embedded Systems Developer
            </p>

            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
              High-achieving STEM student and developer specializing in computational biology, applied machine learning, and robotics. Driven to engineer impactful healthcare technology solutions that improve lives.
            </p>

            {/* Contact Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <a
                href="mailto:emidaso02@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-subcard)] border border-[var(--border-teal)] text-slate-200 hover:text-[var(--accent-teal)] hover:border-[var(--accent-teal)] text-xs sm:text-sm font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-[var(--accent-teal)]" />
                <span>emidaso02@gmail.com</span>
              </a>

              <a
                href="tel:0941926004"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-subcard)] border border-[var(--border-teal)] text-slate-200 hover:text-[var(--accent-teal)] hover:border-[var(--accent-teal)] text-xs sm:text-sm font-medium transition-all"
              >
                <Phone className="w-4 h-4 text-[var(--accent-teal)]" />
                <span>+251 0941926004</span>
              </a>

              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-subcard)] border border-slate-700/80 text-slate-300 text-xs sm:text-sm font-medium">
                <MapPin className="w-4 h-4 text-[var(--accent-teal)]" />
                <span>Adama, Ethiopia</span>
              </span>
            </div>

            {/* Direct CTA links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/predict"
                className="btn-split-primary text-sm"
              >
                <span className="btn-split-primary-text">Try Cancer Diagnostic App</span>
                <span className="btn-split-primary-icon">
                  <Cpu className="w-4 h-4" />
                </span>
              </Link>
              <a
                href="mailto:emidaso02@gmail.com"
                className="btn-wireframe text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((st, i) => {
          const IconComponent = st.icon;
          return (
            <div
              key={i}
              className="bg-bio-card rounded-2xl p-5 border border-[var(--border-teal)] text-center sm:text-left space-y-2 hover:border-[var(--border-teal-strong)] transition-colors"
            >
              <div className="flex items-center justify-center sm:justify-between">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-display font-semibold">
                  {st.label}
                </span>
                <IconComponent className="w-4 h-4 text-[var(--accent-teal)] hidden sm:block" />
              </div>
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {st.value}
              </p>
              <p className="text-xs text-slate-400">
                {st.sub}
              </p>
            </div>
          );
        })}
      </section>

      {/* Profile Summary Card */}
      <section className="bg-bio-card rounded-3xl p-6 sm:p-8 border border-[var(--border-teal)] space-y-4">
        <div className="flex items-center space-x-3 text-[var(--accent-teal)]">
          <FileText className="w-5 h-5" />
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white">Profile Summary</h2>
        </div>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
          High-achieving STEM student (4.0 GPA, 1480 DSAT, International Math Olympiad Winner) and AI &amp; computational biology enthusiast. Combines quantitative modeling, front-end development, and machine learning to build impactful diagnostic solutions, including a 97.4% accurate breast cancer classification system. Proven leadership experience directing robotics initiatives and software development projects at{' '}
          <span className="text-[var(--accent-teal)] font-semibold">STEM CENTER</span>.
        </p>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Graduated with a perfect 4.0 GPA from ODA SBS and recognized internationally as a Mathematics Olympiad winner. Passionate about bridging theoretical computational science, embedded hardware systems, and intuitive user interfaces to solve real-world healthcare and engineering challenges.
        </p>
      </section>

      {/* Grid: Education & Special Training + Achievements */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Education & Training - Col 7 */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-3 text-[var(--accent-teal)]">
            <GraduationCap className="w-6 h-6" />
            <h2 className="font-display text-2xl font-bold text-white">Education &amp; Training</h2>
          </div>

          <div className="space-y-4">
            {educationAndPrograms.map((edu, idx) => {
              const EduIcon = edu.icon;
              return (
                <div
                  key={idx}
                  className="bg-bio-card rounded-2xl p-5 border border-[var(--border-teal)] space-y-3 hover:border-[var(--border-teal-strong)] transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">
                        {edu.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[var(--accent-teal)]">
                        {edu.role} • <span className="text-slate-400 font-normal">{edu.period}</span>
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-[var(--accent-teal-dark)] text-[var(--accent-teal)] border border-[var(--border-teal-strong)] shrink-0">
                      <EduIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {edu.details.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-teal)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Honors & Key Achievements - Col 5 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center space-x-3 text-[var(--accent-teal)]">
            <Award className="w-6 h-6" />
            <h2 className="font-display text-2xl font-bold text-white">Achievements &amp; Honors</h2>
          </div>

          <div className="bg-bio-card rounded-3xl p-6 border border-[var(--border-teal)] space-y-4">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="pb-4 last:pb-0 border-b border-slate-800 last:border-b-0 space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)]" />
                  <h4 className="font-display text-sm font-bold text-white">
                    {ach.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 pl-3.5 leading-relaxed">
                  {ach.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 text-[var(--accent-teal)]">
          <Cpu className="w-6 h-6" />
          <h2 className="font-display text-2xl font-bold text-white">Technical &amp; Practical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsList.map((sk, idx) => {
            const SkIcon = sk.icon;
            return (
              <div
                key={idx}
                className="bg-bio-card rounded-2xl p-6 border border-[var(--border-teal)] space-y-4 hover:border-[var(--border-teal-strong)] transition-all"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[var(--accent-teal-dark)] text-[var(--accent-teal)] border border-[var(--border-teal)]">
                    <SkIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {sk.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-300">
                  {sk.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {sk.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-[var(--bg-subcard)] border border-[var(--border-teal)] text-slate-200 text-xs font-mono font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Languages & Interests Side-by-Side */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Languages */}
        <div className="bg-bio-card rounded-2xl p-6 border border-[var(--border-teal)] space-y-4">
          <div className="flex items-center space-x-3 text-[var(--accent-teal)]">
            <Languages className="w-5 h-5" />
            <h3 className="font-display text-xl font-bold text-white">Languages</h3>
          </div>
          <div className="space-y-3">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-subcard)] border border-slate-800"
              >
                <span className="font-display font-semibold text-white text-sm">{lang.name}</span>
                <span className="text-xs text-[var(--accent-teal)] font-medium">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div className="bg-bio-card rounded-2xl p-6 border border-[var(--border-teal)] space-y-4">
          <div className="flex items-center space-x-3 text-[var(--accent-teal)]">
            <Compass className="w-5 h-5" />
            <h3 className="font-display text-xl font-bold text-white">Interests &amp; Hobbies</h3>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {interests.map((it, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-xl bg-[var(--bg-subcard)] border border-slate-800 text-xs sm:text-sm text-slate-200 font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-teal)] shrink-0" />
                <span>{it}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Project Dedication & APK Submission Notice */}
      <section className="bg-gradient-to-r from-[var(--bg-card-solid)] via-[var(--bg-subcard)] to-[var(--bg-card-solid)] rounded-3xl p-6 sm:p-8 border border-[var(--border-teal)] text-center space-y-3">
        <h3 className="font-display text-lg sm:text-xl font-bold text-white">
          OncoVision AI • Designed &amp; Engineered by Midaso Edasa Busho
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          This full-stack diagnostic system bridges cytological fine-needle aspirate image metrics with Scikit-Learn machine learning classifiers to deliver instant, accessible pathology risk stratification. Developed with precision, care, and a focus on positive healthcare impact.
        </p>
        <div className="pt-2">
          <Link
            to="/predict"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--accent-teal)] hover:underline font-semibold"
          >
            <span>Launch the Interactive Tumor Classifier</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;

