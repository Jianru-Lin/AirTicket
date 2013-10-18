var g = {
	nextLogIndex: 0,
	maxLength: 100,
	retriveLogWorking: false
}

$(function() {
	setInterval(retriveLog, 2000);
});

function retriveLog() {
	if (retriveLogWorking === true) return;
	retriveLogWorking = true;

	var args = {
		startIndex: g.nextLogIndex,
		maxLength: g.maxLength
	};

	rpc('Log.retrive', args, scb, fcb);

	function scb(result) {
		retriveLogWorking = false;
		writeLogList(result.list);
	}

	function fcb(err) {
		retriveLogWorking = false;
		console.log(err);
	}
}

function writeLogList(logList) {
	logList.forEach(function(log) {
		writeLog(log);
	});

	function writeLog(log) {
		
	}
}