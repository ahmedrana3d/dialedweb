import React from "react";

export const Section5 = () => {

    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
    };

    return (
        <div class="carousel five">

        <div className="carousel-content short" >
            <div className="carousel-text-start" >
                <div>
                    <h1 className="headline-purple" >Our Team</h1>
                    <p className="description" >Valik meie loodud töödest,<br/> mis on mitmekordistanud<br/> ettevõtete kasumeid.</p>
                </div>
            </div>
        </div>

        <div className="carousel-content" onClick={() => handleClick('https://room-example.vercel.app/')} >
            <div className="carousel-image carousel-image-one" >
                <div className="carousel-image-info" >
                </div>
            </div>
        </div>

        <div className="carousel-content" onClick={() => handleClick('https://youtu.be/UpCZ1Y45Sww?si=W9_mbyFBgpBkWDbE')} >
            <div className="carousel-image carousel-image-two" >
                <div className="carousel-image-info" >
                </div>
            </div>
        </div>

        <div className="carousel-content" onClick={() => handleClick('https://youtu.be/UpCZ1Y45Sww?si=W9_mbyFBgpBkWDbE')} >
            <div className="carousel-image carousel-image-three" >
                <div className="carousel-image-info" >
                </div>
            </div>
        </div>

        <div className="carousel-content" onClick={() => handleClick('https://youtu.be/UpCZ1Y45Sww?si=W9_mbyFBgpBkWDbE')} >
            <div className="carousel-image carousel-image-four" >
                <div className="carousel-image-info" >
                </div>
            </div>
        </div>

        <div className="carousel-content" onClick={() => handleClick('https://youtu.be/UpCZ1Y45Sww?si=W9_mbyFBgpBkWDbE')} >
            <div className="carousel-image carousel-image-five" >
                <div className="carousel-image-info" >
                </div>
            </div>
        </div>

        {/* <div className="carousel-content" >
            <div className="carousel-text-end" >
                    <h1 className="medium-headline" >Vaata Kõiki</h1>
                <div className="carousel-button" >
                    <h1 className="small-description bold" >Kõik Projektid</h1>
                </div>
            </div>
        </div> */}

    </div>
    )
}