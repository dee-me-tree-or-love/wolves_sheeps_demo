const records = require("./records.json");

const countRecords = (records) => {
	wolf_count = records.filter((r)=> r == "wolf").length;
	sheep_count = records.filter((r)=> r == "sheep").length;
        console.log(`wolves: ${wolf_count}, sheep: ${sheep_count}`);
}

countRecords(records);
