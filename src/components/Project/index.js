const index = () => {
  const project = [
    {
      key: "1",
      title: "Budget Tracker | ",
      class: "budget-tracker",
      link: "https://safe-oasis-51981.herokuapp.com/",
      github: 'https://github.com/climbingryan/budget-trkr-pwa'
    },
    {
      key: "2",
      title: "That Tech Blogger | ",
      class: "tech-blogger",
      link: "https://sleepy-shore-05861.herokuapp.com/",
      github: 'https://github.com/climbingryan/That-tech-blogger'
    },
    {
      key: "3",
      title: "Note Taker | ",
      class: "note-taker",
      link: "https://fathomless-dusk-54471.herokuapp.com/",
      github: 'https://github.com/climbingryan/stickyNote'
    },
    {
      key: "4",
      title: "Pizza Hunt | ",
      class: "pizza-hunt",
      link: "https://safe-oasis-51981.herokuapp.com/",
      github: 'https://github.com/climbingryan/budget-trkr-pwa'
    },
  ];

  return (
    <div className="project-controller">
      {project.map((project) => {
        return (
          <div
            key={project.key}
            className={`project-container ${project.class} image`}
          >
            <h4 className="text-bg">{project.title}</h4>
            <a className="text-bg" target='_blank' rel='noreferrer' href={`${project.link}`}>Site</a>
            <a className='text-bg' target='_blank' rel='noreferrer' href={`${project.github}`}>Repo</a>
          </div>
        );
      })}
    </div>
  );
};

export default index;
