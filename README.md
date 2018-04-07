# WaterDNA
Manage your water. Beautifully


# Server (Serverless Framework)

- `cd server`

- # Installation
	1) Install serverless framework
		- `npm install -g serverless`
	2) Install Dependencies
		- `npm i`
		- `sls dynamodb install`
	2) Login into serverless framework with your AWS credentials
		- get your credentials from Kendrick
		- `sls config credentials --provider aws --key KEY --secret SECRET`
		- `sls login` and create an account if you don't have one
	3) setup .env.yml
		- get file from kendrick

- # Invoke Function Locally
	1) `sls invoke local -f NAME_OF_FUNCTION`

- # Run Locally
	1) `npm start`

- # Deployment
	1) `sls deploy -f NAME_OF_FUNCTION`
		- or to deploy all `npm run deploy`



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
	3) setup .env.production
		- get values from kendrick
		- should match structure of .env.development.local
	3) build & deploy app
		- `npm run deploy`
