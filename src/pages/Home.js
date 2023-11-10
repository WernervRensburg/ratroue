import React, { useState } from "react";

import { FloatingLabel, Button, Form, Image } from "react-bootstrap";
import PhoneNumber from "../util/PhoneNumber";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import initials from "../assets/initials.png";
import dresscode from "../assets/dresscode.png";
import desc2 from "../assets/desc2.png";
import desc2small from "../assets/desc2small.png";
import desc2xsmall from "../assets/desc2xsmall.png";
import collage from "../assets/collage.png";
import hints from "../assets/VenueHints.jpg";

import "./static/home.css";

function HomePage() {
    const [name, setName] = useState(""),
        onInputName = ({ target: { value } }) => setName(value);
    const [plusOne, setPlusOne] = useState(""),
        onSetPlusOne = ({ target: { value } }) => setPlusOne(value);
    const [firstSong, setFirstSong] = useState(""),
        onSetFirstSong = ({ target: { value } }) => setFirstSong(value);
    const [secondSong, setSecondSong] = useState(""),
        onSetSecondSong = ({ target: { value } }) => setSecondSong(value);
    const [thirdSong, setThirdSong] = useState(""),
        onSetThirdSong = ({ target: { value } }) => setThirdSong(value);

    const [fridayEvent, setFridayEvent] = useState(false);

    const [wedding, setWedding] = useState(false);

    const onSetFridayEvent = (event) => {
        setFridayEvent(event.target.checked);
    };

    const onSetWedding = (event) => {
        setWedding(event.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("https://rubenenanjune.pythonanywhere.com/rsvp/rsvp/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                plusOne: plusOne,
                firstSong: firstSong,
                secondSong: secondSong,
                thirdSong: thirdSong,
                fridayEvent: fridayEvent,
                wedding: wedding,
            }),
        });
        window.location.reload(false);
    };

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
                    <Image className="day-image" src={desc2} />
                    <Image className="day-image-small" src={desc2small} />
                    <Image className="day-image-xsmall" src={desc2xsmall} />
                </div>
                <div className="invite-details">
                    <span className="what-wrapper">
                        <span className="what">ons troudag</span>
                    </span>
                    <br />
                    <div className="desc-container">
                        <span className="invite-description">
                            Kom geniet 'n heerlike naweek troue saam ons!
                            <br />
                            <br />
                            Jy word hartlik uitgenooi om in Ruben en Anjune se spesiale dag te deel.
                            <br />
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
                    <div className="sep-container" style={{ paddingBottom: "25px" }}>
                        <hr className="seperator" />
                    </div>
                    <div className="where-wrapper">
                        <span className="where">waar</span>
                        <span className="where-description">Florence Guest Farm,</span>
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
                        <strong>Swart</strong> en <strong>formeel</strong>
                        <br />
                        <br />
                        Mans: swart broek, wit hemp, swart das.
                        <br />
                        <br />
                        Dames: Swart rok of broekpak
                        <br />
                        (Geen vrou mag enige vorm van wit dra nie).
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
                        <br />
                        Kontant kroeg op die venue beskikbaar
                    </span>
                </div>
            </div>
            <div className="sep-container" style={{ paddingBottom: "55px" }}>
                <hr className="seperator" />
            </div>
            <div className="before-function-wrapper">
                <div className="before-function-content">
                    <span className="before-function">voor-troue funksie (vrydagaand)</span>
                    <br />
                    <span className="before-function-description">
                        'n Verwelkomingsaand vind Vrydag plaas. Kom geniet 'n rustige aand saam
                        vriende en familie voor die groot dag.
                        <br />
                        Tyd: 17:00 vir 17:30
                    </span>
                </div>
            </div>
            <div className="sep-container" style={{ paddingBottom: "55px" }}>
                <hr className="seperator" />
            </div>
            <div className="rsvp-wrapper">
                <div className="rsvp-content">
                    <span className="rsvp">rsvp</span>
                    <br />
                    <span className="rsvp-description">
                        2 Februarie 2024
                        <br />
                        <br />
                        RSVP asseblief die naam/name en metgesel (indien enige) van wie die dag gaan
                        meemaak.
                        <br />
                        <br />
                        Bykomend: Voeg ook 3 liedjie versoeke by en of jy die vrydagaand voor-troue
                        funksie gaan bywoon.
                        <br />
                        <br />
                        Indien jy nie die troue kan bywoon nie, RSVP asseblief nogsteeds en tick die{" "}
                        <br /> 'Gaan nie die troue kan bywoon nie' blokkie.
                    </span>
                    <br />
                    <div className="rsvp-form-wrapper">
                        <div className="rsvp-form">
                            <Form onSubmit={handleSubmit} className="contact-form">
                                <FloatingLabel required controlId="floatingInput" className="mb-3">
                                    <Form.Control
                                        className="form-input"
                                        type="text"
                                        placeholder="Naam"
                                        onChange={onInputName}
                                        value={name}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" className="mb-3">
                                    <Form.Control
                                        className="form-input"
                                        type="text"
                                        placeholder="Metgesel (waar van toepassing)"
                                        onChange={onSetPlusOne}
                                        value={plusOne}
                                    />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" className="mb-3">
                                    <Form.Control
                                        className="form-input"
                                        type="text"
                                        placeholder="Liedjie 1"
                                        onChange={onSetFirstSong}
                                        value={firstSong}
                                    />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" className="mb-3">
                                    <Form.Control
                                        className="form-input"
                                        type="text"
                                        placeholder="Liedjie 2"
                                        onChange={onSetSecondSong}
                                        value={secondSong}
                                    />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingTextarea" className="mb-3">
                                    <Form.Control
                                        className="form-input"
                                        type="text"
                                        placeholder="Liedjie 3"
                                        onChange={onSetThirdSong}
                                        value={thirdSong}
                                    />
                                </FloatingLabel>
                                <FloatingLabel style={{ paddingBottom: "10px" }}>
                                    <label class="container">
                                        <input type="checkbox" onChange={onSetFridayEvent} />
                                        <span className="label-checkbox">
                                            Vrydagaand funksie bywoning
                                        </span>
                                        <span class="checkmark"></span>
                                    </label>
                                </FloatingLabel>
                                <FloatingLabel style={{ paddingBottom: "10px" }}>
                                    <label class="container">
                                        <input type="checkbox" onChange={onSetWedding} />
                                        <span className="label-checkbox">Gaan nie die troue kan bywoon nie</span>
                                        <span class="checkmark"></span>
                                    </label>
                                </FloatingLabel>
                                <div className="btn-container">
                                    <Button className="btn btn-color submit-button" type="submit">
                                        <strong className="btn-text">RSVP</strong>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sep-container" style={{ paddingBottom: "55px" }}>
                <hr className="seperator" />
            </div>
            <div className="accomodation-wrapper">
                <div className="accomodation-content">
                    <span className="accomodation">verblyf</span>
                    <br />
                    <span className="accomodation-description">
                        Daar is meer as genoeg en baie mooi verblyf op die venue beskikbaar. Pryse
                        beloop vanaf R500 per persoon vir die "glamping" tente en R700 per persoon
                        vir die chalets.
                        <br />
                        <br />
                        Beide verblyf opsies sluit ontbyt in.
                        <br />
                        <br />
                        Verblyf op die venue kan gerus met Ada Willemse gereel word via{" "}
                        <PhoneNumber phoneNumber={"082 457 6322"}></PhoneNumber>
                        {". "}
                        (voor einde Januarie laat weet)
                        <br />
                        <br />
                        Alternatiewe verblyf indien die venue se verblyf vol bespreek is:
                        <br />
                        <br />
                        Chrissiesmeer:
                        <br />
                        <br />
                        Mcclouds en John Jack Inn -{" "}
                        <PhoneNumber phoneNumber={"083 625 6097"}></PhoneNumber>
                        <br />
                        <br />
                        Stasie Meester - <PhoneNumber phoneNumber={"082 809 7962"}></PhoneNumber>
                        <br />
                        <br />
                        King Edward Straat B&B -{" "}
                        <PhoneNumber phoneNumber={"060 970 5323"}></PhoneNumber>
                    </span>
                </div>
            </div>
            <div className="sep-container" style={{ paddingBottom: "55px" }}>
                <hr className="seperator" />
            </div>
            <div className="gift-wrapper">
                <div className="gift-content">
                    <span className="gift">geskenk idee</span>
                    <br />
                    <span className="gift-description">
                        Die grootste geskenk is jou teenwoordigheid op die dag van ons troue.
                        <br />
                        <br />
                        Indien jy dit op jou hart het om ons nog verder te bederf sal n finansiele
                        bydrae waardeer word.
                        <br />
                        <br />
                        Daar sal 'n houer op die dag beskikbaar wees waarin die koeverte geplaas kan
                        word.
                    </span>
                </div>
            </div>
            <div className="sep-container">
                <hr className="seperator" />
            </div>
            <div className="hints-wrapper">
                <div className="hints-content">
                    <span className="hints">Wenke van die venue af</span>
                    <Image className="hints-img" src={hints} />
                </div>
            </div>
            <div className="closing-wrapper">
                <div className="closing-content">
                    <span className="closing-description">
                        Ons sien baie uit om ons spesiale dag met jou te deel.
                    </span>
                </div>
            </div>
            <div className="clock-wrapper">
                <div className="countdown-clock">
                    <FlipClockCountdown
                        className="flip-clock"
                        to={new Date("2024-03-31").getTime()}
                        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
                        labelStyle={{
                            fontSize: 12,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "ivory",
                            paddingTop: "5px",
                        }}
                    />
                </div>
            </div>
            <div className="images-wrapper">
                <Image className="collage" src={collage} />
            </div>
        </div>
    );
}

export default HomePage;
