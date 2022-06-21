import React from "react";
import NavBar from "../components/NavBar";
import { Container } from "@mui/system";
import { FaBeer } from "react-icons/fa";

const DespreMine = () => {
	return (
		<>
			<NavBar />
			<Container maxWidth="xl">
				<div style={{ marginTop: "30%" }}>
					<h1>DespreMine</h1>
					<h3>
						{" "}
						Lets go for a <FaBeer />?{" "}
					</h3>
				</div>
			</Container>
		</>
	);
};

export default DespreMine;
