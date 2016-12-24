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
class SimpleEcho(WebSocket):

    def handleMessage(self):
        # echo message back to client
        print("Message recieved")

    def handleConnected(self):
        print(self.address, 'connected')
        clients.append(self)

    def handleClose(self):
        print(self.address, 'closed')

def sendMessage(message):
	for client in clients:
		client.sendMessage(message)

# socket server to communicate with the webpage
server = SimpleWebSocketServer('', 8080, SimpleEcho)