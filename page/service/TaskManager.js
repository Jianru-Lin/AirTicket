// [导出]
exports.serviceName = 'TaskManager';

exports.create = create;
exports.retrive = retrive;
exports.update = update;
exports['delete'] = delete_;

// [模块]
var KeyTable = require('./lib/key-table.js');

// [全局变量]
var taskTable = KeyTable.create();

// [函数]

function create(args, cb) {
	
}

function retrive(args, cb) {

}

function update(args, cb) {

}

function delete_(args, cb) {

}