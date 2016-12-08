from gpiozero import MotionSensor
from gpiozero import DigitalInputDevice
import time
import subprocess

pir = MotionSensor(4, queue_len=15, threshold=0.90)
count = 0
monitor_on = True

def motion_detection():
    if pir.motion_detected:
        count = count + 1
        if monitor_on == False:
        	print("Turning monitor on")
        	subprocess.call("/opt/vc/bin/tvservice -p", shell=True)
        	monitor_on = True        
        subprocess.call("omxplayer /home/pi/Desktop/01\ Mumford\ \&\ Sons\ -\ Babel.mp3", shell=True)
    else:
    	count = count + 1
    	if monitor_on == True:
    		print("turning monitor off")
    		subprocess.call("/opt/vc/bin/tvservice -o", shell=True)
    		monitor_on = False

def remote_input():
	print(remote.value)
	
while True:
	remote_input()