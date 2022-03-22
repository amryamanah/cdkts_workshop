#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdktsWorkshopStack } from '../lib/cdkts_workshop-stack';

const app = new cdk.App();
new CdktsWorkshopStack(app, 'CdktsWorkshopStack');
