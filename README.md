# react-nodejs-template
Repository recipe for setting up a React typescript UI and NodeJS express backend generated from an openapi definition.

## Steps
1. Clone this repo
```bash
git clone git@github.com:sparmboy/react-nodejs-template.git my-new-app
```
2. Run the initialisation script to set you group and artifact details
```bash
./init.sh
```
3. Build the app
```bash
mvn clean install
```

4. Start the app
```shell
cd webapp
npm start
```

5. Access the ui on [http://localhost:8080/index.html](http://localhost:8080/index.html)

6. Access the backend on [http://localhost:8080/api/v1/orders](http://localhost:8080/api/v1/orders)