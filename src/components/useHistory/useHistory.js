import { useHistory } from "react-router-dom";
import { Container, Button } from '@mui/material';
export default function UseHistory() {
	const history = useHistory();
	return <Container>
		<h1>Usehistory hook component</h1>
		<Button variant="contained" onClick={() => history.push("/hi")} >Go to another page</Button>
		<Button variant="outlined" onClick={() => history.goBack()}>Go back</Button>
	</Container>
	}