import React from "react";
import NavBar from "../components/NavBar";
import { Container } from "@mui/system";

const DespreMine = () => {
	return (
		<>
			<NavBar />
			<Container maxWidth="xl">
				<div style={{ marginTop: "30%" }}>
					<h1>DespreMine</h1>
				</div>
			</Container>
		</>
	);
};

export default DespreMine;
