import '../assets/Coordinator.css'

function Coordinator({profile,kaam,naam}){
	return(
		 <div className="templating" id="CoordinatorTemp">
		 <img className="profile" src={profile} />
		 <p className="title">{naam}</p>
		 <p className="description">{kaam} 

		 </p>
		 </div>)
}
export default Coordinator;