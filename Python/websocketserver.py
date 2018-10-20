from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket
import threading

def startWebSocketServer():
	global server
	server.serveforever()

class ServerSocketThread(threading.Thread):
	def __init__(self, threadID):
		threading.Thread.__init__(self)
		self.threadID = threadID
		self._stop = threading.Event()

	def run(self):
		print("Starting thread for websocketserver")
		startWebSocketServer()
		print("Stopping thread for websocketserver")

	def stop(self):
		self._stop.set()

clients = []
mirror_client = None
class SimpleEcho(WebSocket):

    def handleMessage(self):
        self.sendMessage(self.data)
        print("Message recieved")
	
    def handleConnected(self):
        print(self.address, 'connected')
        if self.address == '192.168.0.110':
            mirror_client = self
        else:
            clients.append(self)
    

    def handleClose(self):
        print(self.address, 'closed')

def sendMessage(message):
	if mirror_client != None:
		mirror_client.sendMessage(message)

# socket server to communicate with the webpage
server = SimpleWebSocketServer('', 8080, SimpleEcho)