from gpiozero import MotionSensor
from gpiozero import DigitalInputDevice
import subprocess
import lirc
import random
import os
import time

# constant variables
music_dir = "/home/pi/Music/"

# collection variables
playlist = []

# init the motion sensor
pir = MotionSensor(4, queue_len=15)
monitor_on = True

# init the remote
sockid = lirc.init("slidepuzzle", blocking = False)
lirc.load_config_file("/etc/lirc/lircrc")

# current time in millis
current_milli_time = lambda: int(round(time.time() * 1000))
current_time = current_milli_time()

# init the music playlist
for filename in os.listdir(music_dir):
	playlist.append(filename)

# function to handle motion detection
def motion_detection():
	global monitor_on
	global playlist
	global current_time

	difference = current_milli_time() - current_time
	if pir.motion_detected:
		if monitor_on == False:
			print("Turning monitor on")
			subprocess.call("/opt/vc/bin/tvservice -p", shell=True)
			monitor_on = True
			current_time = current_milli_time()
	else:
		if monitor_on == True and difference >= 30000:
			print("turning monitor off")
			subprocess.call("/opt/vc/bin/tvservice -o", shell=True)
			monitor_on = False
			current_time = current_milli_time()


# function to handle remote input
def remote_input():
	global music_dir
	global playlist
	# read the input value and check if there is a button press
	input_value = lirc.nextcode()
	if len(input_value) >= 1:
		# read the input string
		intput_string = input_value[0]
		if intput_string == 'right':
			# pick number to play
			randint = random.randint(0, len(playlist) - 1) 
			subprocess.call("omxplayer " + music_dir + playlist[randint], shell=True)

	
while True:
	remote_input()
	motion_detection()