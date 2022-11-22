import React from "react";
import { useState } from 'react'



//create your first component

const Home = () => {
	const [color, setColor] = useState("")
	return (
		<div className={"trafficlight"}>			
			<div className={"red" + (color === "red" ? " on" : "")} onClick={() => setColor("red")}>
			</div>
			<div className={"yellow" + (color === "yellow" ? " on" : "")} onClick={() => setColor("yellow")}>
			</div>
			<div className={"green" + (color === "green" ? " on" : "")} onClick={() => setColor("green")}>
			</div>
		</div>
	);
};

export default Home;
