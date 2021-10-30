import { useParams } from "react-router-dom";
export default function UseParams() {
	// const params  = useParams();
	// console.log(params.id)

	const { id } = useParams();
	console.log(id);
	return < div>
		<h1>Useparams hook component</h1>
	</div>
	}