import '../assets/Coordinator.css'

function Coordinator({profile,kaam,naam}){
	return(
		 <div class="templating" id="CoordinatorTemp">
		 <img class="profile" src={profile} />
		 <p class="title">{naam}</p>
		 <p class="description">{kaam} 

		 </p>
		 </div>)
}
export default Coordinator;