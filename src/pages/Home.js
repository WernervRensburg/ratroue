import React from "react";

import Image from "react-bootstrap/Image";
import FlipCountdown from "@rumess/react-flip-countdown";

import main_description from "../assets/desc.png";
import initials from "../assets/initials.png";
import dresscode from "../assets/dresscode.png";

import "./static/home.css";

function HomePage() {
    return (
        <div>
            <div className="main-content">
                <Image className="initials" src={initials} />
                <br />
                <span className="main-text">ruben</span>
                <br />
                <span className="main-con">en</span>
                <br />
                <span className="main-text">anjune</span>
            </div>
            <div className="invite-wrapper">
                <div className="day-invite">
                    <Image className="day-image" src={main_description} />
                </div>
                <div className="invite-details">
                    <span className="what-wrapper">
                        <span className="what">ons troudag</span>
                    </span>
                    <br />
                    <div className="desc-container">
                        <span className="invite-description">
                            Jy word hartlik uitgenooi om in Ruben en Anjune se spesiale dag te deel.
                            <br />
                            Sien onder belangrike inligting rakende die troudag.
                        </span>
                    </div>
                </div>
            </div>
            <div className="day-wrapper">
                <div className="day-content">
                    <span className="when">wanneer</span>
                    <br />
                    <div className="when-wrapper">
                        <span className="when-description">30 Maart 2024 15:00</span>
                        <br />
                        <span className="when-description">
                            Gaste moet <strong>stiptelik</strong> 14:30 sit
                        </span>
                    </div>
                    <br />
                    <div className="where-wrapper">
                        <span className="where">waar</span>
                        <br />
                        <span className="where-description">Florence Guest Farm,</span>
                        <br />
                        <span className="where-description">Chrissiesmeer</span>
                    </div>
                    <br />
                </div>
                <div className="maps-embed">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.6489480820765!2d30.26212307772435!3d-26.273054577034365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee9672126c6a635%3A0xc6648e62ec5e5bff!2sFlorence%20Guest%20Farm%20%26%20Wedding%20Venue!5e0!3m2!1sen!2sza!4v1693937815823!5m2!1sen!2sza"
                        allowfullscreen=""
                        loading="lazy"
                        title="guestfarm"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="iframe-embed"
                    ></iframe>
                </div>
            </div>
            <div className="dresscode-wrapper">
                <div className="dresscode-content">
                    <span className="dresscode">kleredrag</span>
                    <br />
                    <span className="dresscode-description">
                        Mans: swart broek, wit hemp, swart das (swart baadjie opsioneel)
                        <br />
                        <br />
                        Dames: Swart rok of broekpak (geen vrou mag enige vorm van wit dra nie)
                    </span>
                    <div className="dresscode-images">
                        <Image className="dresscode-image" src={dresscode} />
                    </div>
                </div>
            </div>
            <div className="smaller-details-wrapper">
                <div className="smaller-details-content">
                    <span className="smaller-details">fyner details</span>
                    <br />
                    <span className="smaller-details-description">
                        Metgesel slegs per uitnodiging
                        <br />
                        Kontant kroeg op die venue beskikbaar
                    </span>
                </div>
            </div>
            <div className="before-function-wrapper">
                <div className="before-function-content">
                    <span className="before-function">voor-troue funksie (vrydagaand)</span>
                    <span className="before-function-description">
                        'n Verwelkomingsaand vind Vrydag plaas. Kom geniet 'n rustige aand saam
                        vriende en familie voor die groot dag.
                        <br />
                        Tyd: 17:00 vir 17:30
                    </span>
                </div>
            </div>
            <div className="rsvp-wrapper">
                <div className="rsvp-content">
                    <span className="rsvp">rsvp</span>
                    <span className="rsvp-description me-auto">
                        2 Februarie 2024
                        <br />
                        <br />
                        RSVP asseblief die naam/name en metgesel (indien enige) van wie die dag gaan
                        meemaak.
                        <br />
                        Bykomend: Voeg ook 3 liedjie versoeke by en of jy die vrydagaand voor-troue
                        funksie gaan bywwon.
                    </span>
                    <div className="rsvp-form">TODO ADD RSVP FORM</div>
                </div>
            </div>
            <div className="accomodation-wrapper">
                <div className="accomodation-content">
                    <span className="accomodation">verblyf</span>
                    <span className="accomodation-description">
                        Daar is meer as genoeg en baie mooi verblyf op die venue beskikbaar. Pryse
                        beloop vanaf R500 per persoon vir die "glamping" tente en R700 per persoon
                        vir die chalets.
                        <br />
                        Beide verblyf opsies sluit ontbyt in.
                        <br />
                        Verblyf op die venue kan gerus met Ada Willemse gereel word.
                        <br />
                        {/* TODO Make number clickable */}
                        +2782 457 6322
                        <br />
                        Alternatiewe verlyf indien die venue se verblyf vol bespreek is:
                        <br />
                        Chrissiesmeer:
                        <br />
                        Mcclouds en John Jack Inn - +2783 625 6097
                        <br />
                        Stasie Meester - +2782 809 7962
                        <br />
                        King Edward Straat B&B - +2783 554 2068
                    </span>
                </div>
            </div>
            <div className="gift-wrapper">
                <div className="gift-content">
                    <span className="gift">geskenk idee</span>
                    <span className="gift-description">
                        Die grootste geskenk is jou teenwoordigheid op die dag van ons troue. Indien
                        jy dit op jou hart het om ons nog verder te bederf sal n finansiele bydrae
                        waardeer word.
                        <br />
                        Daar sal 'n houer op die dag beskikbaar wees waarin die koeverte geplaas kan
                        word.
                    </span>
                </div>
            </div>
            <div className="closing-wrapper">
                <div className="closing-content">
                    <span className="closing">Afsluiting</span>
                    <span className="closing-description">
                        Ons sien baie uit om ons spesiale dag met jou te deel.
                    </span>
                </div>
            </div>
            <div className="clock-wrapper">
                <div className="countdown-clock">
                    <FlipCountdown
                        className="clock"
                        hideYear
                        size="large"
                        endAt={"2024-03-30 15:00:00"}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
