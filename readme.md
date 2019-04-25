assets manager server

### setting docker mongo
~~~
docker pull mongo
docker run -dit -p 27017:27017 --name 150gm-mongo -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=1q2w3e4r mongo --auth
~~~

### application 
~~~
npm install
npm run start
~~~


### dummy data 

~~~
{
  "type": "iMac",
  "name": "Sydney",
  "project": "2SPRINT",
  "serialNo": "C02SJ04QGQ17",
  "user": "Rhyno"
}
{
  "type": "iMac",
  "name": "Ankara",
  "project": "MSS",
  "serialNo": "C02R807EGQ17",
  "user": "Dann"
}
{
  "type": "iMac",
  "name": "Houston",
  "project": "ESTORE",
  "serialNo": "C02SJ041GQ17",
  "user": "Iann"
}
{
  "type": "iMac",
  "name": "Ottawa",
  "project": "ESTORE",
  "serialNo": "C02R603RGQ17",
  "user": "Hayden"
}
~~~
