# Magic-Mirror

My implementation of the magic mirror project :-)
See an impression of the project at: https://www.instructables.com/id/How-to-Build-a-Raspberry-Pi-Smart-Mirror/

So far the web interface contains:
- A clock
- A news feed from the dutch news website www.nu.nl and tweakers.net
- Weahter forcast using the openweathermap api.
- Greeting that dissapears after 10 seconds.
- Google calendar 

The webpage is an VUE web app using VUE2.

Expanded with motion sensor wicth detects when someone is in front of the mirror.
- When motion is detected pi turns screen on.
- When no motion is detected pi turns display off

Expanden with websocketserver so that the remote input can be communicated to the webpage and content can be changed.

Expandend with remote so you can control the mirror with a remote
- Can scroll through newsfeeds with remote input


