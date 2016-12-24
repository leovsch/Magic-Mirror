# Magic-Mirror

My implementation of the magic mirror project :-)

So far the web interface contains:
- A clock
- A news feed from the dutch news website www.nu.nl
- Weahter forcast using the openweathermap api.
- Greeting that dissapears after 10 seconds.

The webpage is an angular web app using angular version 1.5.8.

Expanded with motion sensor wicth detects when someone is in front of the mirror.
- When motion is detected pi turns screen on and starts playing a random song in the /home/pi/Music folder. 
- When no motion is detected pi turns display off

Expandend with remote so you can control the mirror with a remote
- Starts playing music when you press the right button on the remote

Expanden with websocketserver so that the remote input can be communicated to the webpage and content can be changed.
