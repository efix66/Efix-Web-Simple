import * as React from "react";
import NavBar from "../components/NavBar";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

// markup
const IndexPage = () => {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<NavBar />
			</ThemeProvider>
		</>
	);
};

export default IndexPage;
