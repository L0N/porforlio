// component for Contact section
// functional component
const Contact = () => {
    console.log("Contact component ran");
    return (
        <div className="Contact-section three-col">
            <h3>Contact</h3>
            <p>
                You can contact me with the information below
            </p>
            <p>
                mobile: +675 7125 0000
            </p>
            <p>
                Please visit my <a href="https://about.me/frankmanuejr">about.me</a> page for more information
            </p>

        </div>
    );
}

export { Contact }