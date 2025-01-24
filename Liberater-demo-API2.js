{
	"info": {
		"_postman_id": "1574dfd0-f4c7-464f-983a-acf3047da5b9",
		"name": "Liberater demo API",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "23291377",
		"_collection_link": "https://martian-meadow-592140.postman.co/workspace/Team-Workspace~3d1daa4d-1969-4e40-82d4-62f8662741c2/collection/23291377-1574dfd0-f4c7-464f-983a-acf3047da5b9?action=share&source=collection_link&creator=23291377"
	},
	"item": [
		{
			"name": "GETCONSENT",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "apiKey",
						"value": "d69ebc24-84e2-49f0-8e3a-7acd378e9d56",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://192.168.210.26:12000/F002DATASYSTEM/APPUSER/GETCONSENT"
			},
			"response": []
		},
		{
			"name": "DATASUBJECTADD",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "apiKey",
						"value": "d69ebc24-84e2-49f0-8e3a-7acd378e9d56",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"CUID\":\"CUID-1732521069024360018-YnCVbxLVDX\",\n    \"varsionno\":\"3\",\n    \"VERSION\":\"test form\",\n    \"MUID\":\"1659900365588\",\n    \"DATASUBJECTNAME\":\"Supic test\",\n    \"PHONE\":\"0867196277\",\n    \"EMAIL\":\"Supic@mail.com\",\n    \"SP01\":\"\",\n    \"SP02\":\"\",\n    \"SP03\":\"\",\n    \"SP04\":\"\",\n    \"SP05\":\"\",\n    \"LISTANS\":[\n         {\n            \"ANS\": \"YES\",\n            \"DATE\": \"1724939064546434800\",\n            \"HTML\": \"<h2>ยินยอมในการใช้ข้อมูลส่วนบุคคล</h2>\",\n            \"QID\": \"QUID-1724939064546434790-fqSloaCrRr\",\n            \"QUESTION\": \"ยินยอมในการใช้ข้อมูลส่วนบุคคล\"\n        },\n        {\n            \"ANS\": \"YES\",\n            \"DATE\": \"1724939119583532500\",\n            \"HTML\": \"การให้ความยินยอมในความเป็นส่วนตัว\",\n            \"QID\": \"QUID-1724939119583532452-WQASRYiGMf\",\n            \"QUESTION\": \"การให้ความยินยอมในความเป็นส่วนตัว\"\n        },\n        {\n            \"ANS\": \"NO\",\n            \"DATE\": \"1732520488878946000\",\n            \"HTML\": \"test3 return\",\n            \"QID\": \"QUID-1732520488878946053-esRdOqObuj\",\n            \"QUESTION\": \"test3 return\"\n        },\n        {\n            \"ANS\": \"NO\",\n            \"DATE\": \"1732519788587704800\",\n            \"HTML\": \"test\",\n            \"QID\": \"QUID-1732519788587704825-zgXBtqWecT\",\n            \"QUESTION\": \"test\"\n        },\n        {\n            \"ANS\": \"NO\",\n            \"DATE\": \"1724602811460944000\",\n            \"HTML\": \"ทดสอบระบบคำถาม\",\n            \"QID\": \"QUID-1724602811460943934-XFOIYWaloJ\",\n            \"QUESTION\": \"ทดสอบระบบคำถาม\"\n        },\n        {\n            \"ANS\": \"YES\",\n            \"DATE\": \"1724939029697787400\",\n            \"HTML\": \"ยินยอมในการทำงาน\",\n            \"QID\": \"QUID-1724939029697787407-sljRTbWqHk\",\n            \"QUESTION\": \"ยินยอมในการทำงาน\"\n        }\n    ]\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://127.0.0.1:12000/F002DATASYSTEM/APPUSER/DATASUBJECTADD"
			},
			"response": []
		},
		{
			"name": "DATASUBJECTGETLAST",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "apiKey",
						"value": "d69ebc24-84e2-49f0-8e3a-7acd378e9d56",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"MUID\":\"1657700388888\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://127.0.0.1:12000/F002DATASYSTEM/APPUSER/DATASUBJECTGETLAST"
			},
			"response": []
		},
		{
			"name": "GETNAMEBYQUID",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "apiKey",
						"value": "d69ebc24-84e2-49f0-8e3a-7acd378e9d56",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"QID\":\"QUID-1724939029697787407-sljRTbWqHk\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://127.0.0.1:12000/F002DATASYSTEM/APPUSER/GETNAMEBYQUID"
			},
			"response": []
		},
		{
			"name": "GETALLLAST",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "apiKey",
						"value": "d69ebc24-84e2-49f0-8e3a-7acd378e9d56",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://127.0.0.1:12000/F002DATASYSTEM/APPUSER/GETALLLAST"
			},
			"response": []
		},
		{
			"name": "DATASUBJECTEDIT",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "apiKey",
						"value": "",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"MUID\":\"1657700388888\",\n    \"DATASUBJECTNAME\":\"SupiD testUU\",\n    \"PHONE\":\"0867196277\",\n    \"EMAIL\":\"Supic@mail.com\",\n    \"SP01\":\"\",\n    \"SP02\":\"\",\n    \"SP03\":\"\",\n    \"SP04\":\"\",\n    \"SP05\":\"\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://127.0.0.1:12000/F002DATASYSTEM/APPUSER/DATASUBJECTEDIT"
			},
			"response": []
		}
	]
}