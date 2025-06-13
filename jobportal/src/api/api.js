
const jobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    companyName: 'TechCorp',
    description: 'Build beautiful UIs using React.',
  },
  {
    id: '2',
    title: 'Backend Developer',
    companyName: 'DataWorks',
    description: 'Work on scalable backend services.',
  },
  {
    id: '3',
    title: 'Fullstack Engineer',
    companyName: 'WebTechnologies',
    description: 'Handle frontend and backend.',
  },
];

export function fetchJobs() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(jobs), 700);
  });
}

export function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((j) => j.id === id.toString());
      if (job) resolve(job);
      else reject(new Error('Job not found'));
    }, 700);
  });
}
