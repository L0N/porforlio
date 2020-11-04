// component for Projects section
// functional component
const Projects = () => {
    console.log("Projects component ran");
    return (
        <div className="Projects-section three-col">
            <h3>Projects</h3>
            <p>
                You can find my list of projectss below. Links to Github and image previews
            </p>
            <p>
                <ul>
                    <li><a href="https://github.com/L0N/AdventureStory">Adventure Story</a></li>
                    <li><a href="https://github.com/L0N/html-js-calc">HTML JS Calculator</a></li>
                    <li><a href="https://github.com/L0N/basic-express-api">Basic Express API</a></li>
                </ul>
            </p>
        </div>
    );
}

export { Projects }