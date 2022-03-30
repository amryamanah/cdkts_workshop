"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const assertions_1 = require("aws-cdk-lib/assertions");
const CdktsWorkshop = require("../lib/cdkts_workshop-stack");
test('SQS Queue and SNS Topic Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdktsWorkshop.CdktsWorkshopStack(app, 'MyTestStack');
    // THEN
    const template = assertions_1.Template.fromStack(stack);
    template.hasResourceProperties('AWS::SQS::Queue', {
        VisibilityTimeout: 300
    });
    template.resourceCountIs('AWS::SNS::Topic', 1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrdHNfd29ya3Nob3AudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNka3RzX3dvcmtzaG9wLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsdURBQXlEO0FBQ3pELDZEQUE2RDtBQUU3RCxJQUFJLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO0lBQzNDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE9BQU87SUFDUCxNQUFNLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDdkUsT0FBTztJQUVQLE1BQU0sUUFBUSxHQUFHLHFCQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRTtRQUNoRCxpQkFBaUIsRUFBRSxHQUFHO0tBQ3ZCLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgVGVtcGxhdGUsIE1hdGNoIH0gZnJvbSAnYXdzLWNkay1saWIvYXNzZXJ0aW9ucyc7XG5pbXBvcnQgKiBhcyBDZGt0c1dvcmtzaG9wIGZyb20gJy4uL2xpYi9jZGt0c193b3Jrc2hvcC1zdGFjayc7XG5cbnRlc3QoJ1NRUyBRdWV1ZSBhbmQgU05TIFRvcGljIENyZWF0ZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4gIC8vIFdIRU5cbiAgY29uc3Qgc3RhY2sgPSBuZXcgQ2RrdHNXb3Jrc2hvcC5DZGt0c1dvcmtzaG9wU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snKTtcbiAgLy8gVEhFTlxuXG4gIGNvbnN0IHRlbXBsYXRlID0gVGVtcGxhdGUuZnJvbVN0YWNrKHN0YWNrKTtcblxuICB0ZW1wbGF0ZS5oYXNSZXNvdXJjZVByb3BlcnRpZXMoJ0FXUzo6U1FTOjpRdWV1ZScsIHtcbiAgICBWaXNpYmlsaXR5VGltZW91dDogMzAwXG4gIH0pO1xuICB0ZW1wbGF0ZS5yZXNvdXJjZUNvdW50SXMoJ0FXUzo6U05TOjpUb3BpYycsIDEpO1xufSk7XG4iXX0=