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
                <img className="carousel-text-image" src="ourteam.png" alt="" />
            </div>
        </div>

        <div className="carousel-content" >
            <div className="carousel-image" >
              <div className="carousel-person-image idan" />
              <div className="carousel-text-row">
                <h1 className="carousel-title" >Founder & CEO</h1>
                <div className="carousel-border" />
                <h1 className="carousel-description" >Idan Zeidman</h1>
              </div>
            </div>
        </div>

        <div className="carousel-content" >
            <div className="carousel-image" >
              <div className="carousel-person-image lorenzo" />
              <div className="carousel-text-row">
                <h1 className="carousel-title" >Founder & CEO</h1>
                <div className="carousel-border" />
                <h1 className="carousel-description" >Lorenzo Noya</h1>
              </div>
            </div>
        </div>

        <div className="carousel-content" >
            <div className="carousel-image" >
              <div className="carousel-person-image matvey" />
              <div className="carousel-text-row">
                <h1 className="carousel-title" >Founder & COO</h1>
                <div className="carousel-border" />
                <h1 className="carousel-description" >Matvey Vasilyev</h1>
              </div>
            </div>
        </div>

        <div className="carousel-content" >
            <div className="carousel-image" >
              <div className="carousel-person-image gabriella" />
              <div className="carousel-text-row">
                <h1 className="carousel-title" >Social Media & <br /> Public Relations</h1>
                <div className="carousel-border" />
                <h1 className="carousel-description" >Gabriella Brookfield</h1>
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