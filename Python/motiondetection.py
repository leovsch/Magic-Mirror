from gpiozero import MotionSensor
from gpiozero import DigitalInputDevice
import time
import subprocess
import lirc
import random
import os

# constant variables
music_dir = "/home/pi/Music/"

# collection variables
playlist = []

# init the motion sensor
pir = MotionSensor(4, queue_len=15, threshold=0.90)
monitor_on = True

# init the remote
sockid = lirc.init("slidepuzzle", blocking = False)
lirc.load_config_file("/etc/lirc/lircrc")

# init the music playlist
for filename in os.listdir(positives_dir):
	playlist.append(filename)

# function to handle motion detection
def motion_detection():
	global monitor_on
	global playlist

	if pir.motion_detected:
		if monitor_on == False:
			print("Turning monitor on")
			os.system("/opt/vc/bin/tvservice -p")
			monitor_on = True

		# pick number to play
		randint = random.randint(0, len(playlist) - 1)        
		subprocess.call("omxplayer " + music_dir + playlist[randint], shell=True)
	else:
		if monitor_on == True:
			print("turning monitor off")
			os.system("/opt/vc/bin/tvservice -o")
			monitor_on = False

# function to handle remote input
def remote_input():
	# read the input value and check if there is a button press
	input_value = lirc.nextcode()
	if len(input_value) >= 1:
		# read the input string
		intput_string = input_value[0]
		if intput_string == 'right':
			subprocess.call("omxplayer /home/pi/Desktop/01\ Mumford\ \&\ Sons\ -\ Babel.mp3", shell=True)

	
while True:
	remote_input()
	motion_detection()