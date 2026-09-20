import program from '@/content/program.json';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const navigation = [['overview', 'Overview'], ['program', 'Workshops'], ['curriculum', 'Curriculum'], ['apply', 'Participate'], ['team', 'Team'], ['resources', 'Resources']];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="#overview" aria-label="NEXABio home"><img className="brand-logo" src="/nexabio-site/brand/nexabio-logo-light-v1.webp" alt="NEXABio" width="2172" height="724" /><small>NSF CyberTraining Project</small></a>
        <nav aria-label="Main navigation">{navigation.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      </div></header>
      <main id="main">
        <section id="overview" className="hero section-anchor"><div className="container"><div className="hero-grid">
          <div><p className="eyebrow">{program.institution}</p><h1>{program.headline}</h1><p className="intro">{program.introduction}</p><a className="primary-link" href="#apply">View participation information <span aria-hidden="true">↗</span></a> 
          <div className="compensation-callout"><strong>{program.compensation.headline}</strong><p>{program.compensation.eligibility}</p></div></div>
          <figure className="hero-visual"><img src={program.heroImage.src} alt={program.heroImage.alt} width="1448" height="1086" fetchPriority="high" /><figcaption>{program.heroImage.caption}</figcaption></figure>
          </div>
          <aside className="at-a-glance" aria-labelledby="glance-heading"><h2 id="glance-heading">At a glance</h2><dl>{program.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl></aside>
        </div></section>
        <section id="program" className="content-section section-anchor"><div className="container">
          <div className="program-intro"><div><p className="eyebrow section-label">The program</p><h2>{program.workshop.title}</h2><p className="section-intro">{program.overview}</p></div><figure className="program-visual"><img src={program.programImage.src} alt={program.programImage.alt} width="1448" height="1086" loading="lazy" decoding="async" /><figcaption>{program.programImage.caption}</figcaption></figure></div>
          <div className="workshop-details"><h3>What to expect</h3><p className="workshop-format">{program.workshop.format}</p><p>{program.workshop.description}</p></div>
          <div className="schedule"><h3>Proposed workshop timeline</h3>
            <Table className="schedule-table"><TableHeader><TableRow><TableHead scope="col">Activity</TableHead><TableHead scope="col">Planned timing</TableHead><TableHead scope="col">Format</TableHead></TableRow></TableHeader><TableBody>{program.timeline.map(item => <TableRow key={item.activity}><TableCell>{item.activity}</TableCell><TableCell>{item.timing}</TableCell><TableCell>{item.format}</TableCell></TableRow>)}</TableBody></Table>
            <p className="note">Exact dates, session times, and locations will be announced after confirmation.</p>
          </div>
        </div></section>
        <section id="curriculum" className="content-section curriculum-section section-anchor"><div className="container">
          <p className="eyebrow section-label">What you will learn</p><h2>AI methods grounded in biomaterials research</h2><p className="section-intro">{program.curriculumIntroduction}</p>
          <ol className="curriculum-list">{program.curriculum.map((item, index) => <li key={item.title}><span className="topic-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol>
          <div className="project-note"><h3>Learn through hands-on projects</h3><p>{program.projects}</p></div>
        </div></section>
        <section id="apply" className="content-section section-anchor"><div className="container application-grid">
          <div><p className="eyebrow section-label">Participation</p><h2>Interested in taking part?</h2><p>{program.application.audience}</p><p>{program.application.experience}</p><h3 className="subheading">What the interest form asks</h3><ul className="plain-list">{program.application.fields.map(field => <li key={field}>{field}</li>)}</ul><p className="note">12 questions, about 3-5 minutes. Sharing your interest does not confirm enrollment.</p></div>
          <aside className="application-panel" aria-labelledby="application-heading"><span className="status-label">{program.application.status}</span><h3 id="application-heading">Program participation</h3><div className="compensation-callout"><strong>{program.compensation.headline}</strong><p>{program.compensation.eligibility}</p><p>{program.compensation.details}</p></div><dl>{program.application.details.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>{program.application.formUrl ? <a className="primary-link" href={program.application.formUrl}>Open student interest form <span aria-hidden="true">↗</span></a> : <p className="application-message">The student interest form will be available here once prepared.</p>}</aside>
        </div></section>
        <section id="team" className="content-section team-section section-anchor"><div className="container">
          <p className="eyebrow section-label">Project team</p><h2>Connecting computing and bioengineering</h2>
          <div className="team-grid">{program.team.map(person => <article key={person.name} className="team-member"><div className="team-identity"><a className="portrait-link" href={person.profileUrl} aria-label={`${person.name} — UT Dallas faculty profile`}><img className="team-photo" src={person.photo} alt={person.name} width="450" height="450" loading="lazy" decoding="async" /></a><div><p className="role">{person.role}</p><h3><a href={person.profileUrl}>{person.name}</a></h3><p className="department">{person.department}<br />{program.institution}</p></div></div><p className="team-focus">{person.focus}</p><a className="text-link faculty-link" href={person.profileUrl} aria-label={`View ${person.name}'s UT Dallas faculty profile`}>UT Dallas faculty profile <span aria-hidden="true">↗</span></a></article>)}</div>
          <div className="contact-line"><h3>Contact</h3>{program.contactEmail ? <a href={`mailto:${program.contactEmail}`}>{program.contactEmail}</a> : <p>Program contact details will be added before applications open.</p>}</div>
        </div></section>
        <section id="resources" className="content-section section-anchor"><div className="container resources-grid">
          <div><p className="eyebrow section-label">Learning resources</p><h2>Materials to support your training</h2><p>{program.resources.description}</p><p className="note">Teaching materials are in preparation. Links will be added as they become available.</p><h3 className="subheading">Student interest poster</h3><p><a className="text-link" href="/nexabio-site/downloads/NEXABio-student-interest.pdf" download>Download the poster (PDF)</a></p></div>
        </div></section>
      </main>
      <footer className="site-footer">
      <div className="container footer-inner">
        <div><img className="footer-logo" src="/nexabio-site/brand/nexabio-logo-dark-v1.webp" alt="NEXABio" width="2172" height="724" loading="lazy" /><p>{program.institution}</p></div>

        <div><img className="footer-logo" src="/nexabio-site/public/NSF_logo.png" alt="NEXABio" width="2172" height="724" loading="lazy" /> <p>NSF CyberTraining Program<br />This program is currently funded by the National Science Foundation grants OAC 2612287.</p></div>
             
        <a href="#overview">Back to top ↑</a></div>
      </footer>
    </>
  );
}
