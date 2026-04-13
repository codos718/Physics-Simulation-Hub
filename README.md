# Physics-Simulation-Hub
Physics Simulation Hub is an interactive web-based learning platform that brings physics concepts to life through visual simulations. Instead of only reading theory, users can explore and understand physics by interacting with real-time models directly in the browser.

The project contains 9 different simulations covering major topics in physics such as motion, forces, waves, electricity, magnetism, optics, and modern physics concepts.

# Included Simulations
 # Projectile Motion Simulator
A simple simulator to explore how objects move under gravity. Users can adjust angle and velocity to see how range and height change.
* Functionality:
- When user clicks "Start": Animate the projectile in a curved path
- When user clicks "Reset": Clear canvas and reset values
  * What this teaches
  Based on Projectile Motion Simulator
- It shows how throwing something works in real life
- how angle + speed + gravity control the motion


# Ohm’s Law Simulator
Demonstrates the relationship between voltage, current, and resistance using interactive controls.
* User Interaction
  - A battery icon
  - A resistor (box or shape)
  - A bulb (circle)
  - Bulb brightness changes based on current:
  - Higher current → brighter bulb
  - Lower current → dim bulb
- Current flow animation speed increases with current


# Gravity Simulator
Shows how gravitational force affects motion and how objects attract each other in space-like conditions.

 Output Display:
- Show:
  - Selected gravity value
  - Falling time
  - Final velocity

. Visual Features:
- Smooth falling animation
- Ground line
- Object changes speed based on gravity:
  - Moon -slow fall
  - Earth -normal
  - Saturn -faster


# Sound Wave Visualizer
Visual representation of sound waves, helping users understand frequency and amplitude in a simple way.
* User Interaction:
- Sliders update wave in real time
- Changes should reflect instantly
- No reload required

* What this teaches
  Based on-Wave Motion

*You see
- Frequency - pitch
- Amplitude -energy
- Wave behavior in real time

 

# Magnetic Force Simulator
Simulates attraction and repulsion between magnetic poles and shows how distance affects force.
*Interaction
- Allow dragging magnets
- Click to add particles
- Change pole type dynamically

*What this teaches
Based on-Magnetic Force you see
Attraction vs repulsion
Distance effect
Field interaction


# Explosion Physics Sandbox
A fun particle-based simulation showing how energy spreads outward during an explosion.

# Black Hole Simulator
Visualizes how gravity pulls objects toward a black hole and how motion changes near extreme gravity.
*User Interaction
- Allow user to click anywhere on canvas:
 - Add new object at that position

*What this teaches
Based on-Black Hole
-Gravity increases when distance decreases
-Objects spiral inward
-Orbit- collapse


# Chain Reaction Machine
A sequence-based simulation where one event triggers another, showing how energy transfers through a system.
This creates a recursive branching system where newly generated neutrons can trigger further reactions, effectively simulating a chain reaction. The animation loop is handled using (requestAnimationFrame) for smooth, frame-synced updates, while particle states are updated in real time.

Core Mechanics
Collision Detection: Uses Euclidean distance to detect neutron–nucleus interaction
Particle System: Separate arrays for nuclei, neutrons, and fragments
State Updates: Position, velocity, and lifecycle updated per frame
Fission Logic: Randomized neutron emission (2–3) per event
Energy Visualization: Fragment motion + glow effects simulate energy release

# Purpose of the Project

The main goal of this project is to make physics easier to understand through visualization and interaction. Each simulator is designed to help users learn core physics concepts in a more engaging and practical way.

# Built With
HTML
CSS
JavaScript
Font Awesome (for icons)

# Note
This project focuses on simplicity and learning rather than complex physics accuracy. It is designed for educational exploration and interactive understanding.
