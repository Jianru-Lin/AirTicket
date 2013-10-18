exports.serviceName = 'Log';
exports.retrive = retrive;
exports.append = append;

// [模块]
var IdTable = require('./lib/id-table.js');

// [变量]
var logList = [];


// [函数]
function retrive(args, cb) {
	var startIndex = args.startIndex;
	var maxLength = args.maxLength;
	var result = [];

	if (!checkArgs()) return;

	for (var i = startIndex; i < logList.length && i < maxLength; ++i) {
		result.push(logList[i]);
	}

	cb({list: result});

	function checkArgs() {
		if (typeof startIndex !== 'number') {
			cb({error: 'startIndex must be number'});
			return false;
		}

		if (startIndex < 0 || startIndex > logTable.length) {
			cb({error: 'startIndex out of range'});
			return false;
		}

		if (typeof maxLength !== 'number') {
			cb({error: 'maxLength must be number'});
			return false;
		}

		if (maxLength < 1) {
			cb({error: 'maxLength must be greater than 1'});
			return false;
		}

		return true;
	}
}

function append(args, cb) {
	var list = args.list;

	if (!checkArgs()) return;

	while (list.length > 0) {
		logList.push(list.shift());
	}

	cb({});

	function checkArgs() {
		if (!Arrary.isArrary(list)) {
			cb({error: 'list must be arrary'});
			return false;
		}

		return true;
	}
}