const records = require("./records.json");

const countRecords = (records) => {
	wolf_count = records.filter((r)=> r == "wolf").length;
	sheep_count = records.filter((r)=> r == "sheep").length;
        duck_count = records.filter((r)=> r == "duck").length;
	console.log(`wolves: ${wolf_count}, sheep: ${sheep_count}, duck: ${duck_count}`);
}

countRecords(records);
