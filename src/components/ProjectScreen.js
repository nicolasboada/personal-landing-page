const ProjectScreen = ({ img, link }) => {
  return (
    <div className="projectScreen">
      <div className="projectScreen-browser"></div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="projectScreen-img" />
      </a>
    </div>
  );
};

export default ProjectScreen;
