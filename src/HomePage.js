const HomePage = (props) => {
    return(
        <div id='homepage'>
            <h1>Welcome to My Portfolio Website!</h1>
            <h3>What do i have here?</h3>
            <p>This website is build using React specifically with <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a>,
                I started this projects as an opportunity to try out the knowledge i have learned about React
                and turned out there are still many things i need to learn, even i'm not sure if i do this properly,
                but my focus here is to get this website working as supposed to in a minimalist design,
                i will try to update and polish this website step by step,
                its also fascinating to see that there are still a lot of methods i yet to learn and can't wait to learn then implement it on my projects.
                Supposedly this Projects should help me in some way to get hired. (Please Hire Me!)
            </p>
            <p>Here You can Find more About my 
                <button className='n-projects' onClick={props.changePage}>Projects</button>, more info 
                <button className='n-about' onClick={props.changePage}>About Me</button>, and some way to 
                <button className='n-contact' onClick={props.changePage}>Contact Me</button>.</p>
        </div>
    )
}

export default HomePage;