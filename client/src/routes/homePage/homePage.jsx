import './homePage.scss'
import SearchBar from "../../components/searchBar/SearchBar.jsx";

function HomePage(){
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get your Dream Place</h1>
                    <p>
                        Explore a wide range of real estate options that suit your needs and preferences.
                        Whether you are looking for a modern apartment in the city, a spacious suburban home,
                        or a commercial property for your business, we have something for everyone.
                    </p>
                    <SearchBar/>

                    <div className='boxes'>
                        <div className='box'>
                            <h1>
                                16+
                            </h1>
                            <h2>
                                Years of Experience
                            </h2>
                        </div>
                        <div className='box'>
                            <h1>
                                200
                            </h1>
                            <h2>
                                Award Gained
                            </h2>
                        </div>
                        <div className='box'>
                            <h1>
                                1200+
                            </h1>
                            <h2>
                                Property Ready
                            </h2>

                        </div>
                    </div>
                </div>


            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt=""/>
            </div>
        </div>
    );
}

export default HomePage;