import { useEffect, useMemo, useState } from 'react';
import '../styles/Skills.css';

type CategoryId = 'programming' | 'libraries' | 'technologies' | 'analytics';

type CommitConsoleConfig = {
  id: CategoryId;
  title: string;
  subtitle: string;
  branch: string;
  skills: string[];
};

type CommitLine = {
  hash: string;
  skill: string;
};

const CATEGORY_DATA: CommitConsoleConfig[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Core languages and fundamentals I write production systems with.',
    branch: 'main',
    skills: ['Python', 'Java', 'C++', 'SQL', 'OOPs', 'R'],
  },
  {
    id: 'libraries',
    title: 'Libraries & Tooling',
    subtitle: 'Frameworks and stacks I use to ship models and analytics apps.',
    branch: 'stack/libraries',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'MATLAB', 'Power BI', 'SQL Workbench', 'Streamlit'],
  },
  {
    id: 'technologies',
    title: 'Technologies',
    subtitle: 'Platforms, paradigms, and services that shape my solution design.',
    branch: 'features/tech',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Signal Processing', 'Large Language Models', 'Vision Transformers', 'Vision Language Models', 'Git', 'GitHub', 'Java Spring Boot', 'AWS'],
  },
  {
    id: 'analytics',
    title: 'Analytics & Soft Skills',
    subtitle: 'Analytical foundations and team skills I lean on when shipping.',
    branch: 'research/analytics',
    skills: ['Linear Algebra', 'Calculus', 'Probability', 'Statistics', 'Data Mining', 'Feature Extraction', 'Data Visualization', 'Teamwork', 'Leadership', 'Strategy'],
  },
];

const generateHash = (input: string) => {
  const hash = Array.from(input).reduce((acc, char, index) => acc + char.charCodeAt(0) * (index + 11), 0);
  return hash.toString(16).slice(0, 4);
};

const useCommitLog = (messages: string[]) => {
  const [displayLines, setDisplayLines] = useState<string[]>(() => messages);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const blanks = messages.map(() => '');
    setDisplayLines(blanks);
    setActiveLine(0);

    const timeouts: number[] = [];
    let lineIndex = 0;
    let charIndex = 0;

    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(fn, delay);
      timeouts.push(id);
    };

    const typeLine = () => {
      const current = messages[lineIndex] ?? '';
      setDisplayLines((prev) => {
        const next = prev.slice();
        next[lineIndex] = current.slice(0, charIndex + 1);
        return next;
      });
      setActiveLine(lineIndex);
      charIndex += 1;

      if (charIndex < current.length) {
        schedule(typeLine, 18);
        return;
      }

      lineIndex += 1;
      charIndex = 0;

      if (lineIndex < messages.length) {
        schedule(typeLine, 180);
        return;
      }

      schedule(() => {
        setDisplayLines(blanks);
        lineIndex = 0;
        charIndex = 0;
        schedule(typeLine, 200);
      }, 1600);
    };

    schedule(typeLine, 160);

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [messages]);

  return { displayLines, activeLine };
};

const CommitConsole = ({ config }: { config: CommitConsoleConfig }) => {
  const commits: CommitLine[] = useMemo(
    () =>
      config.skills.map((skill) => ({
        hash: generateHash(skill),
        skill,
      })),
    [config.skills],
  );

  const commitStrings = useMemo(
    () => commits.map((commit) => `commit ${commit.hash} ${commit.skill}`),
    [commits],
  );

  const { displayLines, activeLine } = useCommitLog(commitStrings);

  return (
    <div className="skills-terminal">
      <div className="skills-terminal__chrome">
        <div className="skills-terminal__dots">
          <span className="skills-terminal__dot skills-terminal__dot--red" />
          <span className="skills-terminal__dot skills-terminal__dot--amber" />
          <span className="skills-terminal__dot skills-terminal__dot--green" />
        </div>
        <div className="skills-terminal__meta">
          <span className="skills-terminal__title">{config.title.toUpperCase()}</span>
          <span className="skills-terminal__branch">branch/{config.branch}</span>
        </div>
      </div>

      <div className="skills-terminal__body">
        <div className="skills-terminal__subtitle">{config.subtitle}</div>
        <div className="skills-terminal__divider" />
        <div className="skills-terminal__scroll">
          {displayLines.map((line, index) => (
            <div key={`${config.id}-${index}`} className="skills-terminal__line">
              <span className="skills-terminal__prompt">$</span>
              <span className="skills-terminal__message">
                {line}
                {activeLine === index && <span className="skills-terminal__caret" />}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-shell">
      <h2 className="section-header">Technical Skills</h2>
      <p className="skills-subtitle">
        Four quick git logs that capture the languages, libraries, technologies, and analytics foundations I commit to daily.
      </p>

      <div className="skills-console-row">
        {CATEGORY_DATA.map((config) => (
          <CommitConsole key={config.id} config={config} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

