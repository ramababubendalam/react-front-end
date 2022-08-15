# React Script to Display Eastern Time Zone


Frontend React Scripts to display Unix time and converts the Unix time to Eastern Time GMT-05 format.

I have used the api gateway created in https://github.com/ramababubendalam/python-backend as the back end server to get the Unix Time and Server Zone and send this to react scripts where it converts to Easter Time Zone using the api http://api.timezonedb.com/v2.1/convert-time-zone?key=M3QAQGMSCU9K&format=json&from=UTC&to=America/Jamaica&time="

Docker file is https://github.com/ramababubendalam/react-front-end/blob/main/Dockerfile used to Build the React Frontend and pushed the image to ECR and Deployed on to ECS.

Cloudformation Template https://github.com/ramababubendalam/react-front-end/blob/main/ecs.yml is used to deploy Frontend react build on to ecs stack

GitHub workflow https://github.com/ramababubendalam/react-front-end/blob/main/.github/workflows/main.yml which have two stages build and deploy.


Example ECS Loadbalancer where front react is deployed

http://ecs-stack-1882850753.eu-west-2.elb.amazonaws.com/  (on live)




![image](https://user-images.githubusercontent.com/22503095/184635861-2b7d1dff-d192-424b-9004-867efd65ad71.png)
