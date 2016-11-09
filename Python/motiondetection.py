from gpiozero import MotionSensor
import time
import subprocess

pir = MotionSensor(4, queue_len=15, threshold=0.90)
count = 0
monitor_on = True

while True:
    if pir.motion_detected:
        print("Motion detected!", count)
        count = count + 1
        if monitor_on == False:
        	subprocess.call("/opt/vc/bin/tvservice -p", shell=True)
        	monitor_on = True        
        subprocess.call("omxplayer /home/pi/Desktop/01\ Mumford\ \&\ Sons\ -\ Babel.mp3", shell=True)
    else:
    	count = count + 1
    	if monitor_on == True:
    		subprocess.call("/opt/vc/bin/tvservice -o", shell=True)
    		monitor_on = False