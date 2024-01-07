import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialContactDetailsList = [
  { id: uuidv4(), name: "Cat Light", url: "https://dynamiccatlight.ccbp.tech", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  { id: uuidv4(), name: "Project Page", url: "https://sdmyprojectpage.ccbp.tech", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
];

class ProjectsView extends Component {
  state = {
    name: '',
    url: '',
    description: '',
    projectsList: initialContactDetailsList,
  };

  onEnterProject = (event) => {
    this.setState({ name: event.target.value });
  };

  onEnterUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  onEnterDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  onAddContact = (event) => {
    event.preventDefault();

    const { name, url, description } = this.state;

    const newProject = {
      id: uuidv4(),
      name: name,
      url: url,
      description: description,
    };

    this.setState((prevState) => ({
      projectsList: [...prevState.projectsList, newProject],
      name: '',
      url: '',
      description: '',
    }));
  };

  render() {
    const { name, url, description, projectsList } = this.state;

    return (
      <>
        <h1 className='heading'>Projects</h1>
        <section className="input-section">
          <div className='input-container'>
            <form onSubmit={this.onAddContact}>
              <div>
                <input type="text" className="form-control" onChange={this.onEnterProject} value={name} placeholder='type project name' />
              </div>

              <div>
                <input type="text" className="form-control" onChange={this.onEnterUrl} value={url} placeholder='paste project url' />
              </div>
              <div>
                <textarea className="form-control" rows="8" cols='50' onChange={this.onEnterDescription} value={description} placeholder='add description' />
              </div>
              <button className="btn" type="submit">Add Project</button>
            </form>
          </div>
        </section>

        <section className='project-section'>
          <div className='container'>
            {projectsList.map((each) => (
              <div key={each.id} className="Add-project-container">
                <h4>{each.name}</h4>
                <p>{each.description}</p>
                <a
                  href={each.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleLinkClick(each.url);
                  }}
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default ProjectsView;
