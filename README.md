# WaterDNA
Manage your water. Beautifully


# Server (Serverless Framework)

- `cd server`

- # Installation
	1) Install serverless framework
		- `npm install -g serverless`
	2) Login into serverless framework with your AWS credentials
		- get your credentials from Kendrick
		- `sls login`

- # Run Locally
	1) `sls invoke local -f NAME_OF_FUNCTION`


# WebApp (React Redux)

- `cd app`

- # Installation
	1) Install Yarn
		- `npm install -g yarn`
	2) Install Dependencies
		- `yarn`

- # Run Locally
	1) `yarn start`

- # Deployment
	1) install aws-cli
		- `brew install python3`
		- `curl -O https://bootstrap.pypa.io/get-pip.py`
		- `python3 get-pip.py --user`
		- `pip3 install awscli --upgrade --user`
		- `rm get-pip.py`
	2) configure aws-cli
		- `aws configure`
		- enter in IAM credentials
	3) build app
		- yarn build
	4) navigate to build folder
		- cd build
	5) update s3 bucket
		- *BE SURE YOU ARE IN THE BUILD FOLDER*
		- `aws s3 cp . s3://waterapp.com/ --recursive`
