import { useParams } from "react-router-dom";
export default function Topic() {
	// The <Route> that rendered this component has a
	// path of `/topics/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	let { slug } = useParams();
  
	return (
	  <div>
		<h3>{slug}</h3>
	  </div>
	);
  }