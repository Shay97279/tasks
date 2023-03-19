import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World, UD CISC275 with React Hooks and TypeScript - Shay
                Patel
            </header>
            <div className="App-header">
                <h1>Welcome to 275</h1>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>List of Favorite Sports</p>
            <ul>
                <li>Basketball</li>
                <li>Football</li>
                <li>Boxing</li>
                <li>F1</li>
            </ul>
            <img src="picture.png" alt="UD Logo" />

            <Container>
                <Row>
                    <div
                        style={{
                            width: 600,
                            height: 200,
                            backgroundColor: "red",
                            border: "5px solid blue",
                            padding: "50px"
                        }}
                    ></div>
                    <Col>First column.</Col>

                    <div
                        style={{
                            width: 600,
                            height: 200,
                            backgroundColor: "red",
                            border: "5px solid blue",
                            padding: "50px"
                        }}
                    ></div>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
