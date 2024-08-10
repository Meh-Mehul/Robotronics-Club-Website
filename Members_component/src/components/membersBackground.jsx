import { useState,useEffect } from 'react'
import NET from 'vanta/src/vanta.net'
import Navbar from './Navbar';
import '../assets/membersBackground.css'
import profile from '../assets/images/profile.png'

function Membersbackground() {
	  useEffect(()=>{
   NET({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  points: 16.00,
  maxDistance: 20.00,
  spacing: 12.00,
  color: 0xff,
  showDots: true
}),[]})

  return (
    
    <div id="vanta" class="bg">
    
    <h1 class="topic">OUR TEAM</h1>
    <div class="template" id="Coordinator"><img class="profile" src={profile} /><p class="title">The Coordinator</p><p class="description"> Piyush Roy</p></div>
    <div class="template" id="coCoordinator1"><img class="profile" src={profile} /><p class="title">The Coordinator</p><p class="description"> Piyush Roy</p></div>
    <div class="template" id="coCoordinator2"><img class="profile" src={profile} /><p class="title">The Coordinator</p><p class="description"> Piyush Roy</p></div>
    <div class="template" id="coCoordinator3"><img class="profile" src={profile} /><p class="title">The Coordinator</p><p class="description"> Piyush Roy</p></div>
      </div>

    
  )

}

export default Membersbackground;