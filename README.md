# Magic-Mirror

My implementation of the magic mirror project :-)

So far the web interface contains:
- A clock
- A news feed from the dutch news website www.nu.nl and tweakers.net
- Weahter forcast using the openweathermap api.
- Greeting that dissapears after 10 seconds.
- Google calendar 

The webpage is an angular web app using angular version 1.5.8.

Expanded with motion sensor wicth detects when someone is in front of the mirror.
- When motion is detected pi turns screen on.
- When no motion is detected pi turns display off

Expanden with websocketserver so that the remote input can be communicated to the webpage and content can be changed.

Expandend with remote so you can control the mirror with a remote
- Starts playing random music when you press the middle button on the remote. The music is read from the /home/pi/Music folder.
- Can scroll through newsfeeds with remote input


