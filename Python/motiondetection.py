from gpiozero import MotionSensor

pir = MotionSensor(4, queue_len=30, threshold=0.99)
count = 0
while True:
    if pir.motion_detected:
        print("Motion detected!", count)
        count = count + 1