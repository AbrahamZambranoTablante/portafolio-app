import '../Pages/CSS/Home.css'
export default function Home () {
    return (
        <>
            <div className="home-container">
                <div className="profile__picture">
                    <img src='/profilepicture.jpg' alt='Abraham Zambrano Profile Picture'/>
                    <div className="profile__name">
                        <h1>Abraham Zambrano</h1>
                    </div>
                </div>
                <h2 className='profile__quote'>
                    <span>"</span>guebo y cuca pa siempre<span>"</span>
                </h2>
            </div>
        </>
    )
}