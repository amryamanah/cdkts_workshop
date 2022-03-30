#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const cdkts_workshop_stack_1 = require("../lib/cdkts_workshop-stack");
const app = new cdk.App();
new cdkts_workshop_stack_1.CdktsWorkshopStack(app, 'CdktsWorkshopStack');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrdHNfd29ya3Nob3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGt0c193b3Jrc2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBbUM7QUFDbkMsc0VBQWlFO0FBRWpFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUkseUNBQWtCLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ2RrdHNXb3Jrc2hvcFN0YWNrIH0gZnJvbSAnLi4vbGliL2Nka3RzX3dvcmtzaG9wLXN0YWNrJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbm5ldyBDZGt0c1dvcmtzaG9wU3RhY2soYXBwLCAnQ2RrdHNXb3Jrc2hvcFN0YWNrJyk7XG4iXX0=